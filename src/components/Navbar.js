import React from 'react'
import {Link } from 'react-router-dom'

export default function  Navbar(props) { 
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
      <li className="nav-item">
        <Link className="nav-link active" aria-current="page"to="/gallary">Gallary</Link>
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