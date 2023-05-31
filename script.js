let cards = []
let sum = 0
let hasBlackjack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message")
let theSum = document.getElementById("theSum")
let theCards = document.getElementById("theCards")
let drawCard = ""

let player = {
      name: "Nifemi",
      chips: 450
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function startGame() {
      isAlive = true
      let firstCard = getRandomCard()
      let secondCard = getRandomCard()
      cards = [firstCard, secondCard]
      sum = firstCard + secondCard
      renderGame()
}

function renderGame() {
      if (sum < 21) {
            message = "Do you want to draw a new card?"
      } else if (sum === 21) {
            message = "You've got Blackjack."
            hasBlackjack = true
      } else {
            message = "You are out of the game."
            isAlive = false
      }
      theCards.textContent = "Cards: "
      for (let index = 0; index < cards.length; index++) {
            theCards.textContent += cards[index] + " "      
      }
      theSum.textContent = "Sum: " + sum
      messageEl.textContent = message
}

function newCard() {
      if (isAlive === true && hasBlackjack === false) {
            drawCard = document.getElementById("message")
            drawCard.textContent = "Drawing a new card from deck!"
            let aNewCard = getRandomCard()
            sum += aNewCard
            cards.push(aNewCard)
            renderGame()
      }
}

function getRandomCard() {
      let randomNumber = Math.floor(Math.random() * 13) + 1
      if (randomNumber > 10) {
            return 10
      } else if (randomNumber === 1) {
            return 11
      }
      else {
            return randomNumber
      }
}