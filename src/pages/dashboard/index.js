import React from "react";

const Dashboard = (props) => {

    return (<div>
        <div className="hero common-hero">
            <div className="containernew">
                <div className="row">
                    <div className="col-md-12" style={{ marginTop: '70px' }}>
                        <div className="hero-ct">
                            <h1>Movie List</h1>
                            <ul className="breadcumb">
                                <li className="active"><a href="/">Home</a></li>
                                <li> <span className="ion-ios-arrow-right"></span>Dashboard</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}

export default Dashboard