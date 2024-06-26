//declear modules and varibles
const readline = require('node:readline')
const process = require('process')
const playerMove = readline.createInterface({input: process.stdin, output: process.stdout})
const gameReset = readline.createInterface({input: process.stdin, output: process.stdout})
const gameGrid = []
let turnCount = 1
let player = "X"



//starts the game
function gameStart(){
    turnCount = 1
    gameGrid.length = 0
    gameGrid.push([null,null,null],[null,null,null],[null,null,null])
    gameGrid.forEach(v=>console.log(...v))
    gameTurn()
}

//gets the user imput each turn
function gameTurn(){
    if (turnCount % 2 === 0){
        player = "O"
    } else {
        player = "X"
    }
    playerMove.question(player +" where would you like to place you marker? (1-9)", move => {
        validMove(move)
    })
    
} 

//checks if move is valid
function validMove(move){
    if (move > 0 && move < 10){
        move--
        if(!gameGrid[Math.floor(move/3)][move%3]){
            gameGrid[Math.floor(move/3)][move%3] = player
            gameUpdate()
        } else {
            console.log("That is not a valid move! That tile is already taken")   
            gameTurn()
        }
    } else{
        console.log("That is not a valid move! Valid moves are numbers 1-9")   
        gameTurn()
    }
}

//updates gamegrid
function gameUpdate(){
    turnCount++
    gameGrid.forEach(v=>console.log(...v))
    if (turnCount >= 6){
        checkWin()
    }else{
        gameTurn()
    }
}

//checks if game is over
function checkWin(){
    if (gameGrid[0][0] == gameGrid[0][1] && gameGrid[0][0] == gameGrid[0][2] && gameGrid[0][0] != null){
        console.log(player + " wins!!!")
    } else if (gameGrid[1][0] == gameGrid[1][1] && gameGrid[1][0] == gameGrid[1][2] && gameGrid[1][0] != null){
        console.log(player + " wins!!!")
    } else if (gameGrid[2][0] == gameGrid[2][1] && gameGrid[2][0] == gameGrid[2][2] && gameGrid[2][0] != null){
        console.log(player + " wins!!!")
    } else if (gameGrid[0][0] == gameGrid[1][0] && gameGrid[0][0] == gameGrid[2][0] && gameGrid[0][0] != null){
        console.log(player + " wins!!!")
    } else if (gameGrid[0][1] == gameGrid[1][1] && gameGrid[0][1] == gameGrid[2][1] && gameGrid[0][1] != null){
        console.log(player + " wins!!!")
    } else if (gameGrid[0][2] == gameGrid[1][2] && gameGrid[0][2] == gameGrid[2][2] && gameGrid[0][2] != null){
        console.log(player + " wins!!!")
    } else if (gameGrid[0][0] == gameGrid[1][1] && gameGrid[0][0] == gameGrid[2][2] && gameGrid[0][0] != null){
        console.log(player + " wins!!!")
    } else if (gameGrid[0][2] == gameGrid[1][1] && gameGrid[0][2] == gameGrid[2][0] && gameGrid[0][2] != null){
        console.log(player + " wins!!!")
    } else if (turnCount >= 10){
        console.log("It's a draw!!!")
    } else {
        gameTurn()
    }
    gameEnd()
}

//allows the game to reset or end
function gameEnd(){
    gameReset.question("Would you like to play again? Y/N", answer => {
        if(answer == "Y" || answer == "y"){
            gameStart()
        } else if(answer == "N" || answer == "n"){
            process.exit()
        } else{
            console.log("Please enter Y or N!")
            gameEnd()
        }
    })
}

gameStart()

//todo: make gameGrid 2d array