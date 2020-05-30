import './css/App.css';
import React        from 'react';
import { Provider } from 'react-redux';
import { store }    from './store/';
import MainScreen from './view/MainScreen'

function App() {
  return(
    <Provider store = {store}>
      <MainScreen />
      {/* <Routes /> */}
    </Provider>
  );  
}

export default App;
