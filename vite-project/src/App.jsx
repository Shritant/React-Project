import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import messi from "./assets/messi-wins-worldcup.jpg"
import soccerChess from "./assets/messi-ronaldo-chess.webp"
import shadowBoy from "./assets/shadow-boy.png"
import threeDots from "./assets/ellipsis-solid.svg"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* props: variables that pass information from the parent to the child components*/}
      <Card></Card>

    </>
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

function description ({liked_by_who}) {

  return (
    <p>{liked_by_who}</p>
  )
}


function Card () {

  return (
    <div id="Card">
      <Header picture={shadowBoy} name={"Shadow Boy"}></Header>
      <Image picture={messi} title={"Picture of messi"}></Image>
      <description></description>
    </div>
  )
}

export default App
