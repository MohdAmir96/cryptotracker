import React from "react";
import Button from "../Button/Button";
import MobileDrawer from "./Drawer";
import "./styles.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="navbar">
      <h1 className="heading">
        <Link to="/">
          CryptoTracker<span style={{ color: "var(--blue)" }}>.</span>
        </Link>
      </h1>
      <div className="links">
        <Link to="/">
          <p className="link">Home</p>
        </Link>
        <Link to="/compare">
          <p className="link">Compare</p>
        </Link>
        <Link href="/dashboard">
          <Button text="dashboard" />
        </Link>
      </div>
      <MobileDrawer />
    </div>
  );
}

export default Header;
