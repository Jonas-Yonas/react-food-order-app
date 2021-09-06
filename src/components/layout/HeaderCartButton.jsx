import React from "react";
import CartIcon from '../cart/CartIcon'
import styles from "./headerCartButton.module.css";

const HeaderCartButton = (props) => {
  return (
    <button className={styles.button} onClick={props.onClick}>
      <span className={styles.icon}>
          <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>9</span>
    </button>
  );
};

export default HeaderCartButton;
