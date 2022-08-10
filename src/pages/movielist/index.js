import React, { useState, useEffect } from "react";
import Card from './components/card'

import { ThemeContext, themes } from "../../themecontext";

const MovieList = () => {
    const [FilmsShows, updateFilmsShows] = useState([])

    useEffect(() => {
        getFilmsAndTvShows()
    }, [])

    const getFilmsAndTvShows = async () => {
        await fetch("https://digital-video-store-back.herokuapp.com/movieAndTvShow/movies").then(response => response.json()).then((finalResponse) => {
            updateFilmsShows(finalResponse)
        })
    }

    return (<ThemeContext.Consumer>
        {(themeDetails) => (
            <div className={themeDetails.theme === themes.light ? "buster-light" : ""}>
                <div className="hero common-hero">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="hero-ct">
                                    <h1>Movie List</h1>
                                    <ul className="breadcumb">
                                        <li className="active"><a href="/">Home</a></li>
                                        <li> <span className="ion-ios-arrow-right"></span>Movies</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="page-single">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-sm-12 col-xs-12">
                                <div className="flex-wrap-movielist mv-grid-fw">
                                    {FilmsShows.map((Details) => <Card key={Details._id} details={Details} type="Movie" />)}
                                </div>
                                <div className="flex-wrap-movielist mv-grid-fw">
                                    {FilmsShows.map((Details) => <Card key={Details._id} details={Details} type="Movie" />)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>)}
    </ThemeContext.Consumer>)
}

export default MovieList