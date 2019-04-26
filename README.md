# Hooks Slider Game:

A click game like those old plastic puzzle toys, but better.

## Overview:

The application was designed to mimic the plastic slider games in which a player had to order plastic tiles in numerical order. As in those games, only tiles adjacent to the the empty space can be moved. It is an updated version of the Slider Game I previously coded and which can be found at http://pckearney25.github.io/Slider-Game/. The key differecnes is at the ES6 classes used to define state in the original game have been replaces with function components using React Hooks. Additionally, from the CSS work I did on the "Garden Scroll" project http://pckearney25.github.io/Garden-Scroll/, I figured out a way to replace the 15 images used to create the picture puzzle with a single image that is manipulated with CSS.

## As before:

1. There are two ways to play: classic numbers or as a picture puzzle (of my dog).
2. A timer is has been added. The timer stops when the tiles are back in order.
3. A game can be reset at any time.
4. Players are given messages to guide them on how to play. (These kids today.)

The program was written as a personal challenge after seeing, and being inspired by, the tic-tac-toe game tutorial on the React.js site: https://reactjs.org/tutorial/tutorial.html

## Challenges encountered while recoding the game included:

1. A new function (arrayValuesEqual) to determine game completion had to be installed. In particular, the function now only looks at the .value portion of each object in the array.

2. In order to make the timer work with Hooks, the clockRunning and intervalId variables had to be moved to state.

## Authors

The Slider Game presented here was coded by Patrick Kearney.

## Installation

Upon downloading/cloning the application from this GitHub repository, a potential user will need to install the packages outlined in the package.json file. The installation of yarn is recommended for consistent package management for recoding purposes.

## Built With:

JavaScript and React (https://reactjs.org/).

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

The Create-React-App package was used to build the core template structure for the app. More details on this package can be found in the Boiler README file.
The Yarn package was used for package management of the program.

The code for the tic-tac-toe React game was used as starting point but was modified extensively.

## License

This project is licensed under the MIT License.

## Acknowledgments

Thanks to the folks at React.js for the starter code. And thanks to the Stack Overflow community for the new arrayValuesEqual code.
