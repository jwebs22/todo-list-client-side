import logo from './logo.svg';
import './App.css';

import { useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from './Pages/HomePage';
import ToDoFormPage from './Pages/ToDoFormPage';
import axios from 'axios';

const urlEndPoint = process.env.REACT_APP_URL_ENDPOINT;

function App() {  

  //set up hooks for the state 
  const [toDoList, setToDoList] = useState([]);


  //load the todo items from the back end 
  useEffect(() => {
    axios.get(`${urlEndPoint}/todos/all`)
    .then(function (response) {
      console.log(response);
      setToDoList(response.data.todos);
    })
    .catch(function (error) {
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
  
  },[])


  return (
    <div className="App">
      <HomePage toDoList={toDoList} />
    </div>
  );
}

export default App;
