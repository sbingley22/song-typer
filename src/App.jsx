import { useState } from 'react'
import './App.css'
import ManeskinBeggin from './components/ManeskinBeggin'
import JonnyCashWalkTheLine from './components/JonnyCashWalkTheLine'
import Song from './components/Song'

const songs = [
  "Maneskin - Beggin",
  "Johnny Cash - Walk The Line",
  "Kavinsky - Nightcall",
  "Prodigy - Firestarter"
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

const ProdigyFirestarterLyrics = [
  "0",
  "",
  "34",
  "I'm the trouble starter, punkin' instigator",
  "40",
  "I'm the fear addicted, a danger illustrated",
  "48",
  "I'm a firestarter, twisted firestarter",
  "54",
  "You're a firestarter, twisted firestarter",
  "60",
  "I'm a firestarter, twisted firestarter",
  "71",
  "I'm the bitch you hated, filth infatuated, yeah",
  "78",
  "I'm the pain you tasted, fell intoxicated",
  "85",
  "I'm a firestarter, twisted firestarter",
  "90",
  "You're the firestarter, twisted firestarter",
  "125",
  "I'm the self inflicted, mind detonator, yeah",
  "132",
  "I'm the one infected, twisted animator",
  "139",
  "I'm a firestarter, twisted firestarter",
  "145",
  "You're the firestarter, twisted firestarter",
  "152",
  "I'm a firestarter, twisted firestarter starter"
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
      {song=="Prodigy - Firestarter" && <Song setSong={setSong} lyricals={ProdigyFirestarterLyrics} storageName={"prodigyFirestarterScores"} audioSrc={"./Prodigy - Firestarter/The Prodigy - Firestarter.m4a"} songEnd={200} />}
    </div>
  )
}

export default App
