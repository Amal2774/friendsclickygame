import React from "react";
import "./style.css"

//this component is only rendering the images to the screen and can be a simple render function it is a
//stateless component
const Card = props => (
  <div className="card img-container hover">
    <div>
      <img class="img-thumbnail img-responsive" alt={props.id} src={props.image}
        onClick={() => props.clickPicture(props.id)}
      />
    </div>
  </div>
);

export default Card;