import React, { useState } from "react";
import axios from "axios";

const SignUp = (props) => {
    const [Email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [firstname, setfirstname] = useState('')
    const [lastname, setlastname] = useState('')

    const SignUp = (event) => {
        event.preventDefault()
        if (Email === '' || password === '' || confirmPassword === '' || firstname === '' || lastname === '') {
            alert("Please enter all fields !!!!")
        } else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(Email) === false) {
            alert('Please enter a valid Email')
            setEmail('')
        }
        else if (confirmPassword !== password) {
            alert("Password and Confirm Password does not match !!!!")
            setPassword('')
            setConfirmPassword('')
        } else {
            const requestParams = {
                firstName: firstname,
                lastName: lastname,
                email: Email,
                password: password
            }
            axios.post('http://localhost:4000/customer/register', requestParams).then((response) => {
                if (response.status === 200) {
                    alert('User Created Successfully !!!!')
                    window.location.href = "/login"
                }
            })
        }
    }

    return (<div>
        <div className="hero common-hero">
            <div className="containernew">
                <div className="row">
                    <div className="col-md-12" style={{ marginTop: '30px' }}>
                        <div className="hero-ct">
                            <h1>Movie List</h1>
                            <ul className="breadcumb">
                                <li className="active"><a href="/">Home</a></li>
                                <li> <span className="ion-ios-arrow-right"></span>Sign Up</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div><div class="containernew">
            <form class="form-1">
                <h1>Sign up</h1>
                <label htmlFor="firstname">First Name</label>
                <input type="text" name="firstname" id="firstname" value={firstname} onChange={(event) => setfirstname(event.target.value)} required />
                <label htmlFor="lastname">Last Name</label>
                <input type="text" name="lastname" id="lastname" value={lastname} onChange={(event) => setlastname(event.target.value)} required />
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" value={Email} onChange={(event) => setEmail(event.target.value)} required />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" value={password} onChange={(event) => setPassword(event.target.value)} required />
                <label htmlFor="password">Confirm Password</label>
                <input type="password" name="confirmPassword" id="confirmPassword" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} required />
                <button type="submit" onClick={(event) => SignUp(event)}>Sign Up</button>
                <p>Or SignUp Using</p>
                <div class="icons">
                    <a href="https://www.facebook.com/" target="blank"
                    ><i class="fab fa-facebook-f"></i
                    ></a>
                    <a href="https://twitter.com/" target="blank"
                    ><i class="fab fa-twitter"></i
                    ></a>
                    <a href="https://mail.google.com/" target="blank"
                    ><i class="fab fa-google"></i
                    ></a>
                </div>
            </form>
        </div>
    </div>)
}

export default SignUp