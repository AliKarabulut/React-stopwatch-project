import styles from "./Sayac.module.css";

const Sayac = (props) => {
  return (
    <div>
      <span className={styles.min}>
        {("0" + Math.floor((props.ten / 60000) % 60)).slice(-2)} :{" "}
      </span>
      <span className={styles.min}>
        {("0" + Math.floor((props.ten / 1000) % 60)).slice(-2)} :{" "}
      </span>
      <span className={styles.min}>
        {("0" + ((props.ten / 10) % 100)).slice(-2)}
      </span>
    </div>
  );
};

export default Sayac;
