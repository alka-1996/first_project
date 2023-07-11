import React, {useState} from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Gallary from './components/Gallary';



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

  const removeBodyClasses=()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
  }
  const toggleMode=(cls)=>{
    removeBodyClasses();
    console.log(cls)
    document.body.classList.add('bg-'+cls)
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
      <Route exact path="/about" element={<About mode={mode}/>}/>
      <Route exact path="/gallary" element={<Gallary/>}/>

      <Route  exact path="/" element={<Textform showAlert={showAlert} heading="Try TextUtils-Word Counter, Character Counter ,Remove extra spaces" mode={mode}/>}/>
    </Routes>
  </div>
</Router>
  )
}

export default App;

