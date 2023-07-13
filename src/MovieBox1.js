import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const imageURL = "https://image.tmdb.org/t/p/w500/"


function MovieBox1({ original_title, poster_path}) {
    return (
        <div className="card align-middle" style={{ width: "18rem" }}>
            <img className="card-img-top" src={imageURL + poster_path} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-text">{original_title}</h5>
            </div>
        </div>
    )
}

export default MovieBox1;