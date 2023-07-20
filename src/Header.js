import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import data from "./user2"

import logo from "./logo.svg"

function Header() {
    const handleLogout = () => {
        const users = data.users.map((user) => {
            if (user.loggedin) {
                return {
                    ...user,
                    loggedin: false
                };
            }
            return user;
        });

        localStorage.setItem("users", JSON.stringify(users));
        window.location.reload(); // Refresh the page after logout
    };

    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-light bg-light">
                <img src={logo} width="200" height="54" className="d-inline-block align-top" alt="" />
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home Page</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="Search">Search a movie</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="RegisterPage1">Register</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="LoginPage">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="ProfilePage">Profile</Link>
                        </li>
                    </ul>
                    <div className="row justify-content-md-center justify-content-start mt-3 mb-2 ml-1 mr-2">
                        <div className="col-0.5  mr-3">
                            <FontAwesomeIcon icon={faRightToBracket} size="xl" onClick={handleLogout} />
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header;