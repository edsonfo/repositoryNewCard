import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import List from './components/list-item/Cards'
import Context from './components/context/Context'
import { Provider } from 'react-redux'
import store from './components/store/store'


const App = () => {

  return (
    <Provider store={store}>
      <Context>
        <div className="App">
          <List />
        </div>
      </Context>
    </Provider>
  );
};

export default App;
