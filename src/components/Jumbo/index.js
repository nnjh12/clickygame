import React from "react";
import "./style.css";

function Jumbo(props) {
    return (
        <div className="jumbotron jumbotron-fluid text-center">
            {/* <h1 className="display-4 mb-3">{props.head}</h1> */}
            <p className="lead message mb-0">{props.message}</p>
            {/* <p className="lead score"><span className="mx-2">Score : {props.score}</span><span className="mx-2">Top Score : {props.topScore}</span></p> */}
        </div>
    );
}

export default Jumbo;
