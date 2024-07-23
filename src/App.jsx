import "./App.css";
import Cards from "./cards";
import GameProvider from "./gameContext";

/**
 * @component App is where everything in your project lives.
 */
function App() {
  return (
    <GameProvider>
      <Cards />
    </GameProvider>
  );
}

export default App;
