import React from "react";
import MovieBox from "./MovieBox1";
import { Link } from 'react-router-dom'


function MovieGalery1(props) {

    return (
        <div className='d-flex p-3 text-center' style={{ overflowX: "auto" }}>
            <div className='d-flex flex-row' >
                {props.movies.map((movie) =>
                        <MovieBox key={movie.id} theMovie={movie}/>
                    )}
            </div>
        </div>
    )
}

export default MovieGalery1;