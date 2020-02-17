import React, { useState, useEffect} from 'react';
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

function App() {

  useEffect(()=>{
    if(width>780)
      setDesktop(true)
  })

  // const handleScroll = () => {
  //   let homeY = home.getBoundingClientRect().height-home.getBoundingClientRect().top;
  //   let detailsY = details.getBoundingClientRect().height-details.getBoundingClientRect().top;
  //   let registerY = register.getBoundingClientRect().height+register.getBoundingClientRect().top;
  //   let scrollY = window.scrollY;
  //   console.warn("here",scrollY,homeY,detailsY,registerY)
  //   if(scrollY>homeY && scrollY<detailsY )
  //     setView('home');
  //   else if(scrollY>detailsY && scrollY<registerY)
  //     setView('details');
  //   else if(scrollY>=registerY)
  //     setView('register');
  // };

  const [player, setPlayer] = useState(1)
  const [desktop, setDesktop] = useState(false)
  const [showNav, setShowNav] = useState(false)
  const [view, setView] = useState('home')
  const [file, setFile] = useState(null)

  var home ;
  var details;
  var register;

  return (
    <div  className="app">
      <div className="app-nav">
        {
          desktop?
          <>
            <img src={logo} className="app-nav-logo"/>
            <div className="app-nav-menu">
              <a href="#home" onClick={()=>{setShowNav(false);setView('home')}} style={{fontWeight:view=='home'?'bold':100}}>
                <p>Home</p>
              </a>
              <a href="#info" onClick={()=>{setShowNav(false);setView('details')}} style={{fontWeight:view=='details'?'bold':100}}>
                <p>Details</p>
              </a>
              <a href="#register" onClick={()=>{setShowNav(false);setView('register')}} style={{fontWeight:view=='register'?'bold':100}}>
                <p>Register</p>
              </a>
            </div>
          </>
          :
          <>
            <img src={mobile_logo} className="app-nav-logo"/>
              <button onClick={()=>setShowNav(!showNav)}>
                <img src={menu} className="app-nav-menu"/>
              </button>
          </>
        }
        {
          showNav?
          <>
            <div className="app-nav-menu-triangle" />
            <div className="app-nav-menu-dropdown">
                <a href="#home" onClick={()=>{setShowNav(false);setView('home')}} style={{backgroundColor:view=='home'?'#0c3b84':'#C5CDD9',color:view=='home'?'white':'#0c3b84'}} >
                  <p>Home</p>
                </a>
                <a href="#info" onClick={()=>{setShowNav(false);setView('details')}} style={{backgroundColor:view=='details'?'#0c3b84':'#C5CDD9',color:view=='details'?'white':'#0c3b84'}} >
                  <p>Details</p>
                </a>
                <a href="#register" onClick={()=>{setShowNav(false);setView('register')}} style={{backgroundColor:view=='register'?'#0c3b84':'#C5CDD9',color:view=='register'?'white':'#0c3b84'}} >
                  <p>Register</p>
                </a>
            </div>
          </>
          :null
        }
        
      </div>
        <div  id="home"  ref={(el) => home = el}  className="home">
          <div className="home-banner">
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
      
      <div  ref={(el) => details = el} id="info"  className="about">
        <h1  className="about-header">
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

      <div id="register" ref={(el) => register = el} className="register">
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
        <div   className="register-form_container">
          <h1>
            REGISTER
          </h1>
          <div  className="register-form">
            <div className="register-form-inputrow">
              <input className="textfield" placeholder="TEAM NAME" />
              <button id="facade" className="register-form-button">ADD TEAM LOGO
                <input type="file" value={file} onChange={(e)=>{setFile(e.target.value)}} class="custom-file-input"/>
                {
                  file?
                    <div style={{backgroundColor:'#517fc6',borderRadius:20, width:'10%',height:'20%', float:'right', marginLeft:'1%'}} />
                    :null
                }
                
              </button>
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
          </div>
        </div>
        <div className="footer">
          <img src={footer} className="footer-img" />
        </div>
      </div>
    </div>
  );
}

export default App;
