import React from "react";
import "./Navbar.css";

const Navbar = props => (
    <div> 
        <ul className="navbar nav-justified">
            <li className="title">
                <a href="/"><h2>Sailor Moon Mix-Up</h2></a>
            </li>
            <li>
                <i class="fa fa-moon-o" aria-hidden="true"></i>
            </li>
            <li className="scores">
                Score: <span style={{color: blue}}>{props.score}</span> | Highscore: {props.highscore}
            </li>
        </ul>
    </div>
);

export default Navbar;


/* <li className={props.message.indexOf('incorrectly') !== -1 ? 
            "desc-incorrect" : 
            props.message.indexOf('correctly') !== -1 ?
                "desc-correct" :
                "desc-normal"}>
    >
        {props.message}
</li> */