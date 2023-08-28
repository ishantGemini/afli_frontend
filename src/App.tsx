import "./App.css";
import Comp1 from "./components/Comp1";
import ToDo from "./components/ToDo";
import Toggle from "./components/Toggle";

function App() {
  return (
    <div className="App">
      <div>Home Page</div>
      <ToDo />
      <Comp1 />
      <Toggle />
    </div>
  );
}

export default App;
