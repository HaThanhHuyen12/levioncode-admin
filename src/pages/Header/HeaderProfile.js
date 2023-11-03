import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiChevronDown, BiMinus, BiMenu, BiChevronRight } from "react-icons/bi";
import logo from "../../images/logo 1.png";
import cart1 from "../../images/Icon Cart.png";
import cow_header from "../../images/cow-header.png";
import heart from "../../images/heart1.png";
import noti from "../../images/notification.png";
import avtProfile from "../../images/avtcourse.png";
import "../Header/Header.css";

function HeaderProfile() {
  const navigate = useNavigate();

  const navRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuOpenProfile, setMenuOpenProfile] = useState(false);

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const toggleMenu = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };

  const toggleMenuProfile = () => {
    setMenuOpenProfile((prevMenuOpenProfile) => !prevMenuOpenProfile);
  };

  const data = JSON.parse(localStorage.getItem("data"));

  const renderHeaderRight = () => {
    if (data) {
      return (
        <div className="header_right">
          <div className="header_right_Icon">
            <Link to="/shoppingCart">
              <img className="addToCart" src={cart1} alt="cart" />
            </Link>
            <Link to="#" id="noti">
              <img className="" src={noti} alt="noti" />
            </Link>
            <Link to="#" id="Heart">
              <img className="" src={heart} alt="heart" />
            </Link>
          </div>
          <div className="Profile">
            <ul>
              <li className="menuImg">
                {menuOpenProfile ? (
                  <img
                    className=""
                    src={avtProfile}
                    alt="avtProfile"
                    onClick={toggleMenuProfile}
                  />
                ) : (
                  <img
                    className=""
                    src={avtProfile}
                    alt="avtProfile"
                    onClick={toggleMenuProfile}
                  />
                )}

                <ul
                  className={
                    menuOpenProfile ? "menuProfile showProfile" : "menuProfile"
                  }
                >
                  <button>
                    <li>Log out</li>
                  </button>
                  <Link to="/management" className="btnProfile">
                    <button>
                      <li>Management</li>
                    </button>
                  </Link>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      );
    } else {
      return (
        <div className="header_right1">
          <Link to="/shoppingCart" className="shoppingCart">
            <img className="addToCart" src={cart1} alt="cart" />
          </Link>
          <Link to="/" id="SignIn">
            <button id="btn_left">Sign in</button>
          </Link>
          <Link to="/register" id="SignUp">
            <button id="btn_right">Sign up</button>
          </Link>
        </div>
      );
    }
  };

  return (
    <header>
      <Link to="/homePage" className="imgheader">
        <img src={logo} alt="logo" className="logo" />
      </Link>
      <div className="cow_header">
        <Link to="/homePage">
          <img src={cow_header} alt="cow_header" />
        </Link>
      </div>
      <div className="navContents">
        <nav ref={navRef}>
          <div className="cow_header_nav">
            <Link to="/homePage">
              <img src={cow_header} alt="cow_header" />
            </Link>
          </div>
          <div className="responsive-header">
            <div className="text-header">
              <Link to="/test">Level Test</Link>
              <Link to="/courseList">Courses</Link>
              <div className="Learning">
                <ul>
                  <li className="menuIcon">
                    <Link to="/learningResources" className="titleLearning">
                      Learning Resources
                    </Link>
                    <div className="LearningIcon">
                      {menuOpen ? (
                        <BiChevronDown onClick={toggleMenu} />
                      ) : (
                        <BiChevronRight onClick={toggleMenu} />
                      )}
                    </div>
                    <ul
                      className={
                        menuOpen ? "menuLearning show" : "menuLearning"
                      }
                    >
                      <li>
                        <Link to="/podcast">Podcast</Link>
                      </li>
                      <li>
                        <Link to="#">Digital Flashcards</Link>
                      </li>
                      <li>
                        <Link to="/blog">Blog</Link>
                      </li>
                      <li>
                        <Link to="/socialNetwork">Social Network</Link>
                      </li>
                      <li>
                        <Link to="#">Our Community</Link>
                      </li>
                      <li>
                        <Link to="#">eBooks</Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <Link to="/aboutUs">About us</Link>
              <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                <BiMinus />
              </button>
            </div>
            <div className="btnHeader">{renderHeaderRight()}</div>
          </div>
        </nav>
      </div>
      <div className="btnCart">
        <Link to="/shoppingCart">
          <img className="addToCart1" src={cart1} alt="cart" />
        </Link>
      </div>
      <button className="nav-btn" onClick={showNavbar}>
        <BiMenu />
      </button>
    </header>
  );
}

export default HeaderProfile;
