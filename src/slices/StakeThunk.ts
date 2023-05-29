import { ethers } from "ethers";
import { addresses } from "../constants";
import { abi as ierc20Abi } from "../abi/IERC20.json";
import { abi as faucetAbi } from "../abi/Faucet.json";
import nftAirdropAbi from "../abi/airdropNFTContract.json";
import { abi as OlympusStaking } from "../abi/OlympusStakingv2.json";
import { abi as StakingHelper } from "../abi/StakingHelper.json";
import { clearPendingTxn, fetchPendingTxns, getStakingTypeText } from "./PendingTxnsSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAccountSuccess, getBalances } from "./AccountSlice";
import { error } from "../slices/MessagesSlice";
import { IActionValueAsyncThunk, IChangeApprovalAsyncThunk, IJsonRPCError, IFaucetAsyncThunk } from "./interfaces";
import { segmentUA } from "../helpers/userAnalyticHelpers";
import { loadAccountDetails } from "./AccountSlice";
import { parseMetamaskErrorMessage } from "src/helpers";
interface IUAData {
  address: string;
  value: string;
  approved: boolean;
  txHash: string | null;
  type: string | null;
}


export const claimNFT = createAsyncThunk(
  "stake/claimFaucet",
  async ({ provider, address, networkID }: IFaucetAsyncThunk, { dispatch }) => {
    if (!address) {
      dispatch(error("Please connect your wallet!"));
      return;
    }

    const signer = provider.getSigner(address).connectUnchecked();
    const faucetContract = new ethers.Contract(addresses[networkID].NFT_AIRDROP_ADDRESS as string, nftAirdropAbi, signer);
    let requestTokensTx;
    try {

      requestTokensTx = await faucetContract.mint();
      const pendingTxnType = "claming";
      const text = "text";
      dispatch(fetchPendingTxns({ txnHash: requestTokensTx.hash, text, type: pendingTxnType }));
      await requestTokensTx.wait();
      window.alert("Cngratulations! You've got an NFT.");
    } catch (e: unknown) {
      const errorMessage = parseMetamaskErrorMessage(e);
      window.alert(errorMessage);
      dispatch(() => {

        console.log((e as IJsonRPCError).message.search("user rejected transaction"));
        if ((e as IJsonRPCError).message == "Internal JSON-RPC error.") {
          window.alert("You have already received your daily tokens");
        } if ((e as IJsonRPCError).message.search("user rejected transaction") > -1) {
        }
      });
      return;
    } finally {
      if (requestTokensTx) {
        dispatch(clearPendingTxn(requestTokensTx.hash));
      }
    }
  },
);

export const claimFaucet = createAsyncThunk(
  "stake/claimFaucet",
  async ({ provider, address, networkID }: IFaucetAsyncThunk, { dispatch }) => {
    if (!address) {
      dispatch(error("Please connect your wallet!"));
      return;
    }

    const signer = provider.getSigner();
    const faucetContract = new ethers.Contract(addresses[networkID].FAUCET_ADDRESS as string, faucetAbi, signer);
    let requestTokensTx;
    try {

      requestTokensTx = await faucetContract.requestTokens(address);
      const pendingTxnType = "claming";
      const text = "text";
      dispatch(fetchPendingTxns({ txnHash: requestTokensTx.hash, text, type: pendingTxnType }));
      await requestTokensTx.wait();
    } catch (e: unknown) {

      const errorMessage = parseMetamaskErrorMessage(e);
      console.log(errorMessage);

      dispatch(() => {

        console.log((e as IJsonRPCError).message.search("user rejected transaction"));
        if ((e as IJsonRPCError).message == "Internal JSON-RPC error.") {
          window.alert("You have already received your daily tokens");
        } if ((e as IJsonRPCError).message.search("user rejected transaction") > -1) {

        } else {
          window.alert("Ten tokens have been sent to your wallet");
        }
      });
      return;
    } finally {
      if (requestTokensTx) {
        dispatch(clearPendingTxn(requestTokensTx.hash));
      }
    }
  },
);

export const changeApproval = createAsyncThunk(
  "stake/changeApproval",
  async ({ token, provider, address, networkID }: IChangeApprovalAsyncThunk, { dispatch }) => {
    if (!provider) {
      dispatch(error("Please connect your wallet!"));
      return;
    }

    const signer = provider.getSigner();
    const ohmContract = new ethers.Contract(addresses[networkID].CST_ADDRESS as string, ierc20Abi, signer);
    const sohmContract = new ethers.Contract(addresses[networkID].SCST_ADDRESS as string, ierc20Abi, signer);
    let approveTx;
    try {
      if (token === "ohm") {
        approveTx = await ohmContract.approve(
          addresses[networkID].STAKING_HELPER_ADDRESS,
          ethers.utils.parseUnits("1000000000", "gwei").toString(),
        );
      } else if (token === "sohm") {
        approveTx = await sohmContract.approve(
          addresses[networkID].STAKING_ADDRESS,
          ethers.utils.parseUnits("1000000000", "gwei").toString(),
        );
      }
      const text = "Approve " + (token === "ohm" ? "Staking" : "Unstaking");
      const pendingTxnType = token === "ohm" ? "approve_staking" : "approve_unstaking";
      dispatch(fetchPendingTxns({ txnHash: approveTx.hash, text, type: pendingTxnType }));

      await approveTx.wait();
    } catch (e: unknown) {

      const errorMessage = parseMetamaskErrorMessage(e);
      console.log(errorMessage);
      dispatch(error((e as IJsonRPCError).message));
      return;
    } finally {
      if (approveTx) {
        dispatch(clearPendingTxn(approveTx.hash));
      }
    }

    const stakeAllowance = await ohmContract.allowance(address, addresses[networkID].STAKING_HELPER_ADDRESS);
    const unstakeAllowance = await sohmContract.allowance(address, addresses[networkID].STAKING_ADDRESS);
    return dispatch(
      fetchAccountSuccess({
        staking: {
          ohmStake: +stakeAllowance,
          ohmUnstake: +unstakeAllowance,
        },
      }),
    );
  },
);

export const changeStake = createAsyncThunk(
  "stake/changeStake",
  async ({ action, value, provider, address, networkID }: IActionValueAsyncThunk, { dispatch }) => {
    if (!provider) {
      dispatch(error("Please connect your wallet!"));
      return;
    }

    const signer = provider.getSigner();
    const staking = new ethers.Contract(addresses[networkID].STAKING_ADDRESS as string, OlympusStaking, signer);
    const stakingHelper = new ethers.Contract(
      addresses[networkID].STAKING_HELPER_ADDRESS as string,
      StakingHelper,
      signer,
    );

    let stakeTx;
    let uaData: IUAData = {
      address: address,
      value: value,
      approved: true,
      txHash: null,
      type: null,
    };
    try {
      if (action === "stake") {
        uaData.type = "stake";
        stakeTx = await stakingHelper.stake(ethers.utils.parseUnits(value, "gwei"), address);
      } else {
        uaData.type = "unstake";
        stakeTx = await staking.unstake(ethers.utils.parseUnits(value, "gwei"), true);
      }
      const pendingTxnType = action === "stake" ? "staking" : "unstaking";
      uaData.txHash = stakeTx.hash;
      dispatch(fetchPendingTxns({ txnHash: stakeTx.hash, text: getStakingTypeText(action), type: pendingTxnType }));
      await stakeTx.wait();
      dispatch(loadAccountDetails({ networkID, address, provider }));
    } catch (e: unknown) {

      const errorMessage = parseMetamaskErrorMessage(e);
      console.log(errorMessage);
      uaData.approved = false;
      const rpcError = e as IJsonRPCError;
      if (rpcError.code === -32603 && rpcError.message.indexOf("ds-math-sub-underflow") >= 0) {
        dispatch(
          error("You may be trying to stake more than your balance! Error code: 32603. Message: ds-math-sub-underflow"),
        );
      } else {
        dispatch(error(rpcError.message));
      }
      return;
    } finally {
      if (stakeTx) {
        segmentUA(uaData);

        dispatch(clearPendingTxn(stakeTx.hash));
      }
    }
    dispatch(getBalances({ address, networkID, provider }));
  },
);
