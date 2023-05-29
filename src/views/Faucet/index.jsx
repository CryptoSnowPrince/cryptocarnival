import { useDispatch, useSelector } from "react-redux";
import { useMediaQuery } from "usehooks-ts";

import image1 from "../../assets/images/homeV3/joker.png";
import image2 from "../../assets/images/icons/steps.png";
import image3 from "../../assets/images/icons/BlockChain1.png";
import image4 from "../../assets/images/icons/BlockChain6.png";
import image5 from "../../assets/images/icons/BlockChain3.png";
import image6 from "../../assets/images/icons/BlockChain4.png";
import image7 from "../../assets/images/icons/BlockChain5.png";
import image8 from "../../assets/images/icons/BlockChain2.png";
import image9 from "../../assets/images/icons/BlockChain2.png";
import image10 from "../../assets/images/icons/One.svg";
import image11 from "../../assets/images/icons/two.svg";
import image12 from "../../assets/images/icons/three.svg";
import image13 from "../../assets/images/icons/earthBg.svg";
import image14 from "../../assets/images/icons/plus.svg";
import image15 from "../../assets/images/icons/munis.svg";
import image16 from "../../assets/images/icons/steps2.png";
import image17 from "../../assets/images/icons/galaxy_image.png";
import image18 from "../../assets/images/logo.png";
import crowImage from "../../assets/Crow.jpg";

import { useWeb3Context } from "../../hooks";

import { claimFaucet } from "../../slices/StakeThunk";

import "./temp.scss";
import PageLoaderCircle from "src/components/PageLoaderCircle";

function Faucet() {
  const dispatch = useDispatch();
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const onClaimFaucet = async () => {
    await dispatch(claimFaucet({ address, provider, networkID: chainID }));
  };

  const makeShortWalletAddress = (addr) => {
    if (addr && addr !== "" && addr.includes("0x")) {
      return (
        addr.substring(0, 6) +
        "..." +
        addr.substring(addr.length - 4, addr.length)
      );
    } else return "";
  };

  const { connect, address, provider, chainID, connected, hasCachedProvider } =
    useWeb3Context();
  return (
    <div>
      <PageLoaderCircle delay={5000} />

      <div id="sc-banner" className="sc_banner_v3 banner-bg position-relative">
        <div className="container">
          <div className="banner-content v3_banner_content">
            <div className="row">
              <div className={isDesktop ? "col-md-6" : "col-md-12"}>
                <div className="sc_banner_v3_left">
                  <div className="container">
                    <div className="footer-cta-area text-center active-shape hover-shape-inner">
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          flexDirection: "column",
                          alignItems: "center",
                        }}
                      >
                        <h2 className="title mb-15">
                          CCWTF
                          <br />
                          Free Faucet
                        </h2>
                        <p
                          className="dsc mb-40 "
                          style={{ paddingLeft: "10px", paddingRight: "10px" }}
                        >
                          Drops are limited to 10 tokens per 24 hours. You must{" "}
                          <a href="https://support.avax.network/en/articles/4626956-how-do-i-set-up-metamask-on-avalanche">
                            switch
                          </a>{" "}
                          to the Avalanche network in your wallet and import our
                          token from this address:{" "}
                          <a href="https://snowtrace.io/address/0xe52c7545F670c2d7723A5A306c0111829201ED10">
                            {isDesktop
                              ? "0xe52c7545f670c2d7723a5a306c0111829201ed10"
                              : makeShortWalletAddress(
                                  "0xe52c7545f670c2d7723a5a306c0111829201ed10"
                                )}
                          </a>
                          .
                        </p>
                      </div>
                      {/* <h4>Sorry, faucet not working on mobile ¯\_(ツ)_/¯</h4> */}
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          flexDirection: "column",
                          alignItems: "center",
                        }}
                      >
                        <p className="dsc mb-40">
                          Your wallet address:{" "}
                          {isDesktop
                            ? address
                            : makeShortWalletAddress(address)}
                        </p>
                      </div>
                      <a
                        className="theme-btn d-inline-block wow fadeInUp"
                        data-wow-delay="300ms"
                        data-wow-duration="2500ms"
                        href="#"
                        onClick={onClaimFaucet}
                      >
                        <span>REQUEST 10 CCWTF</span>
                        <div className="hover-shape1"></div>
                        <div className="hover-shape2"></div>
                        <div className="hover-shape3"></div>
                      </a>
                      <span className="border-shadow shadow-1"></span>
                      <span className="border-shadow shadow-2"></span>
                      <span className="border-shadow shadow-3"></span>
                      <span className="border-shadow shadow-4"></span>
                      <span className="hover-shape-bg hover_shape1"></span>
                      <span className="hover-shape-bg hover_shape2"></span>
                      <span className="hover-shape-bg hover_shape3"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="how_to_participate_sect">
                <div className="moon_img_bg">
                    <img src={image13} alt="img" className="img-fluid" />
                </div>
            </div> */}
      <div className="gamfi-footer-section">
        <div className="container">
          <div className="footer-cta-area text-center active-shape hover-shape-inner">
            <h2 className="title mb-15">
              Join the Cryptocarnival
              <br />
              contest
            </h2>
            <p className="dsc mb-40">
              Win prizes, give back to the community, have fun.
            </p>
            <a
              className="theme-btn d-inline-block wow fadeInUp"
              data-wow-delay="300ms"
              data-wow-duration="2500ms"
              href="/contest"
            >
              <span>Enter contest</span>
              <div className="hover-shape1"></div>
              <div className="hover-shape2"></div>
              <div className="hover-shape3"></div>
            </a>
            <span className="border-shadow shadow-1"></span>
            <span className="border-shadow shadow-2"></span>
            <span className="border-shadow shadow-3"></span>
            <span className="border-shadow shadow-4"></span>
            <span className="hover-shape-bg hover_shape1"></span>
            <span className="hover-shape-bg hover_shape2"></span>
            <span className="hover-shape-bg hover_shape3"></span>
          </div>
        </div>
        <div className="footer-area">
          <div className="container">
            <div className="sec-heading text-center">
              <div className="sub-inner mb-52">
                <img
                  className="heading-right-image"
                  src={image16}
                  alt="Steps-Image"
                />
                <span id="shareSocial" className="sub-title white-color">
                  Share on Social
                </span>
                <img
                  className="heading-left-image"
                  src={image2}
                  alt="Steps-Image"
                />
              </div>
            </div>
            <div className="footer-listing text-center mb-100 md-mb-70">
              <ul className="footer-icon-list">
                <li>
                  <a href="https://twitter.com/intent/tweet?text=Read%20crypto%20essays%20and%20play%20games%20on%20cryptocarnival.wtf">
                    <i className="icon-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="https://t.me/cryptocarnivalz">
                    <i className="icon-telegram"></i>
                  </a>
                </li>
                <li>
                  <a href="https://mail.google.com/mail/u/0/?view=cm&to&su=Read%20crypto%20essays%20and%20play%20games%20on%20cryptocarnival.wtf&body=https%3A%2F%2Fcryptocarnival.wtf%0A&bcc&cc&fs=1&tf=1">
                    <i className="icon-medium"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/sharing/share-offsite/?url=cryptocarnival.wtf">
                    <i className="icon-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icon-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/sharer/sharer.php?u=cryptocarnival.wtf&quote=Read%20crypto%20essays%20and%20play%20games%20on%20cryptocarnival.wtf">
                    <i className="icon-facebook"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-logo text-center mb-45">
              <a href="/index">
                <img src={image18} alt="Footer-logo" />
              </a>
            </div>
            <div className="footer-mainmenu text-center mb-20">
              <ul>
                <li>
                  <a href="/index#Whatiscryptocarnival">How it works</a>
                </li>
                <li>
                  <a href="/comingsoon">Read essays</a>
                </li>
                <li>
                  <a href="/contest">Play games</a>
                </li>
                <li>
                  <a href="/faucet">Token info</a>
                </li>
                <li>
                  <a href="/about">About</a>
                </li>
                <li>
                  <a href="/about">Contact</a>
                </li>
              </ul>
            </div>
            <div className="copyright-area text-center mb-0">
              <p className="dsc mb-37">
                Copyright © 2022. All Rights Reserved by
                <a target="_blank" className="gafi" href="#">
                  {" "}
                  the Authors
                </a>
              </p>
            </div>
            {/* <div className="scrollup text-center">
                            <a href="#">
                                <i className="icon-arrow_up"></i>
                            </a>
                        </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faucet;
