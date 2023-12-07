import styles from "./Types.module.css";
import action from "../../assets/action.png";
import drama from "../../assets/drama.png";
import fantasy from "../../assets/fantasy.png";
import fiction from "../../assets/fiction.png";
import horror from "../../assets/horror.png";
import music from "../../assets/music.png";
import romance from "../../assets/romance.png";
import thriller from "../../assets/thriller.png";
import western from "../../assets/western.png";
import Cards from "../Unique/Cards";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Types = [
  {
    id: "Action",
    color: "#FF5209",
    image: (
      <img style={{ width: "160px", height: "120px" }} src={action} alt="" />
    ),
  },
  {
    id: "Drama",
    color: "#D7A4FF",
    image: (
      <img style={{ width: "160px", height: "120px" }} src={drama} alt="" />
    ),
  },
  {
    id: "Fantasy",
    color: " #FF4ADE",
    image: (
      <img style={{ width: "160px", height: "120px" }} src={fantasy} alt="" />
    ),
  },
  {
    id: "Fiction",
    color: "#6CD061",
    image: (
      <img style={{ width: "160px", height: "120px" }} src={fiction} alt="" />
    ),
  },
  {
    id: "Horror",
    color: "#7358FF",
    image: (
      <img style={{ width: "160px", height: "120px" }} src={horror} alt="" />
    ),
  },
  {
    id: "Music",
    color: "#E61E32",
    image: (
      <img style={{ width: "160px", height: "120px" }} src={music} alt="" />
    ),
  },
  {
    id: "Romance",
    color: "#11B800",
    image: (
      <img style={{ width: "160px", height: "120px" }} src={romance} alt="" />
    ),
  },
  {
    id: "Thriller",
    color: "#84C2FF",
    image: (
      <img style={{ width: "160px", height: "120px" }} src={thriller} alt="" />
    ),
  },
  {
    id: "Western",
    color: "#912500",
    image: (
      <img style={{ width: "160px", height: "120px" }} src={western} alt="" />
    ),
  },
];

const Type = () => {
  const [categories, setCategories] = useState([]);
  const [charError, setCharError] = useState(false);

  const Redirect = useNavigate();
  const handleRegistration = () => {
    if (categories.length < 3) {
      setCharError(true);
      return;
    } else {
      setCharError(false);
      window.localStorage.setItem("Types", JSON.stringify([...categories]));
      Redirect("/browse");
    }
  };
  return (
    <div className={styles.body}>
      <div className={styles.left}>
        <p className={styles.heading}>Super App</p>
        <p className={styles.subHeading}>Choose your Genre</p>
        <div style={{ marginTop: "10vh" }}>
          <Cards
            categories={categories}
            color={"green"}
            setCategories={setCategories}
          />
          {charError ? (
            <p className={styles.error}>Please choose at least 3</p>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className={styles.right}>
        {Types.map((data, idx) => (
          <Block
            data={data}
            idx={idx}
            categories={categories}
            setCategories={setCategories}
          />
        ))}
      </div>
      <button className={styles.signUp} onClick={handleRegistration}>
        Next Page
      </button>
    </div>
  );
};
const Block = ({ data, idx, setCategories, categories }) => {
  const [selected, setSelected] = useState();

  const handleClick = (e) => {
    if (categories.includes(data.id)) {
      const index = categories.indexOf(data.id);
      categories.splice(index, 1);
      setCategories([...categories]);
    } else {
      setCategories([...categories, data.id]);
    }
    setSelected(!selected);
  };

  useEffect(() => {
    setSelected(categories.includes(data.id) === true);
  });

  return (
    <div
      data={data}
      onClick={(e) => handleClick(e)}
      key={idx}
      style={{
        background: data["color"],
        color: "white",
        padding: "16px",
        borderRadius: "12px",
        border: `${selected ? "4px solid green" : "4px solid white"}`,
      }}
    >
      <p style={{ marginBottom: "4px", fontSize: "18px" }}>{data.id}</p>
      {data.image}
    </div>
  );
};
export default Type;
