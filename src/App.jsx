import "./App.css";
import Cards from "./cards";
import GameProvider from "./gameContext";
import GameDetails from "./gameDetails";

/**
 * @component App is where everything in your project lives.
 */
function App() {
  return (
    <GameProvider>
      <Cards />
      <GameDetails />
    </GameProvider>
  );
}

export default App;
