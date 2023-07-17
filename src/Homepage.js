import React, { useState, useEffect } from "react";
import banner from "./banner.avif"
import MovieGalery1 from "./MovieGalery1";
import { fetching } from "./Fetching";
import Loader from "./Loader"

const moviesUrl1 = "https://api.themoviedb.org/3/movie/upcoming?api_key=8d97210e6edd66eb9e967278325836d0"
const moviesUrl2 = "https://api.themoviedb.org/3/movie/top_rated?api_key=8d97210e6edd66eb9e967278325836d0"

function Homepage() {

    const [movies1, setMovies1] = useState([]);
    const [movies2, setMovies2] = useState([]);

    useEffect(() => {
        fetching(moviesUrl1, setMovies1)
        fetching(moviesUrl2, setMovies2)
    }, []);

    return (
        movies1.length === 0 || movies2.length === 0 ? <Loader/> :
        <div>
            <img src={banner} class="img-fluid w-100" alt="Responsive image" />
            <h3>Upcoming movies</h3>
            <MovieGalery1 movies={movies1} />
            <h3>Top rated movies</h3>
            <MovieGalery1 movies={movies2} />
        </div>
    )
}

export default Homepage;