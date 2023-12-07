import About from "../Components/Search/About";
import Weather from "../Components/Search/Weather";
import Todo from "../Components/Search/Todo";
import News from "../Components/Search/News";
import Timer from "../Components/Search/Timer";
import { useNavigate } from "react-router-dom";

const Browse = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/Films");
  };
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        background: "black",
        paddingLeft: "3vw",
        paddingTop: "3vh",
        boxSizing: "border-box",
      }}
    >
      <div style={{ display: "flex", gap: "20px" }}>
        <div>
          <About />
          <Weather />
          <Timer />
        </div>
        <div>
          <Todo />
        </div>
        <div>
          <News />
        </div>
      </div>
      <button
        style={{
          position: "absolute",
          bottom: "2vh",
          right: "3vw",
          background: "green",
          border: "none",
          color: "white",
          padding: "6px",
          borderRadius: "12px",
        }}
        onClick={handleClick}
      >
        Next Page
      </button>
    </div>
  );
};

export default Browse;
