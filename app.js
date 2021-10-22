document.addEventListener('DOMContentLoaded', () => {
    //card options
    const cardArray = [
        {
            name: 'cats',
            img: 'images/cats.jpeg'
        },
        {
            name: 'cats',
            img: 'images/cats.jpeg'
        },
        {
            name: '2',
            img: 'images/chase.jpeg'
        },
        {
            name: '2',
            img: 'images/chase.jpeg'
        },
        {
            name: 'marshall',
            img: 'images/marshall.jpeg'
        },
        {
            name: 'marshall',
            img: 'images/marshall.jpeg'
        },
        {
            name: 'rocky',
            img: 'images/rocky.jpeg'
        },
        {
            name: 'rocky',
            img: 'images/rocky.jpeg'
        },
        {
            name: 'sky',
            img: 'images/sky.jpeg'
        },
        {
            name: 'sky',
            img: 'images/sky.jpeg'
        },
        {
            name: 'tracker',
            img: 'images/tracker.jpeg'
        },
        {
            name: 'tracker',
            img: 'images/tracker.jpeg'
        }
    ]
  
    cardArray.sort(() => 0.5 - Math.random())
  
    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []
  
    //create your board
    function createBoard() {
      for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/paw.jpeg')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
      }
    }
  
    //check for matches
    function checkForMatch() {
      const cards = document.querySelectorAll('img')
      const optionOneId = cardsChosenId[0]
      const optionTwoId = cardsChosenId[1]
      
      if(optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images/paw.jpeg')
        cards[optionTwoId].setAttribute('src', 'images/paw.jpeg')
        alert('You have clicked the same image!')
      }
      else if (cardsChosen[0] === cardsChosen[1]) {
        alert('You found a match')
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
      } else {
        cards[optionOneId].setAttribute('src', 'images/paw.jpeg')
        cards[optionTwoId].setAttribute('src', 'images/paw.jpeg')
        alert('Sorry, try again')
      }
      cardsChosen = []
      cardsChosenId = []
      resultDisplay.textContent = cardsWon.length
      if  (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = 'Congratulations! You found them all!'
      }
    }
  
    //flip your card
    function flipCard() {
      let cardId = this.getAttribute('data-id')
      cardsChosen.push(cardArray[cardId].name)
      cardsChosenId.push(cardId)
      this.setAttribute('src', cardArray[cardId].img)
      if (cardsChosen.length ===2) {
        setTimeout(checkForMatch, 500)
      }
    }
  
    createBoard()
  })