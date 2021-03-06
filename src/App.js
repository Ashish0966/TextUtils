import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
//import About from './components/About';
import React, { useState } from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  const [mode, setMode]= useState('light');  //whether dark mode is enable or not
  
  const [alert, setAlert] = useState(null);

  const showAlert= (message, type) =>
  {

    setAlert({
      msg: message,
      type: type,
    })

    setTimeout(()=>{
      setAlert(null);
    },2000);

  }

  const toggleMode = ()=>
  {
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title="TextUtils - Dark Mode";
      //setInterval(()=>
      //{
      //  document.title="TextUtils is Amazing Mode";
      //}, 2000);
      
      //setInterval(()=>
     // {
      //  document.title="Install TextUtils Now";
     // }, 1500);
      
    }

    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled", "success");
      document.title="TextUtils - Light Mode";
    }
  } 
  return (
    <>
    <Router>

    <Navbar title="TextUtils" home="My Home" about="About"  mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>

    <div className="container my-3">
    {/*<Switch>
        <Route exact path="/about">
        <About />
        </Route>
    <Route exact path="/">*/}
        <TextForm heading="Enter Your Text" mode={mode} showAlert={showAlert}/>   
        {/*</Route>
    </Switch>*/}
    </div>
    </Router>


    </>
  );
}

export default App;
