import React,{useState} from 'react'
import {Link } from 'react-router-dom'

export default function  Navbar(props) { 
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('token') ? true : false);
  return (
    
<nav className={`navbar navbar-expand-lg  navbar-${props.mode} bg-${props.mode}`}>
<div className="container-fluid">
<h1>{props.heading}</h1>

  {/* <Link className="navbar-brand" to="/">{props.title}</Link> */}
  <div className=" navbar-collapse" id="navbarSupportedContent">
    
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">      
        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">About{props.aboutText}</Link>
      </li>
      {localStorage.getItem('token') ?   // speific Routing 
      <>
      <li className="nav-item">
        <Link className="nav-link active" aria-current="page"to="/gallery">Gallery</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link active" aria-current="page"to="/list">List</Link>
      </li>
      </>
      :
      <></>}
      <li className="nav-item">
        <Link className="nav-link active" aria-current="page"to="/materialUI">MaterialUI</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link active" aria-current="page"to="/images">Images</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link active" aria-current="page"to="/template">Template</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link active" aria-current="page"to="/steps">Steps</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link active" aria-current="page"to="/dateTime">Date & Time</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link active" aria-current="page"to="/Times">Times</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link active" aria-current="page"to="/ReactTable">ReactTable</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link active" aria-current="page"to="/Counter">Counter</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link active" aria-current="page"to="/Account">Account</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link active" aria-current="page"to="/Documents">Documents</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link active" aria-current="page"to="/Table">Table</Link>
      </li>
      <li className="nav-item">
        {isLoggedIn ?
        <div onClick={()=> {
          localStorage.removeItem('token');
          setIsLoggedIn(false);
          window.location.reload();
        }}>Logout</div>
        :
        <Link className="nav-link active" aria-current="page"to="/Login">Login</Link>
        }
        
      </li>
      <li className="nav-item">
        <Link className="nav-link active" aria-current="page"to="/ImageBar">ImageBar</Link>
      </li>
      
    </ul>
    <div className="d-flex">
      <div className="bg-primary rounded mx-2" onClick={()=>{props.toggleMode ('primary')}} style={{ height:'30px', width:'30px',cursor:'pointer'}}></div>
      <div className="bg-success rounded mx-2" onClick={()=>{props.toggleMode ('success')}} style={{ height:'30px', width:'30px',cursor:'pointer'}}></div>
      <div className="bg-danger rounded mx-2" onClick={()=>{props.toggleMode ('danger')}} style={{ height:'30px', width:'30px',cursor:'pointer'}}></div>
     <div className="bg-warning rounded mx-2" onClick={()=>{props.toggleMode ('warning')}} style={{ height:'30px', width:'30px',cursor:'pointer'}}></div>

    </div>
    
   {/* <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-primary" type="submit">Search</button>
    </form>*/}
    <div className={`form-check form-switch text-${props.mode==='light' ?'dark':'light'}`}>
  <input className="form-check-input" onClick={()=>{props.toggleMode (null)}} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Toggle Mode</label>
</div>
  </div>
</div>
</nav>
  )
} 
