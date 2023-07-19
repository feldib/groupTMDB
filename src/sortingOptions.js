const sortingData = {
    "Rating (lowest to highest)": function(movies){
        return movies.sort((a,b)=> a.vote_average - b.vote_average)
    },
    "Rating (higher to lowest)": function(movies){
        return movies.sort((a,b)=> b.vote_average - a.vote_average)
    },
    "Release date (newest to oldest)": function(movies){
        return movies.sort((a,b)=> Date.parse(b.release_date) - Date.parse(a.release_date))
    },
    "Release date (oldest to newest)": function(movies){
        return movies.sort((a,b)=> Date.parse(a.release_date) - Date.parse(b.release_date))
    },
    "Movie name (A to Z)": function(movies){
        return movies.sort((a,b)=> {
            return (
                a.original_title.toLowerCase() < b.original_title.toLowerCase() ? -1 :
                a.original_title.toLowerCase() > b.original_title.toLowerCase() ? 1 :
                0
            )
        })
    },
    "Movie name (Z to A)" : function(movies){
        return movies.sort((a,b)=> {
            return (
                a.original_title.toLowerCase() > b.original_title.toLowerCase() ? -1 :
                a.original_title.toLowerCase() < b.original_title.toLowerCase() ? 1 :
                0
            )
        })
    }
}

function getCurrentDate(movie, viewedMovies){
    const result = viewedMovies.find(
            viewedMovie => viewedMovie.url === `/${movie.id}`
        ).currentDate
    return result
}

const extraSortingData = {
    "Date of viewing (newest to oldest)": function(movies, viewedMovies){
        return movies.sort(
                (a,b)=> Date.parse(getCurrentDate(b, viewedMovies)) - Date.parse(getCurrentDate(a, viewedMovies))
            )
    },
    "Date of viewing (oldest to newest)": function(movies, viewedMovies){
        return movies.sort(
                (a,b)=> Date.parse(getCurrentDate(a, viewedMovies)) - Date.parse(getCurrentDate(b, viewedMovies))
            )
    }
}

const sortingOptions = Array.from(Object.keys(sortingData))

export {sortingOptions as default, sortingData, extraSortingData}
