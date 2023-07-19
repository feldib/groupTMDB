import options from './options'
import genresWithIDs from "./genres"

async function FilterFetching(stateFunction, genre) {
    if(genre){
        const genreID = genresWithIDs.find(
            obj => obj.name === genre
            ).id
        try {
            let response = await fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=${genreID}`, options)
            let decode = await response.json()
            stateFunction(decode.results)
        } catch (err) {
            console.log('error is ' + err)
        }
    }
}

export default FilterFetching