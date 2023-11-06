import { useRef } from "react";
import "../Header/Header.css";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      
    </header>
  );
}

export default Navbar;
