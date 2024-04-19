import React from "react";
// import Login from "./Login";
import LoginForm from "./login/LoginForm";
import '../Components/Home.css';
import house from '../Components/login/Assets/house.png'
function Home(){
    return(
        <div className="home-container">
            <div className="home1">
                {/* <h1>Welcome to Suqasa Properties</h1> */}
                <div className="image-container">
                    <img src={house} alt="House" className="image"/>
                    <div className="overlay-text">Welcome To Suqasa Properties</div>
                </div>         
            </div>
            <div className="home2">
                <LoginForm/>
            </div>
        </div>
    )
}

export default Home;