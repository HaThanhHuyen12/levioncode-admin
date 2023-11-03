import background from "../../images/footer.png";
import logo from "../../images/cow-footer.png";
import facebook from "../../images/facebook.png";
import youtube from "../../images/youtube.png";
import tiktok from "../../images/tiktok.png";
import instagram from "../../images/ig.png";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div id={styles.footerMain}>
        <div id={styles.footer_bg}>
          <img src={background} alt="footer"></img>
        </div>
        <div id={styles.logo}>
          <Link to = "/homePage">
          <img src={logo} alt="footer"></img>
          </Link>
        </div>
        <div className={styles.category}>
          <a href="#">Home</a>
          <a href="#">Level Test</a>
          <a href="/coursesList">Courses</a>
          <a href="#">Learning Resources</a>
          <a href="/aboutUs">About us</a>
        </div>
        <div className={styles.social_media}>
          <img className={styles.facebook} src={facebook} alt="footer"></img>
          <img src={instagram} alt="footer"></img>
          <img src={youtube} alt="footer"></img>
          <img src={tiktok} alt="footer"></img>
        </div>
        <div className={styles.tittle}>
          <p>©2022 Levion. All copyrights reserved</p>
        </div>
      </div>
    </>
  );
}
