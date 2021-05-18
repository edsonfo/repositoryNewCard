import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Cards from "./components/list-item/Cards";
import Context from "./components/context/Context";

const App = () => {
  return (
    <Context>
      <div className="App">
        <Cards />
      </div>
    </Context>
  );
};

export default App;
