import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo1 from "../../images/logo 1.png";
import styles from "./login.module.css";
import facebook from "../../images/fb.png";
import google from "../../images/google.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [validMsg, setValidMsg] = useState({});

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      setValidMsg((prevValidMsg) => ({
        ...prevValidMsg,
        email: "Please enter a valid email.",
      }));
    } else {
      setValidMsg((prevValidMsg) => ({ ...prevValidMsg, email: "" }));
    }
  };

  const validatePassword = (password) => {
    if (!password || password.length < 8) {
      setValidMsg((prevValidMsg) => ({
        ...prevValidMsg,
        password: "Please enter a valid password (minimum 8 characters).",
      }));
    } else {
      setValidMsg((prevValidMsg) => ({ ...prevValidMsg, password: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsLoading(true); // Start loading

    setTimeout(() => {
      setIsLoading(false);

      if (email === "admin@gmail.com" && password === "admin123") {
        // Successful login, navigate to the homepage
        navigate("/homePage");
      } else {
        // Display an error message
        toast.error("Invalid email or password.");
      }
    }, 2000); // Simulate a 2-second delay for loading

    if (!email || !password) {
      setValidMsg({
        email: "Please enter your email.",
        password: "Please enter your password.",
      });
      return;
    }

    validateEmail(email);
    validatePassword(password);

    if (validMsg.email || validMsg.password) {
      setIsLoading(false); // Stop loading if there are validation errors
      return;
    }
  };

  return (
    <>
      <div id={styles.wrapper}>
        <div className={styles.layout_background}>
          <div className={styles.background}></div>
        </div>

        <div id={styles.login}>
          <div className={styles.logo1}>
            <a href="/homePage">
              <img src={logo1} alt="a" />
            </a>
          </div>

          <div className={styles.heading}>
            <h1>Sign in to your account</h1>
          </div>

          <div className={styles.email}>
            <label htmlFor="email">Email</label>
            <br />
            <input
              className={styles.login_input}
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={() => validateEmail(email)}
            />
            <span className={styles.validMsg}>{validMsg.email}</span>
            <br />
          </div>
          <div className={styles.psw}>
            <label htmlFor="password">Password</label>
            <br />
            <input
              className={styles.login_input}
              type="password"
              placeholder="Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onBlur={() => validatePassword(password)}
            />
            <span className={styles.validMsg}>{validMsg.password}</span>
            <br />
          </div>

          <div className={styles.btn_wrapper}>
            <button
              className={styles.submit}
              onClick={handleSubmit}
              disabled={isLoading}
            >
              {isLoading ? (
                <span>
                  <span className={styles.loadingText}>Sign In</span>
                  <div className={styles.loadingIcon}></div>{" "}
                </span>
              ) : (
                "Sign In"
              )}
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default Login;
