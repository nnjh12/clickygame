import React from "react";

function Nav(props) {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="/"><h3>{props.message}</h3></a>
        </nav>
    );
}

export default Nav;
