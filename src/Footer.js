import React from "react";
import logo from "./logo.svg"


function Footer() {
    return(
        <footer 
            className="footer fixed-bottom"
            style={{
                width: "100%",
            }}
        >
            <div className="p-3 bg-light text-dark">
                <div className="row align-items-center">
                    <div className="col-md text-md-left text-center">
                        <img src={logo} width="200" height="54" className="d-inline-block align-top" alt="" />
                    </div>
                    <div className="col-md text-md-left text-center mt-3">
                        <h5>The best team ever: Mr. Gal, Mr. Benji, Ms. Katya</h5>
                        <h6>2023 all rights reserved</h6>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;