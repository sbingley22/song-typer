/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react"

const Song = ({ setSong, lyricals, storageName, audioSrc, songEnd }) => {
  const audioRef = useRef(null)
  const [currentLine, setCurrentLine] = useState(null)
  const [mode, setMode] = useState(null)
  const [expectedCharacter, setExpectedCharacter] = useState(null)
  const [highScores, setHighScores] = useState([])
  const [score, setScore] = useState(0)
  const [characterScore, setCharacterScore] = useState(0)
  const [songOver, setSongOver] = useState(false)

  const lyrics = useRef(lyricals)

  useEffect(()=>{
    const savedScores = localStorage.getItem(storageName)
    if (savedScores) {
      setHighScores(JSON.parse(savedScores))
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const updateHighScores = (newScore) => {
    const updatedScores = [...highScores, newScore].sort((a, b) => b.score - a.score).slice(0, 5)
    setHighScores(updatedScores)
    localStorage.setItem(storageName, JSON.stringify(updatedScores))
  }

  const resetHighScores = () => {
    const newScores = []
    setHighScores()
    localStorage.setItem(storageName, JSON.stringify(newScores))
  }

  useEffect(()=>{
    if (songOver == false) return

    updateHighScores({score: score})

  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[songOver])

  const togglePlay = (m) => {
    audioRef.current.play()
    setMode(m)
  }

  const handleTimeUpdate = () => {
    const time = audioRef.current.currentTime
    if (time > songEnd) setSongOver(true)

    if (lyrics.current.length < 4) return
    const nextLine = lyrics.current[3]
    const nextLineTime = parseInt(lyrics.current[2])

    if (time >= nextLineTime) {
      setCurrentLine(nextLine)
      setExpectedCharacter(0)
      lyrics.current.shift()
      lyrics.current.shift()
    }
  }

  useEffect(() => {
    if (currentLine && mode !== null) {
      const handleKeyDown = (event) => {
        const keyPressed = event.key.toLowerCase()
        const characters = currentLine.split('')
        if (characters.length <= expectedCharacter) return
        const currentCharacter = characters[expectedCharacter].toLowerCase()
        
        if (currentCharacter == keyPressed) {
          setCharacterScore(prev => prev + 1)
          setScore(prev => prev + 1)
          
          // Skip spaces
          const nextCharacter = characters[expectedCharacter+1]
          if (nextCharacter && nextCharacter == " ") setExpectedCharacter(prev => prev + 2)
          else setExpectedCharacter(prev => prev + 1)

        } else setScore(prev => prev - 1)
      }

      window.addEventListener("keydown", handleKeyDown)
      
      return () => {
        window.removeEventListener("keydown", handleKeyDown)
      };
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentLine, mode, expectedCharacter])

  if (songOver) {
    return (
      <div>
        <h1>Your score:</h1>
        <h4>Score: {score}</h4>
        <h4>Chars: {characterScore}</h4>
        <h4>Accuracy: {Math.round((score/characterScore) * 100)} %</h4>

        <h1>High scores</h1>
        <ul>
          {highScores.map((score, index) => (
            <li key={index}>{score.score}</li>
          ))}
        </ul>

        <button onClick={()=>setSong("")}>RETURN</button>
        <button onClick={()=>resetHighScores()} style={{display:"block", margin: "50px"}}>RESET HIGH SCORES</button>
      </div>
    )
  }


  return (
    <div>
      <audio ref={audioRef} onTimeUpdate={handleTimeUpdate} controls={false}>
        <source src={audioSrc} type="audio/mp4" />
        Your browser does not support the audio tag.
      </audio>

      { mode ? 
      <div>
        <div className="score">
          <h4>Score: {score}</h4>
          <h4>Chars: {characterScore}</h4>
        </div>

        {currentLine && currentLine.split('').map( (char, index) => (
          index < expectedCharacter ?
          <h2 key={char+index} className="hit char-inline">{char}</h2>
          :
          <h2 key={char+index} className="char-inline">{char}</h2>
        ))}
      </div>
      :
      <div>
        <button onClick={()=>togglePlay(1)}>Play</button>
        <h1>High scores</h1>
        <ul>
          {highScores.map((score, index) => (
            <li key={index}>{score.score}</li>
          ))}
        </ul>
      </div> }

    </div>
  )
}

export default Song
