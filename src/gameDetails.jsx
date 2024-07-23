import GameProvider from "./gameContext";
//this component will render things like attempts as well as the game over message

export default function GameDetails() {
  const { attempts, gameStatus } = GameProvider.useContext();

  return (
    <div className="gameDetails">
      <h2>Attempts: {attempts}</h2>
      <h2>{gameStatus}</h2>
    </div>
  );
}
