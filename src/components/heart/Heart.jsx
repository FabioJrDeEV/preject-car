import { useState } from "react";
import "../../pages/home/Home.css";

function Hearts() {
  const [heart, setHeart] = useState(false);

  function toogleHeart() {
    setHeart(!heart);
  }

  return (
    <i
      className={`bi ${heart ? "bi-heart-fill bg-red" : "bi-heart bg-cinza"}`}
      style={{ width: "24px" }}
      onClick={toogleHeart}
    ></i>
  );
}

export default Hearts;
