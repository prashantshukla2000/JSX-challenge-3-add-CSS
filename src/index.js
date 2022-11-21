import React from "react";
import ReactDOM from "react-dom";
const img = "https://picsum.photos/200";
ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      My favorite food
    </h1>
    <div>
      <img alt="random" src={img + "?grayscale"}></img>
      <img
        className="food-img"
        alt="paneer"
        src="https://images1.livehindustan.com/uploadimage/library/2021/05/24/16_9/16_9_1/kadai_mushroom_recipe_1621833653.jpg"
      ></img>
      <img
        className="food-img"
        alt="naan"
        src="https://www.danishfoodlovers.com/wp-content/uploads/2022/03/Garlic-naan-bread-5.jpg"
      ></img>
      <img
        className="food-img"
        alt="mithai"
        src="https://static.toiimg.com/thumb/55048826.cms?imgsize=392932&width=800&height=800"
      ></img>{" "}
    </div>
  </div>,
  document.getElementById("root")
);
