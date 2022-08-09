import React from "react";

const Card = (props) => {
    return (<div className="movie-item-style-2 movie-item-style-1">
        <img src={props.details.smallPoster} alt={props.details.name} className="Movie" />
        <div className="hvr-inner">
            <a href={`/details/${props.details._id}`}> Read more <i className="ion-android-arrow-dropright"></i> </a>
        </div>
        <div className="mv-item-infor">
            <h6><a href="/details">{props.details.name}</a></h6>
            <p className="rate"><i className="ion-android-star"></i><span>7</span> /10</p>
        </div>
    </div>)
}

export default Card