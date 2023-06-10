import React, {useState} from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';



function App() {
  const [mode, setMode] = useState('light'); //whether dark mode is enalbed or not
  const [alert, setAlert] = useState(null);
  const showAlert=(message,type)=>{
       setAlert({
        msg:message,
        type:type
       })
       setTimeout(() => {
         setAlert(null);
       }, 3000);
  }
  const toggleMode=()=>{
    if(mode==='light'){
    setMode('dark');    
    document.body.style.backgroundColor='#042743';
    showAlert("Dark mode has been enabled","success");
  }
  else{
    setMode('light');
    document.body.style.backgroundColor='white';
    showAlert("light mode has been enabled","success");
  }
}
return ( 
  <Router>
  <div>
   <Navbar mode={mode} toggleMode={toggleMode}/>
   <Alert alert={alert} ></Alert>
    <Routes>
      <Route exact path="/about" element={<About/>}/>
      <Route  exact path="/" element={<Textform showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>}/>
    </Routes>
  </div>
</Router>
  )
}

export default App;