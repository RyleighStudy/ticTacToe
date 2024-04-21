const readline = require('node:readline')
const playerMove = readline.createInterface({input: process.stdin, output: process.stdout})
let gameGrid = []
let turnCount = 1
let player = "X"
let col
let row

function turnCheck(turn){
    return turn % 2 === 0
}

function validMove(move){

}

function gameStart(){
    turnCount = 1
    player = "X"
    gameGrid = [[null,null,null],[null,null,null],[null,null,null]]
    gameGrid.forEach(v=>console.log(...v))
    gameTurn()
}

function gameTurn(){
    if (turnCheck(turnCount)){
        player = "O"
    } else {
        player = "X"
    }
    playerMove.question(player +" where would you like to place you marker?", move => {
       
        playerMove.close()
      })
}

function gameUpdate(){
    turnCount++
    gameGrid.forEach(v=>console.log(...v))
}

gameStart()
