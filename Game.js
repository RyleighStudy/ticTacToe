const readline = require('node:readline')
const playerMove = readline.createInterface({input: process.stdin, output: process.stdout})
let gameGrid = []
let turnCount = 1
let player = "X"
let move = 0


function turnCheck(turn){
    return turn % 2 === 0
}

function checkWin(){
    if (gameTurn >= 10){
        console.log("It's a draw!!!")
    }
    if (gameGrid[0] == gameGrid[1] && gameGrid[0] == gameGrid[2]){
        if (gameGrid[0] != null){
            console.log(player + " wins!!!")
        }} else if (gameGrid[3] == gameGrid[4] && gameGrid[3] == gameGrid[5]){
            if (gameGrid[3] != null){
                console.log(player + " wins!!!")
            }} else if (gameGrid[6] == gameGrid[7] && gameGrid[6] == gameGrid[8]){
                if (gameGrid[6] != null){
                    console.log(player + " wins!!!")
                }} else if (gameGrid[0] == gameGrid[3] && gameGrid[0] == gameGrid[6]){
                    if (gameGrid[0] != null){
                        console.log(player + " wins!!!")
                    }} else if (gameGrid[1] == gameGrid[4] && gameGrid[1] == gameGrid[7]){
                        if (gameGrid[1] != null){
                            console.log(player + " wins!!!")
                        }} else if (gameGrid[2] == gameGrid[5] && gameGrid[2] == gameGrid[8]){
                            if (gameGrid[2] != null){
                                console.log(player + " wins!!!")
                            }} else if (gameGrid[0] == gameGrid[4] && gameGrid[0] == gameGrid[8]){
                                if (gameGrid[0] != null){
                                    console.log(player + " wins!!!")
                                }} else if (gameGrid[2] == gameGrid[4] && gameGrid[2] == gameGrid[6]){
                                    if (gameGrid[2] != null){
                                        console.log(player + " wins!!!")
                                    } else {
        gameTurn()
    }
    } else {
        gameTurn()
    }
}

function validMove(move){
    if(gameGrid[move] == null){
        gameGrid[move] = player
        gameUpdate()
    } else {
        console.log("That is not a valid move!")
    
        gameTurn()
    }
}

function gameStart(){
    turnCount = 1
    player = "X"
    gameGrid = [null, null, null, null, null, null, null, null, null]
    console.log(gameGrid[0],gameGrid[1],gameGrid[2])
    console.log(gameGrid[3],gameGrid[4],gameGrid[5])
    console.log(gameGrid[6],gameGrid[7],gameGrid[8])
    gameTurn()
}

function gameTurn(){
    if (turnCheck(turnCount)){
        player = "O"
    } else {
        player = "X"
    }
    playerMove.question(player +" what would you like to place you marker?", move => {
        validMove(move)
    })
    
}

function gameUpdate(){
    turnCount++
    console.log(gameGrid[0],gameGrid[1],gameGrid[2])
    console.log(gameGrid[3],gameGrid[4],gameGrid[5])
    console.log(gameGrid[6],gameGrid[7],gameGrid[8])
    if (turnCount >= 6){
        checkWin()
    }else{
        gameTurn()
    }
}

gameStart()
