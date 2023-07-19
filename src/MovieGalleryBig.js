import React from 'react'
import MovieBox from "./MovieBox1"
import {sortingData} from "./sortingOptions"

function MovieGalleryBig(props) {
    return (
        <div className='d-flex p-3 flex-wrap'>
            {props.sorting !== "" 
                ?
                    sortingData[props.sorting](props.movies)
                        .map(
                            (movie) => <MovieBox key={movie.id} theMovie={movie} />
                        )
                :
                    props.movies
                        .map(
                            (movie) => <MovieBox key={movie.id} theMovie={movie} />
                        )
    }
        </div>
    )
}

export default MovieGalleryBig