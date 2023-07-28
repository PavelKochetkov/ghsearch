import React from "react";
import { NavLink } from "react-router-dom";

export const Profile = () => {
 
    return (
        <React.Fragment>
            <h1>Profile Page</h1>
            <NavLink to="/" className="btn btn-warning">Перейти на главную</NavLink>
        </React.Fragment>
    )
}