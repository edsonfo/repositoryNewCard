import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Cards from "./components/list-item/Cards";
import Context from "./components/context/Context";
import { Provider } from "react-redux"
import store from "./components/redux/store"

const App = () => {
  return (
    <Provider store={store}>
      <Context>
        <div className="App">
          <Cards />
        </div>
      </Context>
    </Provider>
  );
};

export default App;
