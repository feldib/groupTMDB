import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightToBracket, faHeart } from '@fortawesome/free-solid-svg-icons'
import logo from "./logo.svg"

function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-light bg-light">
                <a className="navbar-brand" href="/home">
                    <img src={logo} width="200" height="54" className="d-inline-block align-top" alt="" />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home Page <span className="sr-only">(current)</span></a>
                        </li>

                        <li classname="nav-item">
                            <a className="nav-link" href="#">Search a movie</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Register/Login</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Profile</a>
                        </li>
                    </ul>
                    <div className="row justify-content-md-center justify-content-start mt-3 mb-2 ml-1 mr-2">
                        <div className="col-0.5  mr-3">
                            <FontAwesomeIcon icon={faRightToBracket} size="xl" />
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header;