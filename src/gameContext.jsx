import { Children, createContext, useContext, useState } from "react";
/**State
 * Cards, flippedCards, matchedCards, attempts, gameStatus, disabled
 * array for flipped?
 * matched cards array to check and store matches
 * we want to track number of attempts a user makes
 * disabled state that we have at our disposal whenever needed
 * gameStatus because the status of game might change, it is either ongoing, won, or there is an option to reset?
 *
 */

export default function GameProvider({ children }) {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  let attempts = 0;
  //const [attempts, setAttempts] = useState(0);
  //const [gameStatus, setGameStatus] = useState("gameStillGoing");
  //const [disabled, setDisabled] = useState(false);
  //const [isFlipped, setIsFlipped] = useState(false);

  /**Modify State
   *  incrementAttempts - we want the count to go up by 1 every time user makes a move
   * generateCards should generate initial set of cards
   * checkforMatch checks flipped array to see if user got a match
   * resetGame gives us an option to get a new randomized set of cards\
   * handleAttempt handles the nuance
   */
  function incrementAttempts(n) {
    attempts++;
  }

  function generateCards() {
    console.log("cards generated");
    const newCards = [
      "x",
      "o",
      "x",
      "o",
      "y",
      "z",
      "y",
      "z",
      "a",
      "a",
      "b",
      "b",
    ];
    setCards(newCards);
    console.log(newCards);
  }

  /**checkForMatch
   * to check for a match we have to loop thru the flipped array
   * and see if any of the values are the same
   *  if they are, we move it to matchedCards
   */
  function checkForMatch() {
    incrementAttempts();
    if (cards[flippedCards[0]] === cards[flippedCards[1]]) {
      setMatchedCards([...matchedCards, ...flippedCards]);
    }
    setFlippedCards([]);
    if (matchedCards.length === cards.length) {
      console.debug(`game Over :0 it took you ${attempts} tries`);
    }
  }

  function flipCard(index) {
    /*if (
    disabled ||
    flippedCards.includes(index) ||
    matchedCards.includes(index)
  ) {
    console.log("Card disabled");
  }
  */
    setFlippedCards([...flippedCards, index]); //this line sets the flipped cards to the index of the card that was clicked

    if (flippedCards.length === 2) {
      checkForMatch(); // what if we passed this flippedCards as an argument to checkForMatch?;
      //setTimeout / setInterval methods for the cards to flip back after a certain amount of time
    }
    console.log("card flipped");
    isFlipped = true;
    console.log(flippedCards);

    //tenary operator here? to define what kind of behavior we want when the card is flipped?
  }
  const value = { cards, generateCards, flipCard };
  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}
//===hook get things from context
const GameContext = createContext();

//custom hook to avoid fast refresh issue
GameProvider.useContext = function useGameContext() {
  const context = useContext(GameContext);
  return context;
};
