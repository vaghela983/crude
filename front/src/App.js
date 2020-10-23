import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route} from "react-router-dom";
import Crude from './Crude/Crude'
import Category from './Crude/Category'

function App() {
  return (
    <BrowserRouter>
    <Route exact path={<Crude />} component={Crude}></Route>
  <Route path="/Category" component={Category}></Route>  
 </BrowserRouter>
  );
}

export default App;
