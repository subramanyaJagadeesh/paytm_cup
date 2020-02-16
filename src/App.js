import React, {Component, useState} from 'react';
import logo from './assets/images/navbar_logo.png';
import banner_logo from './assets/images/banner_logo.png';
import banner_character from './assets/images/banner_character.png';
import character_1 from './assets/images/character_1.png';
import character_2 from './assets/images/character_2.png';
import footer from './assets/images/footer.png'
import './App.scss';

function App() {

  const [player, setPlayer] = useState(1)

  return (
    <div className="app">

      <div className="app-nav">
        <img src={logo} className="app-nav-logo"/>
        <div className="app-nav-menu">
          <a href="#home" >
            <p>Home</p>
          </a>
          <a href="#info">
            <p>Details</p>
          </a>
          <a href="#register">
            <p>Register</p>
          </a>
        </div>
      </div>

      <div id="home" className="home">
        <div id="home" className="home-banner">
          <div className="home-banner-logo_container">
            <img src={banner_logo} className="home-banner-logo"/>
          </div>
          <div className="home-banner-character_container">
            <img src={banner_character} className="home-banner-character"/>
          </div>
          <div className="home-banner-middle_section"/>
          <div className="home-banner-intro_container">
            <h1 className="home-banner-intro_header">
              LOREM IPSUM
            </h1>
            <h3 className="home-banner-intro_text">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            </h3>
          </div>
        </div>
      </div>
      
      <div id="info" className="about">
        <h1 className="about-header">
          ABOUT THE TOURNAMENT
        </h1>
        <h3 className="about-mini_header">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.
        </h3>
        <ul className="about-infolist">
          <li>
            <h3>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            </h3>
          </li>
          <li>
            <h3>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            </h3>
          </li>
          <li>
            <h3>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            </h3>
          </li>
          <li>
            <h3>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            </h3>
          </li>
          <li>
            <h3>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            </h3>
          </li>
          <li>
            <h3>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            </h3>
          </li>
        </ul>
      </div>

      <div id="register" className="register">
        <div className="register-image_container">
          <img className="register-image" src={character_1} />
          <img className="register-image" src={character_2} />
        </div>
        <div className="register-form_container">
          <h1>
            REGISTER
          </h1>
          <form action="" noValidate className="register-form">
            <div className="register-form-inputrow">
              <input className="textfield" placeholder="TEAM NAME" />
              <button className="register-form-button">ADD TEAM LOGO</button>
            </div>
            <div className="register-form-inputrow">
              <button onClick={()=>setPlayer(2)} className="register-form-button">ADD PLAYER 2</button>
              <button onClick={()=>setPlayer(3)} className="register-form-button">ADD PLAYER 3</button>
              <button onClick={()=>setPlayer(4)} className="register-form-button">ADD PLAYER 4</button>
            </div>
              <input className="textfield" placeholder={"PLAYER "+ player +" NAME"} />
              <input className="textfield" placeholder={"PLAYER "+ player +" IGN"} />
              <input className="textfield" placeholder={"PLAYER "+ player +" PUBGM CHARACTER ID"} />
              <input className="textfield" placeholder={"PLAYER "+ player +" PHONE NUMBER"} />
              <label className="container">TERMS & CONDITIONS
                <input type="checkbox" id="checkbox"/>
                <span className="checkmark"></span>
              </label>
              <button type="submit" id="submit" className="register-form-button">Submit</button>
          </form>
        </div>
        <div className="footer">
          <img src={footer} className="footer-img" />
        </div>
      </div>

      
      
    </div>
  );
}

export default App;
