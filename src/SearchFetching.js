import options from './options'

async function SearchFetching(stateFunction, query) {
    if(query){
        try {
            let response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${query}`, options)
            let decode = await response.json()
            stateFunction(decode.results)
        } catch (err) {
            console.log('error is ' + err)
        }
    }
}

export default SearchFetching