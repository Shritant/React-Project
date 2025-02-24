import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import messi from "./assets/messi-wins-worldcup.jpg"
import soccerChess from "./assets/messi-ronaldo-chess.webp"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* props: variables that pass information from the parent to the child components*/}
      <Image picture={messi} title={"Picture of messi"}></Image>
      <Image picture={soccerChess} title={"Picture of soccerChess"}></Image>
    </>
  )
}

//components need capitals
function Image ({picture, title}) {
  //Always include space between 'function' and 'return' syntaxes
  //'return' statements require one parent
  return (
    // <img src={}></img>
    <div className='image'>
      <img src={picture}></img>
      <h3>{title}</h3>
    </div>
  )
}


export default App
