import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Itemlisting from './Component/Itemlisting';
import Additem from './Component/Additem';
import Updateitem from './Component/Updateitem';
import { Provider } from 'react-redux';
import Store from './Redux/Store';

function App(): JSX.Element {
  return (
    <Provider store={Store}>
      <div className="App">
        <BrowserRouter>
          <div className='header'>
            <h2>Todo List App</h2>
          </div>
          <Routes>
            <Route path='/' element={<Itemlisting />} />
            <Route path='/add' element={<Additem />} />
            <Route path='/edit/:code' element={<Updateitem />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
