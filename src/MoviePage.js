import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeadphones } from '@fortawesome/free-solid-svg-icons'
import { useParams } from "react-router-dom";
import { fetching2 } from "./Fetching2";
import GalleryImage from "./GalleryImage";
import ReviewBox from "./ReviewBox";

function MoviePage() {

    const [movie, setMovie] = useState('');
    const [images, setImages] = useState([]);
    const [reviews, setReviews] = useState([]);

    const param = useParams()
    const movieID = param.id
    const movieURL = `https://api.themoviedb.org/3/movie/${movieID}?api_key=8d97210e6edd66eb9e967278325836d0`;

    useEffect(() => {
        fetching2(movieURL, setMovie)
    }, []);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${movieID}/images?api_key=8d97210e6edd66eb9e967278325836d0`)
            .then(response => response.json())
            .then(response => setImages(response.backdrops))
            .catch(err => console.error(err));
    }, []);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${movieID}/reviews?api_key=8d97210e6edd66eb9e967278325836d0`)
            .then(response => response.json())
            .then(response => setReviews(response.results))
            .catch(err => console.error(err));
    }, []);

    const imageURL = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    const imageURL2 = `https://image.tmdb.org/t/p/w500`

    return (
        <div className="container mt-3">
            <div class="card mb-3 ml-5 mr-5 border-0">
                <div class="row no-gutters">
                    <div class="col-md-4">
                        <img src={imageURL} class="card-img" alt="..." />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <div className="row">
                                <div className="col-11">
                                    <h1 class="card-title">{movie.title}</h1>
                                </div>
                                <div className="col-1">
                                    <FontAwesomeIcon icon={faHeadphones} size="2xl" />                                </div>
                            </div>
                            <h3 class="card-title">Overview</h3>
                            <p class="card-text">{movie.overview}</p>
                            <h6 class="card-text">Release date: {movie.release_date}</h6>
                            <h6 class="card-text">Rating: {movie.vote_average}</h6>
                        </div>
                    </div>
                </div>

                <div className="mt-3"><h3>PHOTO GALLERY</h3></div>
                <div className="mb-5">
                    <div className='d-flex p-3 text-center' style={{ overflowX: "auto" }}>
                        <div className='d-flex flex-row' >
                            {images.map((image) => <GalleryImage poster={imageURL2 + image.file_path} />)}
                        </div>
                    </div>
                </div>

                <div className="mt-3"><h3>Reviews</h3></div>

                <div>
                    {reviews.map((review) => 
                            <ReviewBox
                                author={review.author}
                                reviewText={review.content}
                                rating={review.author_details.rating}
                            />
                    )}
                </div>
            </div>
        </div>
    )
}

export default MoviePage;