import Cell from "./cell";
import GameProvider from "./gameContext";

export default function Cards() {
  const { cards, generateCards } = GameProvider.useContext();

  //there is something wrong here with the mapping of cards array
  //the proper code might look like this
  //const $cards = cards.map((card, index) => {
  //  <Cell key={index} card={card} index={index} />;
  //});
  const $cards = cards.map((card, index) => {
    return <Cell key={index} card={card} index={index} />;
  });
  return (
    <>
      <div className="cards">{$cards}</div>
      <button onClick={generateCards}>Generate Cards</button>
    </>
  );
}
/**
 * instead of generateCards should I use setCards here?
 * we map over cards array to actively render the cards
 */
