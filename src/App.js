import "./App.css";
import { Routes, Route } from "react-router-dom";
import Main from "./Parts/Main";
import Part from "./Parts/part";
import Movies from "./Parts/Films";
import Browse from "./Parts/Browse";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Part" element={<Part />} />
        <Route path="/Movies" element={<Movies />} />
        <Route path="/Browse" element={<Browse />} />
      </Routes>
    </>
  );
};

export default App;
