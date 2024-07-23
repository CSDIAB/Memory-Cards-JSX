import gameProvider from "./gameContext";

export default function Cell({ card, index, isFlipped, matched }) {
  const { flipCard } = gameProvider.useContext();

  return (
    <div
      //explanation about the ? symbol
      //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
      //essentially, if isFlipped is true, then the card is displayed
      //if not, then the card is hidden using the ? symbol
      // this ${} is a template literal
      //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
      //it is a way to concatenate strings and variables
      //the issues here is that we need to define what conditions we want when isFlipped is true
      //and when it is false
      //we also need to define what happens when the card is matched

      className={`cell ${isFlipped ? "flipped" : ""} ${
        matched ? "matched" : ""
      }`}
      onClick={() => flipCard(index)}
    >
      {isFlipped ? card : "?"}
    </div>
  );
}
