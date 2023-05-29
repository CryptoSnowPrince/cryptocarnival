import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { winFaucet, lostFaucet } from "../../slices/WinThunk";

import { useWeb3Context } from "../../hooks";
import image2 from "../../assets/images/icons/steps.png";
import image16 from "../../assets/images/icons/steps2.png";
import image18 from "../../assets/images/logo.png";

import ajaxLoad from "../../assets/images/ajax-loader.gif";
import dice1 from "../../assets/images/dice1.svg";
import dice2 from "../../assets/images/dice2.svg";
import dice3 from "../../assets/images/dice3.svg";
import dice4 from "../../assets/images/dice4.svg";
import dice5 from "../../assets/images/dice5.svg";
import dice6 from "../../assets/images/dice6.svg";
import "./temp.scss";
import PageLoaderCircle from "src/components/PageLoaderCircle";

function Dice() {
  const { connect, address, provider, chainID, connected, hasCachedProvider } =
    useWeb3Context();
  const [result, setResult] = useState("Roll dice");
  const user1 = useRef(null);
  const resultDice = useRef(null);
  let diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];
  const roll = () => {
    // Generate random number
    if (!address) {
      alert("Please connect your wallet!");
    } else {
      const firstRandomNum = Math.floor(Math.random() * 6);
      if (firstRandomNum == 5) {
        onWinFaucet();
        user1.current.setAttribute("src", ajaxLoad);
        setResult(``);
        setInterval(() => {
          if (sessionStorage.getItem("victoryResult")) {
            user1.current.setAttribute("src", diceImages[firstRandomNum]);
            sessionStorage.setItem("victoryResult", "");
            setTimeout(() => {
              setResult(`You win!`);
            }, 700);
          }
        }, 1000);
      } else {
        onLostFaucet();
        user1.current.setAttribute("src", ajaxLoad);
        setResult(``);
        setInterval(() => {
          if (sessionStorage.getItem("victoryResult")) {
            user1.current.setAttribute("src", diceImages[firstRandomNum]);
            sessionStorage.setItem("victoryResult", "");
            setTimeout(() => {
              setResult(`You lost!`);
            }, 700);
          }
        }, 1000);
      }
    }
  };
  const dispatch = useDispatch();

  const onWinFaucet = async () => {
    await dispatch(winFaucet({ address, provider, networkID: chainID }));
  };
  const onLostFaucet = async () => {
    await dispatch(lostFaucet({ address, provider, networkID: chainID }));
  };

  return (
    <div>
      <PageLoaderCircle delay={5000} />

      <div className="container">
        <div className="footer-cta-area text-center active-shape hover-shape-inner">
          <a
            className="theme-btn d-inline-block wow fadeInUp"
            href="javascript:void(0)"
            onClick={roll}
          >
            <span>Roll the dice</span>
            <div className="hover-shape1"></div>
            <div className="hover-shape2"></div>
            <div className="hover-shape3"></div>
          </a>
          <div className="dice-area">
            <img src={dice1} alt="Dice" ref={user1} />
          </div>
          <h3 className="result" ref={resultDice}>
            {result}
          </h3>
          <h4>Sorry, dice not working on mobile ¯\_(ツ)_/¯</h4>
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
                  <a href="javascript:void(0)">
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
                <a target="_blank" className="gafi" href="javascript:void(0)">
                  {" "}
                  the Authors
                </a>
              </p>
            </div>
            {/* <div className="scrollup text-center">
                            <a href="javascript:void(0)">
                                <i className="icon-arrow_up"></i>
                            </a>
                        </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dice;
