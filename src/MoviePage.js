import React from "react";
import poster from "./poster.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeadphones } from '@fortawesome/free-solid-svg-icons'

const imageURL = "https://image.tmdb.org/t/p/w500/"

function MoviePage({ original_title, poster_path, vote_average, release_date, overview }) {
    return (
        <div className="container">
            <div class="card mb-3 ml-5 mr-5 border-0">
                <div class="row no-gutters">
                    <div class="col-md-4">
                        <img src={poster} class="card-img" alt="..." />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <div className="row">
                                <div className="col-11">
                                    <h1 class="card-title">Movie title</h1>
                                </div>
                                <div className="col-1">
                                <FontAwesomeIcon icon={faHeadphones} size="2xl"/>                                </div>
                            </div>
                            <h3 class="card-title">Overview</h3>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <h6 class="card-text">Release date</h6>
                        </div>
                    </div>
                </div>

                <div className="mt-3"><h3>PHOTO GALLERY</h3></div>
                <div>
                    <div className='d-flex p-3 text-center' style={{ overflowX: "auto" }}>
                        <div className='d-flex flex-row' >
                            <div className="card align-middle" style={{ width: "18rem" }}>
                                <img className="card-img-top" src={poster} alt="Card image cap" />
                            </div>
                            <div className="card align-middle" style={{ width: "18rem" }}>
                                <img className="card-img-top" src={poster} alt="Card image cap" />
                            </div>
                            <div className="card align-middle" style={{ width: "18rem" }}>
                                <img className="card-img-top" src={poster} alt="Card image cap" />
                            </div>
                            <div className="card align-middle" style={{ width: "18rem" }}>
                                <img className="card-img-top" src={poster} alt="Card image cap" />
                            </div>
                            <div className="card align-middle" style={{ width: "18rem" }}>
                                <img className="card-img-top" src={poster} alt="Card image cap" />
                            </div>
                            <div className="card align-middle" style={{ width: "18rem" }}>
                                <img className="card-img-top" src={poster} alt="Card image cap" />
                            </div>
                            <div className="card align-middle" style={{ width: "18rem" }}>
                                <img className="card-img-top" src={poster} alt="Card image cap" />
                            </div>
                            <div className="card align-middle" style={{ width: "18rem" }}>
                                <img className="card-img-top" src={poster} alt="Card image cap" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MoviePage;