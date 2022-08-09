import React, { Suspense, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/header'
import Footer from './components/footer'

import HomePage from './pages/homepage'
import MovieList from './pages/movielist'
import MovieDetails from './pages/moviedetails'

import Login from './pages/login'
import SignUp from './pages/signup'
import Dashboard from './pages/dashboard'

import { themes, ThemeContext } from './themecontext'

export default function AppRouter() {
    const toggleTheme = (theme) => {
        UpdateThemeState({
            theme: theme === themes.light ? themes.light : themes.dark,
            toggleTheme: toggleTheme,
        })
    };
    const [themeState, UpdateThemeState] = useState({
        theme: themes.dark,
        toggleTheme: toggleTheme,
    })


    return (
        <div>
            <ThemeContext.Provider value={themeState}>
                <Header />
                <Router>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/movies" element={<MovieList />} />
                            <Route path="/details/:title" element={<MovieDetails />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/signup" element={<SignUp />} />
                            <Route path="/dashboard" element={<Dashboard />} />
                        </Routes>
                    </Suspense>
                </Router>
                <Footer />
            </ThemeContext.Provider>
        </div>
    )
}