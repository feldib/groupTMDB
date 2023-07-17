import React from 'react';

function ReviewBox(props) {
    return (
        <div class="card mt-3">
            <h5 class="card-header">Author: {props.author}</h5>
            <div class="card-body">
                <p class="card-text">{props.reviewText}</p>
                <h5> Rating {`${props.rating}/10`}</h5>
            </div>
        </div>
    )
}

export default ReviewBox;