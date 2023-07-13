import React from 'react'
import MovieBox from "./MovieBox1"

function MovieGalleryBig(props) {
    return (
        <div className='d-flex p-3 flex-wrap'>
            {props.movies.map((movie) => <MovieBox key={movie.id} {...movie} />)}
        </div>
    )
}

export default MovieGalleryBig