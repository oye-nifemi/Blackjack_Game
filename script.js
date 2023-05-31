let firstCard = 2
let secondCard = 12
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackjack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message")
let theSum = document.getElementById("theSum")
let theCards = document.getElementById("theCards")
let drawCard = ""

function startGame() {
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
            theCards.textContent = theCards.textContent + cards[index] + " , "      
      }
      theSum.textContent = "Sum: " + sum
      messageEl.textContent = message
}

function newCard() {
      drawCard = document.getElementById("message")
      drawCard.textContent = "Drawing a new card from deck!"
      let aNewCard = 64
      sum += aNewCard
      cards.push(aNewCard)
      renderGame()
}