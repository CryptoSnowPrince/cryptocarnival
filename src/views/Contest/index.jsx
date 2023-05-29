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

function Contest() {
  return (
    <div>
      <PageLoaderCircle delay={5000} />

      <div id="sc-banner" className="sc_banner_v3 banner-bg position-relative">
        <div className="container">
          <div className="banner-content v3_banner_content">
            <div className="row">
              <div className="col-md-6">
                <div className="sc_banner_v3_left">
                  <h2
                    className="wow fadeInUp"
                    data-wow-delay="0.4s"
                    data-wow-duration="0.6s"
                  >
                    <span>CRYPTOCARNIVAL CONTEST</span>
                  </h2>
                  <h3
                    className="wow fadeInUp"
                    data-wow-delay="0.5s"
                    data-wow-duration="0.7s"
                  >
                    Build on-chain games, give back to the community, and win
                    prizes.
                  </h3>

                  <p>
                    Until December 30th, 2022, we are running a builder's
                    contest for the best web-based, on-chain carnival games. We
                    want to inspire the Web3 community to design simple
                    (optional: stupid) games that critically reflect on the
                    carnivalesque nature of Web3 in 2022 (see our{" "}
                    <a href="/dice">Dice Game</a> example). Winning entries will
                    be integrated into this website alongside essays from top
                    international scholars.
                  </p>

                  <p>
                    Prize money and development funds were generously donated by
                    the{" "}
                    <a href="https://gitcoin.co/grants/4719/defining-web3-an-off-chain-collective-research-pr">
                      Gitcoin community
                    </a>
                    .
                  </p>

                  <h3>Prizes</h3>
                  <h4>1st prize: 200,000,000 GWEI</h4>
                  <h4>2nd prize: 85,000,000 GWEI</h4>
                  <h4>3rd prize: 50,000,000 GWEI</h4>
                  <h4>Runner up prizes: 10,000,000 GWEI</h4>
                  <p>
                    Plus you will receive everlasting fame and glory! Your game
                    will be digitally emblazoned in the Crypto
                    <span className="flipper flip_V">Carnival!</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="gamfi-team-section gamfi_faq_sect gamfi_our_mentor_section pt-115 pb-85 md-pt-75 md-pb-42">
        <div className="container">
          <div className="sec-heading text-center mb-55">
            <h2 className="title">Contest rules</h2>
          </div>
          <div className="faq_content_sect">
            <div className="faq_questions">
              <h2 id="Whatiscryptocarnival" className="accordion no-border">
                How do I submit my entry?
                <span>
                  <img src={image14} alt="" className="img-fluid icon-plus" />
                  <img src={image15} alt="" className="Img-fluid icon-minus" />
                </span>
              </h2>
              <div className="accordion-panel">
                <p>
                  Submissions should be uploaded as a single ZIP file to this{" "}
                  <a href="https://www.dropbox.com/request/xmAAXTUn74WD2g1i1kO3">
                    Dropbox directory
                  </a>{" "}
                  by December 30th, 2022. In this ZIP file, please include all
                  game assets and any additional links or identifying
                  information you would like published with your game (if you
                  want to be considered for the prize money please include your
                  ETH wallet address). Game assets might include: chain code
                  (Solidity, Rust, etc.), front-end code (HTML, CSS, JS), and
                  any other assets (images, audio, etc.).
                </p>

                <p>Only winning games will be included in CryptoCarnival.</p>
              </div>

              <h2 className="accordion">
                What are the technical details for on-chain games?
                <span>
                  <img src={image14} alt="" className="img-fluid icon-plus" />
                  <img src={image15} alt="" className="Img-fluid icon-minus" />
                </span>
              </h2>
              <div className="accordion-panel">
                <p>Our token name: CCWTF</p>
                <p>
                  Our faucet address (Avalanche network):{" "}
                  <a href="https://snowtrace.io/address/0xe52c7545f670c2d7723a5a306c0111829201ed10">
                    0xe52c7545F670c2d7723A5A306c0111829201ED10
                  </a>
                </p>
                <p>
                  Your game should be web-based and self-contained enough to sit
                  alongside written essays. Your chain code should issue a max
                  mint or burn of 10 CCWTF per play (we will whitelist
                  appropriate addresses). You can also issue NFTs for prizes.
                  Get creative! If in doubt or you need technical support please{" "}
                  <a href="/contact">contact the editors</a>.
                </p>
              </div>

              <h2 className="accordion">
                What kinds of games are suitable?
                <span>
                  <img src={image14} alt="" className="img-fluid icon-plus" />
                  <img src={image15} alt="" className="Img-fluid icon-minus" />
                </span>
              </h2>
              <div className="accordion-panel">
                <p>
                  Any simple, web-based game is appropriate, but we look
                  favorably upon those that engage artistically with
                  carnivalesque aspects of Web3; such as by reflecting on the
                  ludic, the degenerate, the excessive, the foul and rude, and
                  the straightforward criminal. While full-page games might be
                  suitable, we want to encourage builders to consider games
                  built for the margins, footers, and headers of essays.
                  Consider coordinating a theme with a particular essay!
                  Minimally, games should require a token to play and should
                  offer some kind of win condition. The win condition can be
                  on-chain or off-chain: issuing CCWTF tokens, NFTs, or other
                  digital assets. Our simple <a href="/dice">Dice Game</a>{" "}
                  offers a basic example.
                </p>
              </div>

              <h2 className="accordion">
                Who chooses the winners?
                <span>
                  <img src={image14} alt="" className="img-fluid icon-plus" />
                  <img src={image15} alt="" className="Img-fluid icon-minus" />
                </span>
              </h2>
              <div className="accordion-panel">
                <p>
                  The editors, Quinn DuPont, Paul Dylan-Ennis, and Donncha
                  Kavanagh will evaluate the submissions and collectively choose
                  the winners. Winners will be contacted and prize money will be
                  disbursed.
                </p>
              </div>

              <h2 id="tokenInfo" className="accordion">
                Are there examples of suitable games?
                <span>
                  <img src={image14} alt="" className="img-fluid icon-plus" />
                  <img src={image15} alt="" className="Img-fluid icon-minus" />
                </span>
              </h2>
              <div className="accordion-panel">
                <p>
                  Our simple <a href="/dice">Dice Game</a> offers a basic
                  example, but we encourage builders to get creative. While
                  full-page games might be suitable, we want to encourage
                  builders to consider games built for the margins, footers, and
                  headers of essays. Early 2000s online display advertising
                  offers a wealth of examples for interactivity (remember Punch
                  the Monkey!?).
                </p>
              </div>

              <h2 className="accordion">
                Who owns the copyright of games?
                <span>
                  <img src={image14} alt="" className="img-fluid icon-plus" />
                  <img src={image15} alt="" className="Img-fluid icon-minus" />
                </span>
              </h2>
              <div className="accordion-panel">
                <p>
                  All software and game assets are released with individual
                  copyright notices, otherwise, original author retains all
                  copyright. We strongly encourage open source licences. Please
                  include a copyright notice in your contest submission package.
                </p>
              </div>

              <h2 className="accordion">
                I love this! How else can I help?
                <span>
                  <img src={image14} alt="" className="img-fluid icon-plus" />
                  <img src={image15} alt="" className="Img-fluid icon-minus" />
                </span>
              </h2>
              <div className="accordion-panel">
                <p>
                  You can <a href="/about#donate">donate!</a> A little extra
                  crypto would really help.
                </p>
                <p>
                  Or, <a href="/contact">reach out to the editors</a> to donate
                  your time. We can use technical and non-technical help.
                </p>
              </div>
            </div>
            <h6>
              Want to know more ? <a href="/about">Contact the editors !</a>
            </h6>
            <div className="FAQGalaxyImg">
              <img src={image17} alt="img" className="img-fluid" />
            </div>
          </div>
        </div>
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

export default Contest;
