/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react"

const ManeskinBeggin = ({ setSong }) => {
  const audioRef = useRef(null)
  const [currentLine, setCurrentLine] = useState(null)
  const [mode, setMode] = useState(null)
  const [expectedCharacter, setExpectedCharacter] = useState(null)
  const [highScores, setHighScores] = useState([])
  const [score, setScore] = useState(0)
  const [wordScore, setWordScore] = useState(0)
  const [characterScore, setCharacterScore] = useState(0)
  const [songOver, setSongOver] = useState(false)

  const lyrics = useRef([
    {
      line: "",
      time: 0,
      easy: [],
      hard: [],
      expert: []
    },
    {
      line: "Put your lovin' hand out baby",
      time: 1,
      easy: [3, 5],
      normal: [0,1,2,3,4,5],
      hard: [0, 1, 2, 3, 4, 5],
      expert: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
    },
    {
      line: "Cause I'm beggin'",
      time: 12,
      easy: [0, 2],
      normal: [0,1,2],
      hard: [0, 1, 2],
      expert: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
    },
    {
      line: "I'm beggin' beggin' you",
      time: 25,
      easy: [1, 3],
      normal: [1,2],
      hard: [1, 2, 3],
      expert: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
    },
    {
      line: "So put your loving hand out baby",
      time: 29,
      easy: [1, 4],
      normal: [0,1,2],
      hard: [1, 2, 4, 5],
      expert: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
    },
    {
      line: "I'm beggin' beggin' you",
      time: 33,
      easy: [1, 3],
      normal: [1,2],
      hard: [1, 2, 3],
      expert: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
    },
    {
      line: "So put your loving hand out darlin'",
      time: 36,
      easy: [1],
      normal: [1,2],
      hard: [1, 2, 4, 5],
      expert: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
    },
    {
      line: "Ridin' high when I was king",
      time: 38,
      easy: [1, 5],
      normal: [0,1],
      hard: [0, 1, 5],
      expert: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
    },
    {
      line: "I played it hard and fast 'cause I had everything",
      time: 43,
      easy: [1, 5],
      normal: [0,1,2],
      hard: [0, 1, 2, 8, 9],
      expert: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
    },
    {
      line: "I walked away but you warned me then",
      time: 47,
      easy: [1],
      normal: [0,1],
      hard: [1, 2, 7],
      expert: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
    },
    {
      line: "But easy come and easy go and it would end",
      time: 50,
      easy: [1, 2],
      normal: [0, 1,2],
      hard: [1, 2, 4, 5, 8, 9],
      expert: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
    },
    {
      line: "So, any time I bleed you let me go",
      time: 53,
      easy: [4],
      normal: [1,2],
      hard: [0, 4, 8],
      expert: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
    },
    {
      line: "Yeah, any time I feed you, get me? No?",
      time: 55,
      easy: [4],
      normal: [3,4],
      hard: [0,4],
      expert: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
    },
    {
      line: "Any time I seek you let me know",
      time: 56,
      easy: [3],
      normal: [3],
      hard: [0,3],
      expert: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
    },
    {
      line: "But I plan and see just let me go",
      time: 58,
      easy: [2],
      normal: [0,1],
      hard: [2, 4],
      expert: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
    },
    {
      line: "I'm on my knees when I'm beggin'",
      time: 60,
      easy: [3],
      normal: [0,1,2],
      hard: [3, 6],
      expert: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
    },
    {
      line: "'Cause I don't wanna lose you",
      time: 62,
      easy: [0],
      normal: [0,1,2],
      hard: [0, 3, 4],
      expert: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
    },
    {
      line: "Hey yeah, ratatata",
      time: 65,
      easy: [0, 1],
      normal: [2],
      hard: [1,2],
      expert: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
    },
    {
      line: "Cause I'm beggin' beggin' you",
      time: 68,
      easy: [0, 2],
      normal: [2,3],
      hard: [0, 2, 3],
      expert: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
    },
    {
      line: "And put your loving hand out baby",
      time: 71,
      easy: [1, 4],
      normal: [1,2,3],
      hard: [1, 2, 3, 4],
      expert: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
    },
    {
      line: "I'm beggin' beggin' you",
      time: 76,
      easy: [1, 3],
      normal: [1,2],
      hard: [1, 2, 3],
      expert: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
    },
    {
      line: "And put your loving hand out darlin'",
      time: 79,
      easy: [1, 4],
      normal: [1,2],
      hard: [1, 2, 4, 5],
      expert: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
    },
    {
      line: "I need you to understand",
      time: 82,
      easy: [0,2],
      normal: [0,1,2],
      hard: [0,1,4],
      expert: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
    },
    {
      line: "Tried so hard to be your man",
      time: 85,
      easy: [0,2],
      normal: [0,1,2],
      hard: [0,1,2,6],
      expert: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
    },
    {
      line: "The kind of man you want in the end",
      time: 89,
      easy: [0],
      normal: [0,1],
      hard: [0, 1],
      expert: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
    },
    {
      line: "Only then can I begin to live again",
      time: 91,
      easy: [0,7,8],
      normal: [0,1,2,3],
      hard: [0,1,2,7,8],
      expert: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
    },
    {
      line: "An empty shell, I used to be",
      time: 98,
      easy: [0,2],
      normal: [0,1],
      hard: [0,1,2],
      expert: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
    },
    {
      line: "The shadow of my life was hanging over me",
      time: 101,
      easy: [0,4],
      normal: [0,1],
      hard: [0,1,2],
      expert: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
    },
    {
      line: "A broken man that I don't know",
      time: 103,
      easy: [1,2],
      normal: [0,1,2],
      hard: [0,1,2,3],
      expert: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
    },
    {
      line: "Won't even stand the devil's chance to win my soul",
      time: 107,
      easy: [0,1],
      normal: [0,1],
      hard: [0,1,2,3],
      expert: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
    },
    {
      line: "What we doing? What we chasing?",
      time: 109.5,
      easy: [0],
      normal: [0,1],
      hard: [0,1],
      expert: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
    },
    {
      line: "Why the bottom? Why the basement?",
      time: 111,
      easy: [0],
      normal: [0,1],
      hard: [0,1,2],
      expert: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
    },
    {
      line: "Why we got good shit, don't embrace it?",
      time: 113,
      easy: [0, 1],
      normal: [0,1],
      hard: [0, 1, 2],
      expert: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
    },
    {
      line: "Why the feel for the need to replace me?",
      time: 115,
      easy: [0],
      normal: [0,1],
      hard: [0,1,2],
      expert: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
    },
    {
      line: "You're the wrong way track from the good",
      time: 117,
      easy: [0],
      normal: [0],
      hard: [0, 1],
      expert: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
    },
    {
      line: "I want to paint a picture telling where we could be at",
      time: 119,
      easy: [1],
      normal: [1,2],
      hard: [0,1,2],
      expert: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
    },
    {
      line: "Like a heart in the best way should",
      time: 121,
      easy: [0],
      normal: [1,2],
      hard: [0,1,2],
      expert: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
    },
    {
      line: "You can give it away, you had, and you took the pay",
      time: 123,
      easy: [0, 1],
      normal: [2,3],
      hard: [0,1,2],
      expert: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
    },
    {
      line: "But I keep walking on, keep opening doors",
      time: 125,
      easy: [0],
      normal: [1,2],
      hard: [0, 1, 2],
      expert: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
    },
    {
      line: "Keep hoping for, that the door is yours",
      time: 127,
      easy: [0],
      normal: [0,1],
      hard: [0,1,2],
      expert: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
    },
    {
      line: "Keep oh-so home",
      time: 129,
      easy: [0],
      normal: [0],
      hard: [0],
      expert: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
    },
    {
      line: "Cause I don't wanna live in a broken home",
      time: 130,
      easy: [0],
      normal: [0,1],
      hard: [0,1,2],
      expert: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
    },
    {
      line: "Girl, I'm beggin",
      time: 132,
      easy: [0],
      normal: [0],
      hard: [0],
      expert: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
    },
    {
      line: "Mmm, ye-e-e-ah",
      time: 133,
      easy: [0],
      normal: [0],
      hard: [0],
      expert: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
    },
    {
      line: "I'm beggin', beggin' you",
      time: 134,
      easy: [0],
      normal: [1,2],
      hard: [0,1,2],
      expert: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
    },
    {
      line: "So, put your loving hand out, baby",
      time: 137,
      easy: [0],
      normal: [0,1,2],
      hard: [0,1,2,3],
      expert: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
    },
    {
      line: "I'm beggin', beggin' you",
      time: 141,
      easy: [1],
      normal: [1,2],
      hard: [0,1,2],
      expert: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
    },
    {
      line: "So, put your loving hand out, darling",
      time: 145,
      easy: [4],
      normal: [0,1,2],
      hard: [1,2,3],
      expert: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
    },
    {
      line: "I'm fighting hard to hold my own",
      time: 149,
      easy: [2],
      normal: [1],
      hard: [1,2],
      expert: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
    },
    {
      line: "Just can't make it all alone",
      time: 151,
      easy: [0],
      normal: [1,2],
      hard: [1,2,3],
      expert: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
    },
    {
      line: "I'm holding on, I can't fall back",
      time: 155,
      easy: [1],
      normal: [1,2],
      hard: [0,1,2],
      expert: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
    },
    {
      line: "I'm just a calm 'bout to fade to black",
      time: 159,
      easy: [3],
      normal: [3,4],
      hard: [3,4,5],
      expert: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
    },
    {
      line: "I'm beggin', beggin' you",
      time: 163,
      easy: [1],
      normal: [1,2],
      hard: [0,1,2],
      expert: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
    },
    {
      line: "Put your loving hand out, baby",
      time: 167,
      easy: [2],
      normal: [1,2],
      hard: [0,1,2],
      expert: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
    },
    {
      line: "I'm beggin', beggin' you",
      time: 171,
      easy: [1],
      normal: [1,2],
      hard: [0,1,2],
      expert: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
    },
    {
      line: "So, put your loving hand out, darling",
      time: 173,
      easy: [3],
      normal: [2,3],
      hard: [1,2,3],
      expert: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
    },
    {
      line: "I'm beggin', beggin' you",
      time: 177,
      easy: [1],
      normal: [1,2],
      hard: [0,1,2],
      expert: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
    },
    {
      line: "Put your loving hand out, baby",
      time: 181,
      easy: [2],
      normal: [1,2],
      hard: [0,1,2],
      expert: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
    },
    {
      line: "I'm beggin', beggin' you",
      time: 185,
      easy: [1],
      normal: [1,2],
      hard: [0,1,2],
      expert: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
    },
    {
      line: "So, put your loving hand out, darling",
      time: 189,
      easy: [3],
      normal: [1,2],
      hard: [1,2,3],
      expert: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
    },
    {
      line: "I'm beggin', beggin' you",
      time: 191,
      easy: [1],
      normal: [1,2],
      hard: [0,1,2],
      expert: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
    },
    {
      line: "Put your loving hand out, baby",
      time: 195,
      easy: [2],
      normal: [1,2],
      hard: [0,1,2],
      expert: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
    },
    {
      line: "I'm beggin', beggin' you",
      time: 199,
      easy: [1],
      normal: [1,2],
      hard: [0,1,2],
      expert: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
    },
    {
      line: "So, put your loving hand out",
      time: 202,
      easy: [3,4],
      normal: [0,1,2,3,4,5],
      hard: [0,1,2,3,4,5],
      expert: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
    },
  ])

  useEffect(()=>{
    const savedScores = localStorage.getItem('ManeskinBegginScores')
    if (savedScores) {
      setHighScores(JSON.parse(savedScores))
    }
  }, [])

  const updateHighScores = (newScore) => {
    const updatedScores = [...highScores, newScore].sort((a, b) => b.score - a.score).slice(0, 5)
    setHighScores(updatedScores)
    localStorage.setItem('ManeskinBegginScores', JSON.stringify(updatedScores))
  }

  const resetHighScores = () => {
    const newScores = []
    setHighScores()
    localStorage.setItem('ManeskinBegginScores', JSON.stringify(newScores))
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
    if (time > 209) setSongOver(true)

    if (lyrics.current.length < 2) return
    const nextLine = lyrics.current[1]

    if (time >= nextLine.time) {
      setCurrentLine(nextLine)
      setExpectedCharacter([0,0])
      lyrics.current.shift()
    }
  }

  const getWords = () => {
    let words = []
    if (currentLine) {
      if (mode == 2) words = currentLine.easy
      else if (mode == 4) words = currentLine.normal
      else if (mode == 6) words = currentLine.hard
      else if (mode == 8) words = currentLine.expert
    }
    return words
  }

  useEffect(() => {
    if (currentLine && mode !== null) {
      const handleKeyDown = (event) => {
        const keyPressed = event.key.toLowerCase()
        const words = getWords()
        const word = words[expectedCharacter[0]]
        const expectedWord = currentLine.line.split(' ')[word]
        
        if (expectedWord) {
          const characters = expectedWord.split("")
          if (characters[expectedCharacter[1]].toLowerCase() == keyPressed) {
            setCharacterScore(prev => prev + 1)
            setScore(prev => prev + 1)
            if (characters.length > expectedCharacter[1] + 1) {
              const tempChar = [...expectedCharacter]
              tempChar[1] += 1
              setExpectedCharacter(tempChar)
            } else {
              const tempChar = [...expectedCharacter]
              tempChar[0] += 1
              tempChar[1] = 0
              setExpectedCharacter(tempChar)
              setWordScore(prev => prev + 1)
            }
          } else setScore(prev => prev - 1)
        }
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
        <h4>Words: {wordScore}</h4>
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

  const words = getWords()

  return (
    <div>
      <audio ref={audioRef} onTimeUpdate={handleTimeUpdate} controls={false}>
        <source src=".\Maneskin - Beggin\Maneskin - Beggin.m4a" type="audio/mp4" />
        Your browser does not support the audio tag.
      </audio>

      { mode ? 
      <div>
        <div className="score">
          <h4>Score: {score}</h4>
          <h4>Words: {wordScore}</h4>
          <h4>Chars: {characterScore}</h4>
        </div>

        {currentLine && currentLine.line.split(' ').map((word, index) => (
          words.includes(index) ?
            words[expectedCharacter[0]] == index ?
            <div key={word+index+"hitting"}>
              <h2 className="hit char-inline">{word.substring(0, expectedCharacter[1])}</h2>
              <h2 className="char-inline">{word.substring(expectedCharacter[1])}</h2>
            </div>
            : words[expectedCharacter[0]] <= index ?
            <h2 key={word+index+"prev"}>{word}</h2>
            :
            <h2 className="hit" key={word+index+"next"}>{word}</h2>
          :
          <h3 key={word+index+"done"}>{word}</h3>
          //<></>
        ))}
      </div>
      :
      <div>
        <button onClick={()=>togglePlay(2)}>Easy</button>
        <button onClick={()=>togglePlay(4)}>Normal</button>
        <button onClick={()=>togglePlay(6)}>Hard</button>
        <button onClick={()=>togglePlay(8)}>Expert</button>

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

export default ManeskinBeggin;
