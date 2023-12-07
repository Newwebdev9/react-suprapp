import styles from "./Banner.module.css";
import backGroundImage from "../../assets/page1_bg.png";

const Banner = () => {
  return (
    <>
      <div className={styles.top}>
        <p>Already Registered</p>
        <button>SIGN-IN</button>
      </div>
      <div className={styles.bottom}>
        <p>Discover Super App</p>
      </div>
      <img src={backGroundImage} alt="BG" />
    </>
  );
};

export default Banner;
