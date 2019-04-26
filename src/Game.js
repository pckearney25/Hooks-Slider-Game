import React, { useState } from "react";
import Header from "./components/Header";
import Board from "./components/Board";
import Radio from "./components/Radio";
import GameButton from "./components/GameButton";
import Footer from "./components/Footer";
import Dahlia from "./images/dahlia.jpg";
import { shuffleArray, arrayValuesEqual, timeConverter } from "./utils";
import "./Game.css";

const Game = () => {
  //Game constants
  const squares = [
    {
      value: 1,
      style1: { background: "white" },
      style2: {
        backgroundImage: `url(${Dahlia})`,
        color: "#00000000",
        backgroundSize: "400% 400%",
        backgroundPosition: "400% 400%"
      }
    },
    {
      value: 2,
      style1: { background: "white" },
      style2: {
        backgroundImage: `url(${Dahlia})`,
        color: "#00000000",
        backgroundSize: "400% 400%",
        backgroundPosition: "300% 400%"
      }
    },
    {
      value: 3,
      style1: { background: "white" },
      style2: {
        backgroundImage: `url(${Dahlia})`,
        color: "#00000000",
        backgroundSize: "400% 400%",
        backgroundPosition: "200% 400%"
      }
    },
    {
      value: 4,
      style1: { background: "white" },
      style2: {
        backgroundImage: `url(${Dahlia})`,
        color: "#00000000",
        backgroundSize: "400% 400%",
        backgroundPosition: "100% 400%"
      }
    },
    {
      value: 5,
      style1: { background: "white" },
      style2: {
        backgroundImage: `url(${Dahlia})`,
        color: "#00000000",
        backgroundSize: "400% 400%",
        backgroundPosition: "400% 300%"
      }
    },
    {
      value: 6,
      style1: { background: "white" },
      style2: {
        backgroundImage: `url(${Dahlia})`,
        color: "#00000000",
        backgroundSize: "400% 400%",
        backgroundPosition: "300% 300%"
      }
    },
    {
      value: 7,
      style1: { background: "white" },
      style2: {
        backgroundImage: `url(${Dahlia})`,
        color: "#00000000",
        backgroundSize: "400% 400%",
        backgroundPosition: "200% 300%"
      }
    },
    {
      value: 8,
      style1: { background: "white" },
      style2: {
        backgroundImage: `url(${Dahlia})`,
        color: "#00000000",
        backgroundSize: "400% 400%",
        backgroundPosition: "100% 300%"
      }
    },
    {
      value: 9,
      style1: { background: "white" },
      style2: {
        backgroundImage: `url(${Dahlia})`,
        color: "#00000000",
        backgroundSize: "400% 400%",
        backgroundPosition: "400% 200%"
      }
    },
    {
      value: 10,
      style1: { background: "white" },
      style2: {
        backgroundImage: `url(${Dahlia})`,
        color: "#00000000",
        backgroundSize: "400% 400%",
        backgroundPosition: "300% 200%"
      }
    },
    {
      value: 11,
      style1: { background: "white" },
      style2: {
        backgroundImage: `url(${Dahlia})`,
        color: "#00000000",
        backgroundSize: "400% 400%",
        backgroundPosition: "200% 200%"
      }
    },
    {
      value: 12,
      style1: { background: "white" },
      style2: {
        backgroundImage: `url(${Dahlia})`,
        color: "#00000000",
        backgroundSize: "400% 400%",
        backgroundPosition: "100% 200%"
      }
    },
    {
      value: 13,
      style1: { background: "white" },
      style2: {
        backgroundImage: `url(${Dahlia})`,
        color: "#00000000",
        backgroundSize: "400% 400%",
        backgroundPosition: "400% 100%"
      }
    },
    {
      value: 14,
      style1: { background: "white" },
      style2: {
        backgroundImage: `url(${Dahlia})`,
        color: "#00000000",
        backgroundSize: "400% 400%",
        backgroundPosition: "300% 100%"
      }
    },
    {
      value: 15,
      style1: { background: "white" },
      style2: {
        backgroundImage: `url(${Dahlia})`,
        color: "#00000000",
        backgroundSize: "400% 400%",
        backgroundPosition: "200% 100%"
      }
    },
    {
      value: 16,
      style1: { background: "black" },
      style2: { background: "black" }
    }
  ];
  const messageArray = [
    "Order the squares as shown. Click button to start game.",
    "Click an ajacent square to move into the empty position.",
    "Game Complete! Click button to play again."
  ];
  const buttonArray = [
    {
      message: "Start Game",
      styles: { color: "#FFC013", background: "#2c0b9e" }
    },
    {
      message: "Reset Game",
      styles: { color: "#1A065F", background: "#FFBB00" }
    },
    {
      message: "Play Again",
      styles: { color: "#FFC013", background: "#2c0b9e" }
    }
  ];

  // Varibles to set game message and button styles/content in the game box.
  let message;
  let button;

  //Game Timer Variables

  //State Variables
  let [boardSquaresArr, setBoardSquaresArr] = useState([]);
  let [move, setMove] = useState(0);
  let [time, setTime] = useState(0);
  let [gameComplete, setGameComplete] = useState(false);
  let [gameMode, setGameMode] = useState("Numbers");
  let [clockRunning, setClockRunning] = useState(false);
  let [intervalId, setIntervalId] = useState();

  //Game Functions

  const startTimer = () => {
    if (!clockRunning) {
      setIntervalId((intervalId = setInterval(count, 1000)));
      setClockRunning((clockRunning = true));
    }
  };

  const stopTimer = () => {
    setIntervalId(clearInterval(intervalId));
    setTime((time = 0));
    setClockRunning((clockRunning = false));
  };

  const count = () => {
    let timeCount = time;
    timeCount++;
    setTime((time = timeCount));
  };

  const resetTimer = () => {
    setTime((time = 0));
  };

  const handleClick1 = () => {
    //let move = this.state.move;
    if (move === 0) {
      const boardSquares = shuffleArray(squares);
      setBoardSquaresArr((boardSquaresArr = boardSquares));
      setMove(move + 1);
      setGameComplete(false);
      startTimer();
    } else {
      setMove((move = 0));
      setTime((time = 0));
      stopTimer();
      resetTimer();
    }
  };

  const handleClick2 = i => {
    let boardSquares = boardSquaresArr.slice();
    let newSquares = boardSquaresArr.slice();
    //lastSquare position in the array holds the position value of the "blank" square
    let lastSquare = boardSquares.length;
    const checkArray = boardSquares.map(x => x.value);
    const first = i;
    const second = checkArray.indexOf(lastSquare);
    const check = JSON.stringify([first, second]);
    //would like to generalize this as well eventually.
    //for a 4X4 array these are the allowed square swaps
    const adjacentArray = [
      "[0,1]",
      "[0,4]",
      "[1,0]",
      "[1,2]",
      "[1,5]",
      "[2,1]",
      "[2,3]",
      "[2,6]",
      "[3,2]",
      "[3,7]",
      "[4,0]",
      "[4,5]",
      "[4,8]",
      "[4,7]",
      "[5,1]",
      "[5,4]",
      "[5,6]",
      "[5,9]",
      "[6,2]",
      "[6,5]",
      "[6,7]",
      "[6,10]",
      "[7,3]",
      "[7,6]",
      "[7,11]",
      "[8,4]",
      "[8,9]",
      "[8,12]",
      "[9,5]",
      "[9,8]",
      "[9,10]",
      "[9,13]",
      "[10,6]",
      "[10,9]",
      "[10,11]",
      "[10,14]",
      "[11,7]",
      "[11,10]",
      "[11,15]",
      "[12,8]",
      "[12,13]",
      "[13,9]",
      "[13,12]",
      "[13,14]",
      "[14,10]",
      "[14,13]",
      "[14,15]",
      "[15,11]",
      "[15,14]"
    ];

    if (move !== 0 && adjacentArray.indexOf(check) !== -1) {
      newSquares[first] = boardSquares[second];
      newSquares[second] = boardSquares[first];
      if (arrayValuesEqual(newSquares, squares)) {
        setGameComplete((gameComplete = true));
        stopTimer();
      }
      setMove(move + 1);
      setBoardSquaresArr((boardSquaresArr = newSquares));
    }
  };

  const handleInputChange = event => {
    // Getting the value of the input which triggered the change
    const { value } = event.target;
    setGameMode((gameMode = value));
  };

  //SETTING THE GAME FOR DISPLAY

  //This formats the time information to be displayed.
  const convertedTime = timeConverter(time);

  if (move === 0) {
    button = buttonArray[0];
    message = messageArray[0];
  }

  if (move !== 0 && !gameComplete) {
    button = buttonArray[1];
    message = messageArray[1];
  }

  if (move !== 0 && gameComplete) {
    button = buttonArray[2];
    message = messageArray[2];
  }

  //this sets the array information that is passed into the game.
  //New game gets squares, a game in progress boardSquaresArr
  const gameArray = move > 0 ? boardSquaresArr : squares;

  return (
    <div className="Game">
      <div className="content">
        <Header />

        <div className="game-container">
          <div className="game-box">
            <Board
              squares={gameArray}
              gameMode={gameMode}
              onClick={i => handleClick2(i)}
            />
          </div>

          <div className="game-box">
            <div id="message-div">{message}</div>
            <div id="timer-div">
              <span id="timer">{`Timer: `}</span>
              <span id="converted-time">{convertedTime}</span>
              <span>{` (mm:ss)`}</span>
            </div>
            <GameButton
              style={button.styles}
              onClick={() => {
                handleClick1();
              }}
              message={button.message}
            />
            <Radio gameMode={gameMode} onChange={handleInputChange} />
          </div>
        </div>
      </div>
      <Footer className="footer" />
    </div>
  );
};

export default Game;
