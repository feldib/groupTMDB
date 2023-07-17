import React from 'react'

function GalleryImage(props) {
    return (
        <div className="card align-middle" style={{ width: "18rem" }}>
            <img className="card-img-top" src={props.poster} alt="Card image cap" />
        </div>
    )
}

export default GalleryImage;