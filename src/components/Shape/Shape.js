import { Fragment } from "react";
import styles from "./Shape.module.css";
const Shape = () => {
  return (
    <Fragment>
      <div className={`${styles.one} ${styles.box}`}></div>
      <div className={`${styles.two} ${styles.box}`}></div>
    </Fragment>
  );
};

export default Shape;
