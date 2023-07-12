import React from "react";
import banner from "./banner.avif"
import Header from "./Header";
import Footer from "./Footer";
import MovieGalery1 from "./MovieGalery1";

function Homepage() {
    return (
        <div>
            <Header />
            <img src={banner} class="img-fluid w-100" alt="Responsive image" />
            <h3>Upcoming movies</h3>
            <MovieGalery1 />
            <h3>Top rated movies</h3>
            <MovieGalery1 />
            <Footer />
        </div>
    )
}

export default Homepage;