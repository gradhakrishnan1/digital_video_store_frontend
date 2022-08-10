import React, { useState } from "react";
import axios from "axios";

const Login = (props) => {
    const [Email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const Login = (event) => {
        event.preventDefault()
        if (Email === '' || password === '') {
            alert("Please enter all fields !!!!")
        } else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(Email) === false) {
            alert('Please enter a valid Email')
            setEmail('')
        } else {
            axios.post(`https://digital-video-store-back.herokuapp.com/customer/details?customerEmail=${Email}`).then((response) => {
                if (response.status === 200) {
                    alert('User Logged In Successfully !!!')
                    localStorage.setItem('isLoggedIn', 'true');
                    window.location.href = "/dashboard"
                }
            })
        }
    }
    return (<div>
        <div className="hero common-hero">
            <div className="containernew">
                <div className="row">
                    <div className="col-md-12" style={{ marginTop: '70px' }}>
                        <div className="hero-ct">
                            <h1>Movie List</h1>
                            <ul className="breadcumb">
                                <li className="active"><a href="/">Home</a></li>
                                <li> <span className="ion-ios-arrow-right"></span>Login</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div><div className="containernew">
            <form className="form-1">
                <h1>Login</h1>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" value={Email} onChange={(event) => setEmail(event.target.value)} required />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" value={password} onChange={(event) => setPassword(event.target.value)} required />
                <button type="submit" onClick={(event) => Login(event)}>Login</button>
                <p>Or SignUp Using</p>
                <div className="icons">
                    <a href="https://www.facebook.com/" target="blank"
                    ><i className="fab fa-facebook-f"></i
                    ></a>
                    <a href="https://twitter.com/" target="blank"
                    ><i className="fab fa-twitter"></i
                    ></a>
                    <a href="https://mail.google.com/" target="blank"
                    ><i className="fab fa-google"></i
                    ></a>
                </div>
            </form>
        </div>
    </div>)
}

export default Login