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
import footer from './assets/images/footer.png';
import loader from './assets/images/loader.svg'
import './App.scss';
import axios from 'axios';
import VisibilitySensor from 'react-visibility-sensor'

let width = window.innerWidth;

function App() {

  useEffect(()=>{
    if(width>780)
      setDesktop(true)
  })

  const [player, setPlayer] = useState(1)
  const [desktop, setDesktop] = useState(false)
  const [showNav, setShowNav] = useState(false)
  const [view, setView] = useState('home')
  const [file, setFile] = useState('')
  const [teamName, setTeamName] = useState('')

  const [player1Name, setPlayer1Name] = useState('')
  const [player2Name, setPlayer2Name] = useState('')
  const [player3Name, setPlayer3Name] = useState('')
  const [player4Name, setPlayer4Name] = useState('')

  const [player1IGN, setPlayer1IGN] = useState('')
  const [player2IGN, setPlayer2IGN] = useState('')
  const [player3IGN, setPlayer3IGN] = useState('')
  const [player4IGN, setPlayer4IGN] = useState('')

  const [player1ID, setPlayer1ID] = useState('')
  const [player2ID, setPlayer2ID] = useState('')
  const [player3ID, setPlayer3ID] = useState('')
  const [player4ID, setPlayer4ID] = useState('')

  const [player1Num, setPlayer1Num] = useState('')
  const [player2Num, setPlayer2Num] = useState('')
  const [player3Num, setPlayer3Num] = useState('')
  const [player4Num, setPlayer4Num] = useState('')
  const [error,setError] = useState(false)

  const [check, setCheck] = useState(false)

  const [loading, setLoading] = useState(false)

  const submitForm = ()=>{
    if(
      teamName=='' 
      || file=='' 
      || player1Name=='' 
      || player1IGN=='' 
      || player1ID=='' 
      || player1Num=='' 
      || player2Name=='' 
      || player2IGN=='' 
      || player2ID=='' 
      || player2Num=='' 
      || player3Name=='' 
      || player3IGN=='' 
      || player3ID=='' 
      || player3Num=='' 
      || player4Name=='' 
      || player4IGN=='' 
      || player4ID=='' 
      || player4Num=='' 
      || !check
      ){
      setError(true)
      return;
    }
    else{
      setLoading(true)
      setError(false)
      var newForm = new FormData();
      newForm.append("entry.2057511493",teamName);

      newForm.append("entry.598621747",player1Name);
      newForm.append("entry.1608706557",player1IGN);
      newForm.append("entry.903441947",player1ID);
      newForm.append("entry.657492288",player1Num);

      newForm.append("entry.171010565",player2Name);
      newForm.append("entry.1448063629",player2IGN);
      newForm.append("entry.2093167995",player2ID);
      newForm.append("entry.2090652722",player2Num);

      newForm.append("entry.491380335",player3Name);
      newForm.append("entry.432673326",player3IGN);
      newForm.append("entry.425558129",player3ID);
      newForm.append("entry.1881158785",player3Num);
  
      newForm.append("entry.931097181",player4Name);
      newForm.append("entry.1315638077",player4IGN);
      newForm.append("entry.1529990758",player4ID);
      newForm.append("entry.1118984795",player4Num);


      var formData = new FormData();
      formData.append('file',file);
      formData.append('upload_preset','ncyahvk2');
      formData.append('public_id',file.name)
  
      axios({
        url:'https://api.cloudinary.com/v1_1/subramanyajagadeesh/image/upload',
        method:'POST',
        headers:{
          'Content-Type':'application/x-www-form-urlencoded',
        },
        data: formData,
      }).then((response)=>{
        console.warn("image success")
        newForm.append("entry.612819593",response.data.secure_url)
        axios({
          url:'https://docs.google.com/forms/d/e/1FAIpQLSd76HSMBHIeWdU8JblwTSwxj98ewkba0Hu2mzyPk2RZ_OxB9Q/formResponse',
          method:'POST',
          headers:{
            'Content-Type':'application/json',
            'Access-Control-Allow-Origin':'*'
          },
          data: newForm,
        }).then(res=>{
          if(res.status==200){
            setLoading(false)
            window.location.reload()
          }
        }).catch((err)=>{
          console.log(err)
        })
      }).catch((err)=>{
        console.log(err)
      })
  
    }
    
  }

  return (
    <>
    {
      loading?
        <div className="loader">
          <img src={loader} />
        </div>
      :
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
        <VisibilitySensor minTopValue={20} partialVisibility='top' onChange={(isVisible)=>{if(isVisible)setView('home')}}>
          <div  id="home" className="home" >
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
                <img src={desktop?banner_character:banner_character_mobile} id='char2' className="home-banner-character"/>
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
        </VisibilitySensor>
        <VisibilitySensor minTopValue={50} partialVisibility='top' onChange={(isVisible)=>{if(isVisible)setView('details')}}>
          <div id="info"  className="about">
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
        </VisibilitySensor>
        
        <VisibilitySensor minTopValue={100} partialVisibility='top' onChange={(isVisible)=>{if(isVisible)setView('register')}}>
        <div id="register" className="register">
          <div className="register-image_container">
            {
              desktop?
              <>
                <img className="register-image" id={view=='register'?"char1":""} src={character_1} />
                <img className="register-image" id={view=='register'?"char2":""} src={character_2} />
              </>
              :
                <img className="register-image" id={view=='register'?"char1":""} src={register_character} />
            }
          
          </div>
          <div   className="register-form_container">
            <h1>
              REGISTER
            </h1>
            <div  className="register-form">
              <div className="register-form-inputrow">
                <input value={teamName} onChange={(e)=>setTeamName(e.target.value)} className="textfield" placeholder="TEAM NAME" />
                <button id="facade" className="register-form-button">ADD TEAM LOGO
                  <input type="file" onChange={(e)=>{setFile(e.target.files[0])}} className="custom-file-input"/>
                  {
                    file?
                      <div style={{backgroundColor:'#517fc6',borderRadius:20, width:'10%',height:'20%', float:'right', marginLeft:'1%'}} />
                      :null
                  }
                  
                </button>
              </div>
              <div className="register-form-inputrow">
                {
                  player!=1?
                  <button onClick={()=>setPlayer(1)} className="register-form-button">ADD PLAYER 1</button>
                  :null
                }
                {
                  player!=2?
                  <button onClick={()=>setPlayer(2)} className="register-form-button">ADD PLAYER 2</button>
                  :null
                }
                {
                  player!=3?
                  <button onClick={()=>setPlayer(3)} className="register-form-button">ADD PLAYER 3</button>
                  :null
                }
                {
                  player!=4?
                  <button onClick={()=>setPlayer(4)} className="register-form-button">ADD PLAYER 4</button>
                  :null
                }
              </div>
                <input value={player==1?player1Name:player==2?player2Name:player==3?player3Name:player4Name} onChange={(e)=>{
                  switch(player){
                    case 1:setPlayer1Name(e.target.value);break;
                    case 2:setPlayer2Name(e.target.value);break;
                    case 3:setPlayer3Name(e.target.value);break;
                    case 4:setPlayer4Name(e.target.value);break;
                  }
                }} className="textfield" placeholder={"PLAYER "+ player +" NAME"} />

                <input value={player==1?player1IGN:player==2?player2IGN:player==3?player3IGN:player4IGN} onChange={(e)=>{
                  switch(player){
                    case 1:setPlayer1IGN(e.target.value);break;
                    case 2:setPlayer2IGN(e.target.value);break;
                    case 3:setPlayer3IGN(e.target.value);break;
                    case 4:setPlayer4IGN(e.target.value);break;
                  }
                }} className="textfield" placeholder={"PLAYER "+ player +" IGN"} />

                <input value={player==1?player1ID:player==2?player2ID:player==3?player3ID:player4ID} onChange={(e)=>{
                  switch(player){
                    case 1:setPlayer1ID(e.target.value);break;
                    case 2:setPlayer2ID(e.target.value);break;
                    case 3:setPlayer3ID(e.target.value);break;
                    case 4:setPlayer4ID(e.target.value);break;
                  }
                }}  className="textfield" placeholder={"PLAYER "+ player +" PUBGM CHARACTER ID"} />

                <input value={player==1?player1Num:player==2?player2Num:player==3?player3Num:player4Num} onChange={(e)=>{
                  switch(player){
                    case 1:setPlayer1Num(e.target.value);break;
                    case 2:setPlayer2Num(e.target.value);break;
                    case 3:setPlayer3Num(e.target.value);break;
                    case 4:setPlayer4Num(e.target.value);break;
                  }
                }}  className="textfield" placeholder={"PLAYER "+ player +" PHONE NUMBER"} />
                {
                  error?
                  <p style={{color:'red',fontSize:'1em',}}>Form has missing/ innacurate values, please check and retry.</p>
                  :null
                }
                <label className="container">TERMS & CONDITIONS
                  <input value={check} onChange={(e)=>setCheck(e.target.value)} type="checkbox" id="checkbox"/>
                  <span className="checkmark"></span>
                </label>
                <button type="submit" id="submit" onClick={()=>submitForm()} className="register-form-button">SUBMIT</button>
            </div>
          </div>
          <div className="footer">
            <img src={footer} className="footer-img" />
          </div>
        </div>
        </VisibilitySensor>
      </div>
    }
    </>
    
  );

  
}

export default App;
