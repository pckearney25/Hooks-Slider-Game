import React from "react";
import Header from "./components/Header";
import Board from "./components/Board";
import Radio from "./components/Radio";
import GameButton from "./components/GameButton";
import Footer from "./components/Footer";
import Dahlia from "./images/dahlia.jpg";
import { shuffleArray, arraysEqual, timeConverter } from "./utils";
import "./Game.css";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: [
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
      ],
      boardSquares: [],
      move: 0,
      time: 0,
      gameComplete: false,
      gameMode: "Numbers"
    };
  }
  message = [
    "Order the squares as shown. Click button to start game.",
    "Click an ajacent square to move into the empty position.",
    "Game Complete! Click button to play again."
  ];
  button = [
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

  intervalID;
  clockRunning = false;

  startTimer = () => {
    if (!this.clockRunning) {
      this.intervalId = setInterval(this.count, 1000);
      this.clockRunning = true;
    }
  };

  stopTimer = () => {
    clearInterval(this.intervalId);
    this.clockRunning = false;
  };

  resetTimer = () => {
    this.setState({ time: 0 });
  };

  count = () => {
    let time = this.state.time;
    time++;
    this.setState({ time: time });
  };

  handleClick1() {
    let move = this.state.move;
    if (move === 0) {
      const boardSquares = shuffleArray(this.state.squares);
      this.setState({
        boardSquares: boardSquares,
        move: move + 1,
        gameComplete: false
      });
      this.startTimer();
    } else {
      this.setState({
        move: 0,
        time: 0
      });
      this.stopTimer();
      this.resetTimer();
    }
  }

  handleClick2(i) {
    let boardSquares = this.state.boardSquares;
    let lastSquare = boardSquares.length;
    const checkArray = boardSquares.map(x => x.value);
    const move = this.state.move;
    const first = i;
    const second = checkArray.indexOf(lastSquare);
    const check = JSON.stringify([first, second]);
    //would like to generalize this as well eventually.
    //for a 4X4 array
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
      const newSquares = boardSquares.slice();
      newSquares[first] = boardSquares[second];
      newSquares[second] = boardSquares[first];

      let gameComplete = arraysEqual(newSquares, this.state.squares);
      if (gameComplete) {
        this.setState({
          gameComplete: gameComplete
        });
        this.stopTimer();
      }
      this.setState({
        move: move + 1,
        boardSquares: newSquares
      });
    }
  }

  handleInputChange = event => {
    // Getting the value of the input which triggered the change
    const { value } = event.target;

    // Updating the input's state
    this.setState({
      gameMode: value
    });
  };

  render() {
    let move = this.state.move;
    let gameComplete = this.state.gameComplete;
    let message;
    let button;
    const convertedTime = timeConverter(this.state.time);

    if (move === 0) {
      button = this.button[0];
      message = this.message[0];
    }

    if (move !== 0 && !gameComplete) {
      button = this.button[1];
      message = this.message[1];
    }

    if (move !== 0 && gameComplete) {
      button = this.button[2];
      message = this.message[2];
    }

    const boardSquares =
      move > 0 ? this.state.boardSquares : this.state.squares;

    return (
      <div className="Game">
        <div className="content">
          <Header />
          <div className="game-container">
            <div className="game-box">
              <Board
                squares={boardSquares}
                gameMode={this.state.gameMode}
                onClick={i => this.handleClick2(i)}
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
                  this.handleClick1();
                }}
                message={button.message}
              />
              <Radio
                gameMode={this.state.gameMode}
                onChange={this.handleInputChange}
              />
            </div>
          </div>
        </div>
        <Footer className="footer" />
      </div>
    );
  }
}

export default Game;
