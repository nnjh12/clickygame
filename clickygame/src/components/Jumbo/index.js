import React from "react";

function Jumbo(props) {
    return (
        <div className="jumbotron jumbotron-fluid text-center">
            <h1 className="display-4">{props.head}</h1>
            <p className="lead message">{props.message}</p>
            <p className="lead score"><span className="mx-2">Score : {props.score}</span><span className="mx-2">Top Score : {props.topScore}</span></p>
        </div>
    );
}

export default Jumbo;
