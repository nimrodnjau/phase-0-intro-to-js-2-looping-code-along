let namesArray = ["Tracy", "George", "Peter"]
let event = "surprise"

function writeCards (namesArray, event) {
    let cardMessage = []
    for ( let i = 0; i < namesArray.length; i++ ) {
      cardMessage.push( `Thank you, ${namesArray[i]}, for the wonderful ${event} gift!`)
    }
    return cardMessage
  }
    console.log(writeCards(namesArray, event))



function countDown() {
    let startingNumber = 10
    while (startingNumber <= 10 && startingNumber > 0) {
        console.log(startingNumber)
        startingNumber -= 1
    }
    console.log(startingNumber)
}





