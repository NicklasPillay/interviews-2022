import './App.css';
import Bugs from './components/Bugs';
import configureStore from "./store/configureStore";
import StoreContext from './contexts/storeContext';

const store = configureStore()

function App() {
  return (
  <StoreContext.Provider>
    <Bugs />
  </StoreContext.Provider>
  )
}

export default App;
