# Frontend Mentor - Rock, Paper, Scissors solution

This is a solution to the [Rock, Paper, Scissors challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rock-paper-scissors-game-pTgwgvgH). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the game depending on their device's screen size
- Maintain the state of the score after refreshing the browser
-  Play Rock, Paper, Scissors, Lizard, Spock against the computer 

### Screenshot

<img src="https://i.ibb.co/NYHMk9Z/Screenshot-2023-06-19-at-20-44-07-Rock-paper-scissors.png" alt="Screenshot-2023-06-19-at-20-44-07-Rock-paper-scissors" border="0">

### Links

- Solution URL: [Source Code](https://github.com/MiGIGiM/rock-paper-scissors)
- Live Site URL: [Play rock paper scissors](https://rock-paper-scissors-migigim.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- Custom Data atributtes
- [React](https://reactjs.org/) - JS library
- [SCSS](https://styled-components.com/) - For styles


### What I learned

I challenge myself to try and use as few if statements for managing the results of the game and somehow I found out you can use a matrix to store every posible outcome the game is going to have. The matrix I used is down below

```js
const results = [
    ['t', 'c', 'u', 'u', 'c'],
    ['u', 't', 'c', 'c', 'u'],
    ['c', 'u', 't', 'c', 'u'],
    ['c', 'u', 'u', 't', 'c'],
    ['u', 'c', 'c', 'u', 't'],
];
```

Basically the letters represent wether the player is going to win (player is represented by 'u'), if the computer is winning (that's the 'c') or if it is a tie ('t'). One disadvantege that looking back can actually be a HUGE problem is you need to remember the order in which the row are saved for it must have the same order so the results are accurate.

## Author

- Frontend Mentor - [@MiGIGiM](https://www.frontendmentor.io/profile/MiGIGiM)
- Github - [@MiGIGiM](https://github.com/MiGIGiM)


