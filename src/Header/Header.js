import React from "react";

import classes from "./Header.module.css";
import { ReactComponent as Logo } from "../assets/images/calculator-logo.svg";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.heading}>
        <Logo className={classes.logo} />
        <h1>Base Conversion App</h1>
      </div>
      <p className={classes.subheading}>
        <i>
          This application will convert numbers in any base (from 2 to 16) to
          its equivalent in any other base. For example, the number 11111111 in
          binary (base 2) converted to senary (base 6) will result is a value of
          1103.
        </i>
      </p>
    </header>
  );
};

export default Header;
