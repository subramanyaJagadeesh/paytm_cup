import React, {Component, useState, useEffect} from 'react';
import logo from './assets/images/navbar_logo.png';
import mobile_logo from './assets/images/navbar_logo_mobile.png'
import banner_logo from './assets/images/banner_logo.png';
import banner_logo_mobile from './assets/images/banner_logo_mobile.png';
import menu from './assets/images/menu.svg'
import banner_character from './assets/images/banner_character.png';
import banner_character_mobile from './assets/images/banner_character_mobile.png';
import character_1 from './assets/images/character_1.png';
import character_2 from './assets/images/character_2.png';
import register_character from './assets/images/register_character.png'
import footer from './assets/images/footer.png'
import './App.scss';

let width = window.innerWidth;
var desktop = false;

function App() {
  useEffect(()=>{
    if(width>780)
      setDesktop(true)
  })
  const [player, setPlayer] = useState(1)
  const [desktop, setDesktop] = useState(false)

  return (
    <div className="app">
      <div className="app-nav">
        {
          desktop?
          <>
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
          </>
          :
          <>
            <img src={mobile_logo} className="app-nav-logo"/>
              <button onClick={()=>console.warn("clicked")}>
                <img src={menu} className="app-nav-menu"/>
              </button>
          </>
        }
        
      </div>

      <div id="home" className="home">
        <div id="home" className="home-banner">
          {
            !desktop?
            <div className="home-banner-middle_section" />
            :null
          }
          <div className="home-banner-logo_container">
            <img src={desktop?banner_logo:banner_logo_mobile} className="home-banner-logo"/>
          </div>
          <div className="home-banner-character_container">
            <img src={desktop?banner_character:banner_character_mobile} className="home-banner-character"/>
          </div>
          {
            desktop?
            <div className="home-banner-middle_section"/>
            :null
          }
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
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
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
          
        </ul>
      </div>

      <div id="register" className="register">
        <div className="register-image_container">
          {
            desktop?
            <>
              <img className="register-image" src={character_1} />
              <img className="register-image" src={character_2} />
            </>
            :
              <img className="register-image" src={register_character} />
          }
         
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
              <button type="submit" id="submit" className="register-form-button">SUBMIT</button>
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
