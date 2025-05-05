import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import messi from "./assets/messi-wins-worldcup.jpg"
import soccerChess from "./assets/messi-ronaldo-chess.webp"
import shadowBoy from "./assets/shadow-boy.png"
import threeDots from "./assets/ellipsis-solid.svg"
import heart from "./assets/heart-solid.svg"
import comment from "./assets/comment-solid.svg"
import forward from "./assets/paper-plane-solid.svg"
import bookmark from "./assets/bookmark-solid.svg"
import ronaldo from "./assets/ronaldo-wins-euros.jpg"
import shadowGirl from "./assets/shadow-girl.jpg"
import shadowChat from "./assets/shadowchat_title.png"
import search from "./assets/search-solid.svg"
import worldVideo from "./assets/world-video.mp4"

function App() {
  const [count, setCount] = useState(0)
  const [showModal, setShowModal] = useState(false)

  return (
    <div id="app">
      <Navigation></Navigation>
      <Section></Section>
      <Feed></Feed>
      {showModal==true?<Modal></Modal>:null}
    </div>
  )
}

function Navigation() {

  return (
    <div id="Navigation">
      <img src={shadowChat} id="shadowchat"></img>
      <div>
        <img src={heart} className="navigation-icons"></img>
        <img src={search} className="navigation-icons"></img> 
        <img src={forward} className="navigation-icons"></img>
      </div>

    </div>
  )

  

}

function Shorts({profile}) {
const [isClicked, setIsClicked] = useState(false)

  return (
    <div >
      <img className={isClicked==true? "clicked":""} onClick={()=>{setIsClicked(true)}} src={profile} id="shorts-picture"></img>
    </div>
  )
}

function Section() {

  return (
    <div id="shorts-section">
      <Shorts profile={shadowGirl}></Shorts>
      <Shorts profile={shadowGirl}></Shorts>
      <Shorts profile={shadowGirl}></Shorts>
      <Shorts profile={shadowGirl}></Shorts>
      <Shorts profile={shadowGirl}></Shorts>
      <Shorts profile={shadowGirl}></Shorts>
      <Shorts profile={shadowGirl}></Shorts>
      <Shorts profile={shadowGirl}></Shorts>
      <Shorts profile={shadowGirl}></Shorts>
      <Shorts profile={shadowGirl}></Shorts>
      <Shorts profile={shadowGirl}></Shorts>
      <Shorts profile={shadowGirl}></Shorts>
      <Shorts profile={shadowGirl}></Shorts>
      <Shorts profile={shadowGirl}></Shorts>
      <Shorts profile={shadowGirl}></Shorts>
      <Shorts profile={shadowGirl}></Shorts>
      <Shorts profile={shadowGirl}></Shorts>
      <Shorts profile={shadowGirl}></Shorts>
      <Shorts profile={shadowGirl}></Shorts>
      <Shorts profile={shadowGirl}></Shorts>
    </div>
  )
}

function Feed() {

  return (
    <div id="Feed">
    {/* props: variables that pass information from the parent to the child components*/}
      <Card profile_picture={shadowBoy} profile_picture_text={"Shadow Boy"} image={messi} image_title={"Picture of Messi"} liked_text={"Liked by random people"}></Card>
      <Card profile_picture={shadowBoy} profile_picture_text={"Shadow Boy"} image={soccerChess} image_title={"Picture of Messi vs Ronaldo in Chess"} liked_text={"Liked by random people"}></Card>
      <Card profile_picture={shadowBoy} profile_picture_text={"Shadow Boy"} image={ronaldo} image_title={"Picture of Ronaldo"} liked_text={"Liked by random people"}></Card>
    </div>
  )
}


//components need capitals
function Image ({picture, title}) {
  //Always include space between 'function' and 'return' syntaxes
  //'return' statements require one parent
  return (
    // <img src={}></img>
    <img src={picture} id="image"></img>
  )
}

function Header ({picture, name}) {

  return (
    <div id='header'>
      <div id="profile">
        <img src={picture} className='profile-picture'></img>
        <p>{name}</p>
      </div>
      <img src={threeDots} id="more-icon"></img>
    </div>
  )
}

function Description ({liked_by_who}) {

  return (
    <div>
      <div id="description-icons-box">
        <img src={heart} id="love-button" className="description-icons"></img>
        <img src={comment} id="comment-button" className="description-icons"></img>
        <img src={forward} id="forward-button" className="description-icons"></img>
        <img src={bookmark} id="bookmark-button" className="description-icons"></img>
      </div>
      <p className="description-text">{liked_by_who}</p>
    </div>
    
  )
}


function Card ({profile_picture, profile_picture_text, image, image_title, liked_text}) {

  return (
    <div id="Card">
      <Header picture={profile_picture} name={profile_picture_text}></Header>
      <Image picture={image} title={image_title}></Image>
      <Description liked_by_who={liked_text}></Description>
    </div>
  )
}


function Modal () {

  return (
    <div id="modal-background">
      <video id="Modal" controls autoPlay muted loop>
        <source src={worldVideo} type="video/mp4"></source>
      </video> 
    </div>
  )
}








export default App
