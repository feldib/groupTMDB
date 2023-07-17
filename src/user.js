export default class User{
    constructor(
        username,
        password,
    ){
        this.username = username,
        this.password = password,
        this.pagesVisited = [],
        this.languageForMovie = "",
        this.languageForHearing = "",
        this.favouriteGenre = "",
        this.galleryToShow = "upcoming"
    }
    set setUsername(username){
        this.username = username
    }
    set setPassword(password){
        this.password = password
    }
    set addVisitedPage({movieID, lastVisited}){
        this.pagesVisited.push({movieID, lastVisited})
    }
    set setLanguageForMovie(language){
        this.languageForMovie = language
    }
    set setLanguageForHearing(language){
        this.languageForHearing = language
    }
    set setFavouriteGenre(language){
        this.favouriteGenre = language
    }
    set setGalleryToShow(gallery){
        this.galleryToShow = gallery
    }
}