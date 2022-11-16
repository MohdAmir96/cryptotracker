import { useState } from "react";
import Drawer from "@mui/material/Drawer";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import "./styles.css";
import { Link } from "react-router-dom";
export default function MobileDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <div className="drawerDiv">
      <MenuRoundedIcon
        className="link"
        style={{ fontSize: "1.5rem", margin: 0 }}
        onClick={() => setOpen(true)}
      />
      <Drawer anchor={"right"} open={open} onClose={() => setOpen(false)}>
        <div className="drawer">
          <Link to="/">
            <p className="link">Home</p>
          </Link>

          <Link to="/compare">
            <p className="link">Compare</p>
          </Link>

          <Link to="dashboard">
            <p className="link">Dashboard</p>
          </Link>
        </div>
      </Drawer>
    </div>
  );
}
