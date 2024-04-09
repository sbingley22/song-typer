import { useState } from 'react'
import './App.css'
import ManeskinBeggin from './components/ManeskinBeggin'
import JonnyCashWalkTheLine from './components/JonnyCashWalkTheLine'
import Song from './components/Song'

const songs = [
  "Maneskin - Beggin",
  "Johnny Cash - Walk The Line",
  "Kavinsky - Nightcall"
]

const KavinskyNightcallLyrics = [
  "0",
  "",
  "30",
  "I'm giving you a night call to tell you how I feel",
  "41",
  "I want to drive you through the night, down the hills",
  "51",
  "I'm gonna tell you something you don't want to hear",
  "62",
  "I'm gonna show you where it's dark, but have no fear",
  "75",
  "There's something inside you",
  "80",
  "It's hard to explain",
  "85",
  "They're talking about you, boy",
  "91",
  "But you're still the same",
  "96",
  "There's something inside you",
  "101",
  "It's hard to explain",
  "106",
  "They're talking about you, boy",
  "112",
  "But you're still the same",
  "115",
  "I'm giving you a night call to tell you how I feel",
  "125",
  "I want to drive you through the night, down the hills",
  "136",
  "I'm gonna tell you something you don't want to hear",
  "146",
  "I'm gonna show you where it's dark, but have no fear",
  "159",
  "There's something inside you",
  "164",
  "It's hard to explain",
  "169",
  "They're talking about you, boy",
  "175",
  "But you're still the same",
  "180",
  "There's something inside you",
  "185",
  "It's hard to explain",
  "190",
  "They're talking about you boy",
  "196",
  "But you're still the same",
  "201",
  "There's something inside you",
  "206",
  "It's hard to explain",
  "211",
  "They're talking about you boy",
  "219",
  "But you're still the same",
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
      {song=="Johnny Cash - Walk The Line" && <JonnyCashWalkTheLine setSong={setSong} />}
      {song=="Kavinsky - Nightcall" && <Song setSong={setSong} lyricals={KavinskyNightcallLyrics} storageName={"kavinskyNightcallScores"} audioSrc={"./Kavinsky - Nightcall/Kavinsky - Nightcall.opus"} songEnd={230} />}
    </div>
  )
}

export default App
