import React from "react";

import HeroSection from './components/herosection'
import MovieSection from "./components/moviesection";
import TvShowSection from "./components/tvshowsection"
import LatestNews from "./components/latestnews";

import { themes, ThemeContext } from "../../themecontext";


const HomePage = (props) => {
    return (<div>
        <HeroSection />
        <ThemeContext.Consumer>
            {(themeDetails) => {
                return (<div className={themeDetails.theme === themes.light ? "buster-light" : ""}>
                    <div className="movie-items">
                        <div className="container">
                            <div className="row ipad-width">
                                <MovieSection />
                                <TvShowSection />
                                <LatestNews />
                            </div>
                        </div>
                    </div>
                </div>)
            }}

        </ThemeContext.Consumer>
    </div>
    )
}

export default HomePage