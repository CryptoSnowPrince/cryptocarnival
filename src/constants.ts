export const THE_GRAPH_URL = "https://api.thegraph.com/subgraphs/name/drondin/olympus-protocol-metrics";
// export const THE_GRAPH_URL = "https://api.thegraph.com/subgraphs/name/teradev203/crypstarterdao";


export const EPOCH_INTERVAL = 9600;

// NOTE could get this from an outside source since it changes slightly over time
export const BLOCK_RATE_SECONDS = 3;

export const TOKEN_DECIMALS = 9;

export const POOL_GRAPH_URLS = {
  4: "https://api.thegraph.com/subgraphs/name/pooltogether/rinkeby-v3_4_3",
  1: "https://api.thegraph.com/subgraphs/name/pooltogether/pooltogether-v3_4_3",
};

interface IAddresses {
  [key: number]: { [key: string]: string };
}

export const addresses: IAddresses = {
  4: {
    // DAI_ADDRESS: "0xB2180448f8945C8Cc8AE9809E67D6bd27d8B2f2C", // duplicate
    FAIRLAUNCH_ADDRESS: "0xAb4b6c165fCD15dBbdF9276Ef974479A314054AB",
    CSTP_ADDRESS: "0xbfA776B797De1A99a29Fde68b63f114c6eBaDcc0", // duplicate
    PRESALE_ADDRESS:"0xAb4b6c165fCD15dBbdF9276Ef974479A314054AB",
    DAI_ADDRESS: "0xF95BD116A3A3E0053b0B757892450E5FCD55CaBF", // duplicate
    CST_ADDRESS: "0x6959a327a1EF8eA58A732a9548C775aB9Ac76002", // 0xC0b491daBf3709Ee5Eb79E603D73289Ca6060932
    STAKING_ADDRESS: "0xE46264D6b1FA3923Dcddc2f34E9d7ADE0c8eBDCe", // 0xC5d3318C0d74a72cD7C55bdf844e24516796BaB2
    STAKING_HELPER_ADDRESS: "0x701127E09553404086FA28f5348EF4a396aC1651", // 0xf73f23Bb0edCf4719b12ccEa8638355BF33604A1
    OLD_STAKING_ADDRESS: "0xb640AA9082ad720c60102489b806E665d67DCE32",
    SCST_ADDRESS: "0xbcffc2Eed8cb2272dF7dad67AFa6AF5261d50676", // 0x1Fecda1dE7b6951B248C0B62CaeBD5BAbedc2084
    OLD_SPID_ADDRESS: "0x8Fc4167B0bdA22cb9890af2dB6cB1B818D6068AE",
    MIGRATE_ADDRESS: "0x3BA7C6346b93DA485e97ba55aec28E8eDd3e33E2",
    DISTRIBUTOR_ADDRESS: "0x9dB85ba9fB6fEF9796FdbeacB3cb2E0F09ceBF87", // "0x0626D5aD2a230E05Fb94DF035Abbd97F2f839C3a",
    BONDINGCALC_ADDRESS: "0xaDBE4FA3c2fcf36412D618AfCfC519C869400CEB",
    CIRCULATING_SUPPLY_ADDRESS: "0x5b0AA7903FD2EaA16F1462879B71c3cE2cFfE868",
    TREASURY_ADDRESS: "0xca25ff1d6daa8eb782b85f688a446750e2458cd6", // 0x0d722D813601E4y8b7DAcb2DF9bae282cFd98c6E7
    REDEEM_HELPER_ADDRESS: "0xBd35d8b2FDc2b720842DB372f5E419d39B24781f",
    PT_TOKEN_ADDRESS: "0x0a2d026bacc573a8b5a2b049f956bdf8e5256cfd", // 33T token address, taken from `ticket` function on PRIZE_STRATEGY_ADDRESS
    PT_PRIZE_POOL_ADDRESS: "0xf9081132864ed5e4980CFae83bDB122d86619281", // NEW
    PT_PRIZE_STRATEGY_ADDRESS: "0x2Df17EA8D6B68Ec444c9a698315AfB36425dac8b", // NEW
    USDT_ADDRESS:'0x01547Ef97f9140dbDF5ae50f06B77337B95cF4BB',
  },
  97: {
    // DAI_ADDRESS: "0xB2180448f8945C8Cc8AE9809E67D6bd27d8B2f2C", // duplicate
    CST_ADDRESS: "0x16c7BafAd45f900651678B45897ac6DAc02e791d", // 0xC0b491daBf3709Ee5Eb79E603D73289Ca6060932
    FAIRLAUNCH_ADDRESS: "0xD22B07bf59a649a5737717A35583C5904F888CC6",
    TREASURY_ADDRESS: "", // 0x0d722D813601E48b7DAcb2DF9bae282cFd98c6E7
    SCST_ADDRESS: "", // 0x1Fecda1dE7b6951B248C0B62CaeBD5BAbedc2084
    STAKING_ADDRESS: "", // 0xC5d3318C0d74a72cD7C55bdf844e24516796BaB2
    STAKING_HELPER_ADDRESS: "0xAe613aaFb32eB06AcD31CAbE6401aAD4e99F766C", // 0xf73f23Bb0edCf4719b12ccEa8638355BF33604A1
    DISTRIBUTOR_ADDRESS: "0xd485De127bfc63FB4b65ED9c9743905726b14781", // "0x0626D5aD2a230E05Fb94DF035Abbd97F2f839C3a",
    BUSDBONDDEPOSITORY_ADDRESS: "0xea212D3772D5B4BAf0390910e9437b4CD7B34AF3",
    BUSDLPBONDDEPOSITORY_ADDRESS: "0xBaeDb3377b35A4ce5fA3Ab11e4B0fc684e449270",
    DAIBONDDEPOSITORY_ADDRESS: "0x97C1dD41A40f999e8f9c14Ee18e42E3B0Ef89506",
    USDTBONDDEPOSITORY_ADDRESS: "0xea212D3772D5B4BAf0390910e9437b4CD7B34AF3",
    BUSDLPTOKEN_ADDRESS: "0xCD49fe66823A5dD0C43AaA69ac66A7B82bdaB5E7",
    DAI_ADDRESS: "0x91fb801968861D88779eE3cF0770d0CA2CB5e603", // duplicate
    USDT_ADDRESS: "0x91fb801968861D88779eE3cF0770d0CA2CB5e603", // duplicate
    BONDINGCALC_ADDRESS: "0x763F54e1B942a9a1562fec839A69D7C8618C8811",
    REDEEM_HELPER_ADDRESS: "0x17EB30c86AbFF482CafAec600D9086278215EdDD",
    // OLD_STAKING_ADDRESS: "0xb640AA9082ad720c60102489b806E665d67DCE32",
    // OLD_SPID_ADDRESS: "0x8Fc4167B0bdA22cb9890af2dB6cB1B818D6068AE",
    // MIGRATE_ADDRESS: "0x3BA7C6346b93DA485e97ba55aec28E8eDd3e33E2",
    // PT_PRIZE_POOL_ADDRESS: "0xf9081132864ed5e4980CFae83bDB122d86619281", // NEW
    // PT_PRIZE_STRATEGY_ADDRESS: "0x2Df17EA8D6B68Ec444c9a698315AfB36425dac8b", // NEW
    // USDT_ADDRESS:'0x8301F2213c0eeD49a7E28Ae4c3e91722919B8B47',
    BUSD_ADDRESS: "0x8301F2213c0eeD49a7E28Ae4c3e91722919B8B47", // duplicate
    // CSTP_ADDRESS: "0xbfA776B797De1A99a29Fde68b63f114c6eBaDcc0", // duplicate
    // PRESALE_ADDRESS:"0xAb4b6c165fCD15dBbdF9276Ef974479A314054AB",
  },
  56: {
    CST_ADDRESS: "0xC182A1995C0fe330B88fB3f3c04B3c59004f1AC5",
    FAIRLAUNCH_ADDRESS: "0x802bc8838E3A700a1E986F7d1316c4f5B935E529",
    PRESALE_ADDRESS:"",
    CSTP_ADDRESS: "0xF95BD116A3A3E0053b0B757892450E5FCD55CaBF", // duplicate
    DAI_ADDRESS: "0xe9e7cea3dedca5984780bafc599bd69add087d56", // duplicate
    STAKING_ADDRESS: "0xE46264D6b1FA3923Dcddc2f34E9d7ADE0c8eBDCe", // The new staking contract
    STAKING_HELPER_ADDRESS: "0xD4BAB1B30002073a02eAA325e0Fc04C208ca6a49", // Helper contract used for Staking only
    SCST_ADDRESS: "0x8f74a681D5357DddeC9bd9967e256a2fb467B9A4",
    DISTRIBUTOR_ADDRESS: "0xE375C9E5745FDA11f0DfE76383bfC102Ae599aD6",
    BONDINGCALC_ADDRESS: "0xd9145CCE52D386f254917e481eB44e9943F39138",
    TREASURY_ADDRESS: "0xc1F2477B33a987605377b600f5406e89DE70f017",
    REDEEM_HELPER_ADDRESS: "0x912B1989391BD8Ee98ccE3D1F92a6231416619e9",
    BUSDBONDDEPOSITORY_ADDRESS: "0x62fa89AAb59Af8be162F521ce7285B9faCCd1907",
    DAIBONDDEPOSITORY_ADDRESS: "0x62fa89AAb59Af8be162F521ce7285B9faCCd1907",
    USDTBONDDEPOSITORY_ADDRESS: "0x62fa89AAb59Af8be162F521ce7285B9faCCd1907",
    BUSDLPBONDDEPOSITORY_ADDRESS: "0x62fa89AAb59Af8be162F521ce7285B9faCCd1907",

    IDO_ADDRESS:'0x3Ae07374d7C89f608906321444e8AFdED91aDA5E',
    BUSD_ADDRESS:'0xe9e7cea3dedca5984780bafc599bd69add087d56',
    USDT_ADDRESS:'0xe9e7cea3dedca5984780bafc599bd69add087d56',
  },
  43114: {
    CST_ADDRESS: "0xC182A1995C0fe330B88fB3f3c04B3c59004f1AC5",
    FAIRLAUNCH_ADDRESS: "0x802bc8838E3A700a1E986F7d1316c4f5B935E529",
    PRESALE_ADDRESS:"",
    CSTP_ADDRESS: "0xF95BD116A3A3E0053b0B757892450E5FCD55CaBF", // duplicate
    DAI_ADDRESS: "0xe9e7cea3dedca5984780bafc599bd69add087d56", // duplicate
    STAKING_ADDRESS: "0xE46264D6b1FA3923Dcddc2f34E9d7ADE0c8eBDCe", // The new staking contract
    STAKING_HELPER_ADDRESS: "0xD4BAB1B30002073a02eAA325e0Fc04C208ca6a49", // Helper contract used for Staking only
    SCST_ADDRESS: "0x8f74a681D5357DddeC9bd9967e256a2fb467B9A4",
    DISTRIBUTOR_ADDRESS: "0xE375C9E5745FDA11f0DfE76383bfC102Ae599aD6",
    BONDINGCALC_ADDRESS: "0xd9145CCE52D386f254917e481eB44e9943F39138",
    TREASURY_ADDRESS: "0xc1F2477B33a987605377b600f5406e89DE70f017",
    REDEEM_HELPER_ADDRESS: "0x912B1989391BD8Ee98ccE3D1F92a6231416619e9",
    BUSDBONDDEPOSITORY_ADDRESS: "0x62fa89AAb59Af8be162F521ce7285B9faCCd1907",
    DAIBONDDEPOSITORY_ADDRESS: "0x62fa89AAb59Af8be162F521ce7285B9faCCd1907",
    USDTBONDDEPOSITORY_ADDRESS: "0x62fa89AAb59Af8be162F521ce7285B9faCCd1907",
    BUSDLPBONDDEPOSITORY_ADDRESS: "0x62fa89AAb59Af8be162F521ce7285B9faCCd1907",
    FAUCET_ADDRESS: "0xe52c7545F670c2d7723A5A306c0111829201ED10",
    NFT_AIRDROP_ADDRESS: "0x6a35af37eD1BE39431Ec45606c67957e6BB364BE",
    IDO_ADDRESS:'0x3Ae07374d7C89f608906321444e8AFdED91aDA5E',
    BUSD_ADDRESS:'0xe9e7cea3dedca5984780bafc599bd69add087d56',
    USDT_ADDRESS:'0xe9e7cea3dedca5984780bafc599bd69add087d56',
  },
  4002: {
    FAIRLAUNCH_ADDRESS: "0x5b55e27bCD7522E4e393DaF2c754498a0c2d818A",
    DAI_ADDRESS: "0x3923D2ec541e8dD40D8C0fA3cB4d109f59E7d35C", // duplicate
    BUSD_ADDRESS:'0x3923D2ec541e8dD40D8C0fA3cB4d109f59E7d35C'
  },
};
