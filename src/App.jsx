import { useState } from 'react'
import './App.css'
import ManeskinBeggin from './components/ManeskinBeggin'

const songs = [
  "Maneskin - Beggin"
]

function App() {
  const [song, setSong] = useState("")

  return (
    <div>
      { song == "" && 
        <div style={{height: "100%"}}>
          <h1>Song Typer</h1>
          {songs.map( s => (
            <button
              key={s} 
              onClick={()=>setSong(s)}
            >
              {s}
            </button>
          ))}
        </div>
      }

      {song=="Maneskin - Beggin" && <ManeskinBeggin setSong={setSong} />}
    </div>
  )
}

export default App
