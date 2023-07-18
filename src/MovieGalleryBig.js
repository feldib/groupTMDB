import React from 'react'
import MovieBox from "./MovieBox1"
import {sortingData} from "./sortingOptions"

function MovieGalleryBig(props) {
    const [orderedMovies, setOrderedMovies] = React.useState(props.movies)

    React.useEffect(()=>{
        if(props.sorting !== ""){
            const sortingFunction = sortingData[props.sorting]
            setOrderedMovies(sortingFunction(props.movies))
        }else{
            setOrderedMovies(props.movies)
        }
    }, [props.sorting, props.movies])

    return (
        <div className='d-flex p-3 flex-wrap'>
            {orderedMovies.map((movie) => <MovieBox key={movie.id} theMovie={movie} />)}
        </div>
    )
}

export default MovieGalleryBig