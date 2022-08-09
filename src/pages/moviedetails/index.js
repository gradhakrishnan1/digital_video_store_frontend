import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { ThemeContext, themes } from "../../themecontext";

const MovieDetails = () => {
    const [Details, updateDetails] = useState(null);
    const { title } = useParams();

    useEffect(() => {
        getMovieDetails(title)
    }, [])

    const getMovieDetails = async (title) => {
        await fetch(`http://localhost:4000/movieAndTvShow/title/${title}`).then(response => {
            if (response.status === 404) {
                window.location.href = "/";
            } else {
                return response.json()
            }
        }).then((finalResponse) => {
            if (finalResponse) {
                updateDetails(finalResponse[0])
            }
        })
    }

    console.log(Details, 'Details')
    return (<ThemeContext.Consumer>
        {(themeDetails) => (
            <div className={themeDetails.theme === themes.light ? "buster-light" : ""}>
                {Details !== null ? (<React.Fragment>
                    <div className="hero mv-single-hero">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="page-single movie-single movie_single">
                        <div className="container">
                            <div className="row ipad-width2">
                                <div className="col-md-4 col-sm-12 col-xs-12">
                                    <div className="movie-img sticky-sb">
                                        <img src={Details.smallPoster} alt="" />
                                        <div className="movie-btn">
                                            <div className="btn-transform transform-vertical red">
                                                <div><a href="/" className="item item-1 redbtn"> <i className="ion-play"></i> Watch Trailer</a></div>
                                                <div><a href="https://www.youtube.com/embed/o-0hcF97wy0" className="item item-2 redbtn fancybox-media hvr-grow"><i className="ion-play"></i></a></div>
                                            </div>
                                            <div className="btn-transform transform-vertical">
                                                <div><a href="/" className="item item-1 yellowbtn"> <i className="ion-card"></i> Buy ticket</a></div>
                                                <div><a href="/" className="item item-2 yellowbtn"><i className="ion-card"></i></a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-8 col-sm-12 col-xs-12">
                                    <div className="movie-single-ct main-content">
                                        <h1 className="bd-hd">{Details.name}</h1>
                                        <div className="social-btn">
                                            <a href="/" className="parent-btn"><i className="ion-heart"></i> Add to Favorite</a>
                                            <div className="hover-bnt">
                                                <a href="/" className="parent-btn"><i className="ion-android-share-alt"></i>share</a>
                                                <div className="hvr-item">
                                                    <a href="/" className="hvr-grow"><i className="ion-social-facebook"></i></a>
                                                    <a href="/" className="hvr-grow"><i className="ion-social-twitter"></i></a>
                                                    <a href="/" className="hvr-grow"><i className="ion-social-googleplus"></i></a>
                                                    <a href="/" className="hvr-grow"><i className="ion-social-youtube"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="movie-rate">
                                            <div className="rate">
                                                <i className="ion-android-star"></i>
                                                <p>7/10<br />
                                                    <span className="rv">56 Reviews</span>
                                                </p>
                                            </div>
                                            <div className="rate-star">
                                                <p>Rate This Movie:  </p>
                                                <i className="ion-ios-star"></i>
                                                <i className="ion-ios-star"></i>
                                                <i className="ion-ios-star"></i>
                                                <i className="ion-ios-star"></i>
                                                <i className="ion-ios-star"></i>
                                                <i className="ion-ios-star"></i>
                                                <i className="ion-ios-star"></i>
                                                <i className="ion-ios-star"></i>
                                                <i className="ion-ios-star-outline"></i>
                                            </div>
                                        </div>
                                        <div className="movie-tabs">
                                            <div className="tabs">
                                                <ul className="tab-links tabs-mv">
                                                    <li className="active"><a href="#overview">Overview</a></li>
                                                </ul>
                                                <div className="tab-content">
                                                    <div id="overview" className="tab active">
                                                        <div className="row">
                                                            <div className="col-md-8 col-sm-12 col-xs-12">
                                                                <p>{Details.synopsis}</p>
                                                                <div className="title-hd-sm">
                                                                    <h4>cast</h4>
                                                                    <a href="/" className="time">Full Cast & Crew  <i className="ion-ios-arrow-right"></i></a>
                                                                </div>
                                                                <div className="mvcast-item">
                                                                    <div className="cast-it">
                                                                        <div className="cast-left">
                                                                            <img src="https://image.tmdb.org/t/p/w342/2mcg07areWJ4EAtDvafRz7eDVvb.jpg" alt="" />
                                                                            <a href="/">Matthew McConaughey</a>
                                                                        </div>
                                                                    </div>
                                                                    <div className="cast-it">
                                                                        <div className="cast-left">
                                                                            <img src="https://image.tmdb.org/t/p/w342/tLelKoPNiyJCSEtQTz1FGv4TLGc.jpg" alt="" />
                                                                            <a href="/">Anne Hathaway</a>
                                                                        </div>
                                                                    </div>
                                                                    <div className="cast-it">
                                                                        <div className="cast-left">
                                                                            <img src="https://image.tmdb.org/t/p/w342/mR1ELpP0T2Q1ZRSaADPgtrbPGla.jpg" alt="" />
                                                                            <a href="/">Ellen Burstyn</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="title-hd-sm">
                                                                    <h4>User reviews</h4>
                                                                    <a href="/" className="time">See All 56 Reviews <i className="ion-ios-arrow-right"></i></a>
                                                                </div>
                                                                <div className="mv-user-review-item">
                                                                    <h3>Gizmo Fan</h3>
                                                                    <p>I'm pretty sure no one will EVER come close to being as talented as Hans Zimmer is, also I would kill 10 people just to see this in theaters.</p>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-4 col-xs-12 col-sm-12">
                                                                <div className="sb-it">
                                                                    <h6>Director: </h6>
                                                                    <p><a href="/">{Details.director}</a></p>
                                                                </div>
                                                                <div className="sb-it">
                                                                    <h6>Writer: </h6>
                                                                    <p><a href="/">Joss Whedon,</a> <a href="/">Stan Lee</a></p>
                                                                </div>
                                                                <div className="sb-it">
                                                                    <h6>Stars: </h6>
                                                                    <p><a href="/">Robert Downey Jr,</a> <a href="/">Chris Evans,</a> <a href="/">Mark Ruffalo,</a><a href="/"> Scarlett Johansson</a></p>
                                                                </div>
                                                                <div className="sb-it">
                                                                    <h6>Genres:</h6>
                                                                    <p><a href="/">Action, </a> <a href="/"> Sci-Fi,</a> <a href="/">Adventure</a></p>
                                                                </div>
                                                                <div className="sb-it">
                                                                    <h6>Release Date:</h6>
                                                                    <p>May 1, 2015 (U.S.A)</p>
                                                                </div>
                                                                <div className="sb-it">
                                                                    <h6>Run Time:</h6>
                                                                    <p>141 min</p>
                                                                </div>
                                                                <div className="sb-it">
                                                                    <h6>MMPA Rating:</h6>
                                                                    <p>PG-13</p>
                                                                </div>
                                                                <div className="sb-it">
                                                                    <h6>Plot Keywords:</h6>
                                                                    <p className="tags">
                                                                        <span className="time"><a href="/">superhero</a></span>
                                                                        <span className="time"><a href="/">marvel universe</a></span>
                                                                        <span className="time"><a href="/">comic</a></span>
                                                                        <span className="time"><a href="/">blockbuster</a></span>
                                                                        <span className="time"><a href="/">final battle</a></span>
                                                                    </p>
                                                                </div>
                                                                <div className="ads">
                                                                    <img src="/images/uploads/ads1.png" alt="" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </React.Fragment>) : null}
            </div>)}
    </ThemeContext.Consumer>)
}

export default MovieDetails