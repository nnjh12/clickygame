import React from "react";
import "./style.css";

function ImageCard(props) {
  return (
    <div className="thumbnail image-cropper" onClick={() => props.onclick(props.id)}>
        <img className="image" alt={props.name} src={props.src} />
    </div>
  );
}


export default ImageCard;
