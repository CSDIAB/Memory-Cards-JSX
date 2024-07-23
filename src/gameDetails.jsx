import GameProvider from "./gameContext";
//this component will render things like attempts as well as the game over message

export default function GameDetails() {
  const { attempts } = GameProvider.useContext();
  //newState, change it accordingly, render it accordingly
  return (
    <div className="gameDetails">
      <h2>Attempts: {attempts}</h2>
      <h2>{`game Over :0 it took you ${attempts} tries`}</h2>
    </div>
  );
}
