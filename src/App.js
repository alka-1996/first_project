import React, {useState} from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import List from './components/List';
import MaterialUI from './components/MaterialUI';
import Images from './components/Images';
import Gallery from './components/Gallery';
import Template from './components/Template';

import Steps from './components/Steps';
import PaymentLocation from './components/PaymentLocation';
import BillingAddress from './components/BillingAddress';
import DateTime from './components/DateTime';
import Times from './components/Times';
import ReactTable from './components/ReactTable';
import Counter from './components/Counter';
import Account from './components/Account';
import Documents from './components/Documents';
import Table from './components/Table';
import Login from './components/Login';
import NoAccess from './components/NoAccess';
import ImageBar from './components/ImageBar';



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
      //speific Routing
      <Route exact path="/gallery" element={localStorage.getItem('token') ? <Gallery/> : <NoAccess/>}/>  
      <Route exact path="/list" element={ localStorage.getItem('token') ? <List/> : <NoAccess/>}/>
      <Route exact path="/materialUI" element={<MaterialUI/>}/>
      <Route exact path="/images" element={<Images/>}/>
      <Route exact path="/template" element={<Template/>}/>
      <Route exact path="/Steps" element={<Steps/>}/>
      <Route exact path="/PaymentLocation" element={<PaymentLocation/>}/>
      <Route exact path="/BillingAddress" element={<BillingAddress/>}/>
      <Route exact path="/DateTime" element={<DateTime/>}/>
      <Route exact path="/Times" element={<Times/>}/>
      <Route exact path="/ReactTable" element={<ReactTable/>}/>
      <Route exact path="/Counter" element={<Counter/>} />
      <Route exact path="/Account" element={<Account/>} />
      <Route exact path="/documents" element={<Documents/>} />
      <Route exact path="/Table" element={<Table/>} />
      <Route exact path="/Login" element={<Login/>} />
      <Route exact path="/ImageBar" element={<ImageBar/>} />







      <Route  exact path="/" element={<Textform showAlert={showAlert} heading="Try TextUtils-Word Counter, Character Counter ,Remove extra spaces" mode={mode}/>}/>
    </Routes>
  </div>
</Router>
  )
}

export default App;

