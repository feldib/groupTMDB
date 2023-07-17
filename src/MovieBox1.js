import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";



function MovieBox1(props) {

    const movie = props.theMovie;
    const imageURL = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`

    return (
       
        <div className="card align-middle" style={{ width: "18rem" }}>
            <Link to={`/${movie.id}`}><img className="card-img-top" src={imageURL} alt="Card image cap" /></Link>
            <div className="card-body">
                <h5 className="card-text">{movie.title}</h5>
            </div>
        </div>
    )
}

export default MovieBox1;