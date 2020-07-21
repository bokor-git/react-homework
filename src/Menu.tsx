import {NavLink} from "react-router-dom";
import React from "react";

export const Menu = () => {
    return <ul>
        <li><a>Menu</a>

            <ul>
                <li><NavLink exact to={"/preJunior/"}>preJunior</NavLink></li>
                <li><NavLink exact to={"/Junior/"}>Junior</NavLink></li>
                <li><NavLink exact to={"/Junior+/"}>Junior+</NavLink></li>
            </ul>
        </li>
    </ul>
}