import React from "react";
import "./style.css"

function Nav(props) {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="/"><h3>{props.message}</h3></a>
            <p className="lead score mb-0" id="score"><span className="mx-2">Score : {props.score}</span><span className="mx-2">Top Score : {props.topScore}</span></p>
        </nav>
    );
}

export default Nav;
