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

import "./temp.scss";
import PageLoaderCircle from "src/components/PageLoaderCircle";

function nabben() {
  return (
    <div>
      <PageLoaderCircle delay={5000} />
      <div id="mainContent" className="position-relative">
        <div className="container">Text goes here.</div>
      </div>

      <div className="gamfi-footer-section">
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
                  <a href="/essays">Read essays</a>
                </li>
                <li>
                  <a href="/dice">Play games</a>
                </li>
                <li>
                  <a href="/faucet">Receive tokens</a>
                </li>
                <li>
                  <a href="/NFT">Receive NFT</a>
                </li>
                <li>
                  <a href="/about">About</a>
                </li>
                <li>
                  <a href="/about#contact">Contact</a>
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default nabben;
