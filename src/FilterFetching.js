import options from './options'

async function FilterFetching(stateFunction, genre) {
    if(genre){
        try {
            await fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=${genre}`, options)
            .then(response => response.json())
            .then(response => stateFunction(response))
            .catch(err => console.error(err));
        } catch (err) {
            console.log('error is ' + err)
        }
    }
}

export default FilterFetching