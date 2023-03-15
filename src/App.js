import logo from './logo.svg';
import './App.css';

import { useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {  

  //set up hooks for the state 
  const [toDoList, setToDoList] = useState([]);


  //load the todo items from the back end 
  useEffect(() => {

  },[])


  return (
    <div className="App">
      
    </div>
  );
}

export default App;
