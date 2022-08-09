/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState } from "react";
import { ThemeContext, themes } from "../themecontext";

const Header = (props) => {
    const [currentTheme, updateCurrentTheme] = useState(themes.dark)
    const [searchValue, updatesearchValue] = useState('')
    const [isloggedIn, updateisloggedIn] = useState(localStorage.getItem('isLoggedIn') ? true : false)

    const navigateToList = () => {
        if (searchValue) {
            window.location.href = `/details/${searchValue}`
        } else {
            alert('Please enter value to search !!!')
        }
    }


    return (<ThemeContext.Consumer>
        {(theme) => {
            return (<header className="ht-header">
                <div className="container">
                    <nav className="navbar navbar-default navbar-custom">
                        <div className="navbar-header logo">
                            <div className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                                <span className="sr-only">Toggle navigation</span>
                                <div id="nav-icon1">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                            <a href="/"><img className="logo" alt="logo" src="/images/logo1.png" width="119" height="58" /></a>
                        </div>
                        <div className="collapse navbar-collapse flex-parent" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav flex-child-menu menu-left">
                                <li className="hidden">
                                    <a href="#page-top"></a>
                                </li>
                                <li className="dropdown first">
                                    <a className="btn btn-default dropdown-toggle lv1" href="/">
                                        Home
                                    </a>
                                </li>
                                <li className="dropdown first">
                                    <a className="btn btn-default dropdown-toggle lv1" href="/movies">
                                        Movies
                                    </a>
                                </li>
                                {isloggedIn ? (<li className="dropdown first">
                                    <a className="btn btn-default dropdown-toggle lv1" href="/dashboard">
                                        Dashboard
                                    </a>
                                </li>) : null}
                            </ul>
                            <ul className="nav navbar-nav flex-child-menu menu-right">
                                <li className="dropdown first">
                                    <label style={{ color: 'white' }}>Theme (Context API)</label>
                                    <select value={currentTheme} onChange={(event) => {
                                        theme.toggleTheme(event.target.value)
                                        updateCurrentTheme(event.target.value)
                                    }}>
                                        <option value={'light'}>Light</option>
                                        <option value={'dark'}>Dark</option>
                                    </select>
                                </li>
                                <li><a href="#">Help</a></li>
                                {!isloggedIn ? (<React.Fragment><li className="loginLink"><a href="/login">LOG In</a></li>
                                    <li className="btn signupLink"><a href="/signup">sign up</a></li>
                                </React.Fragment>) : (<li className="btn signupLink"><a href="/">Log Out</a></li>)}
                            </ul>
                        </div>
                    </nav>
                    <div className="top-search">
                        <select>
                            <option value="united">TV show</option>
                            <option value="saab">Others</option>
                        </select>
                        <input type="text" value={searchValue} onChange={(event) => updatesearchValue(event.target.value)} placeholder="Search for a movie, TV Show or celebrity that you are looking for" />
                        <button className="btn signupLink" onClick={() => navigateToList()}>Search</button>
                    </div>
                </div>
            </header>)
        }}
    </ThemeContext.Consumer>)
}

export default Header