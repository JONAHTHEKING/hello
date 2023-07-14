import logo from './logo.svg';
import './App.css';
import { Component, useState } from 'react';
import Testing from "./components/Testing"
import Lg from './Lg';
import ToDoList from "./ToDoList"



function App() {
  const [loginstate, setloginstate] = useState(false)


  
  return (
    <>
  <Testing />
{/* { !loginstate && <Lg updatestate ={setloginstate}/>}
{ loginstate && <ToDoList />} */}
<Lg/>


    </>
  );
}

export default App;
