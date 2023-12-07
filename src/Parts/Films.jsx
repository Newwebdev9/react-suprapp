import List from "../Components/Films/Data";
import Profile from "../assets/profileSmall.png";
import styles from "../Components/Films/Data.module.css";

const Films = () => {
  const movies = JSON.parse(window.localStorage.getItem("genres"));

  return (
    <>
      <div
        style={{
          width: "100vw",
          minHeight: "100vh",
          background: "black",
          overflowX: "hidden",
          maxHeight: "100vh",
        }}
      >
        <img
          src={Profile}
          style={{
            position: "absolute",
            top: "2vh",
            right: "3vw",
            height: "60px",
            width: "60px",
          }}
          alt=""
        />
        <p
          style={{
            color: "green",
            fontSize: "3rem",
            margin: "1vw",
          }}
          className={styles.header}
        >
          Super app
        </p>
        <p style={{ color: "white", fontSize: "2rem", margin: "2vw" }}>
          Entertainment according to your choice
        </p>
        {movies.map((movie) => (
          <List genre={movie} />
        ))}
      </div>
    </>
  );
};

export default Films;