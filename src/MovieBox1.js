import React from "react";
import poster from "./poster.jpg"

const imageURL = "https://image.tmdb.org/t/p/w500/"

// function MovieBox({ original_title, poster_path, vote_average, release_date, overview}) {
    function MovieBox() {
    // const [show, setShow] = useState(false);

    // const handleClose = () => setShow(!show);

    return (
        <div className="card" style={{ width: "16rem" }}>
            <img className="card-img-top" src={poster} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-text">Some randome title</h5>
            </div>
        </div>
    )
}

export default MovieBox;