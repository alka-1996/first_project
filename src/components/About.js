import React, { useState } from 'react'

export default function About(props){

  console.log("propsprops",props);
const [myStyle, setMyStyle] = useState({
        color:'#000',
        backgroundColor:'#fff'
    }) 
const [btnText, setBtnText]=useState("Enable Dark Mode")

   const toggleStyle = ()=>{
        if(myStyle.color==='#000'){
            setMyStyle({
                color:'#fff',
                backgroundColor:'#000',
                border:'1px solid #fff'
            })
            setBtnText("Enable Light Mode")
        }
        else{
            setMyStyle({
                color:'#000',
                backgroundColor:'#fff'
            })
            setBtnText("Enable Dark Mode")

        }
    }
   
  
 return (
    <div className="container" style={myStyle}>
        <h1 className="my-3">About Us{props.color}</h1>
        <div className="accordion" id="accordionPanelsStayOpenExample" style={myStyle}>
  <div className="accordion-item">
    <h2 className="accordion-header" id="panelsStayOpen-headingOne">
      <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
         <strong>Analaze your text</strong>
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
      <div className="accordion-body" style={myStyle}>
        This is the first item's accordion body.It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header"id="panelsStayOpen-headingTwo">
      <button className="accordion-button collapsed"  style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
      <strong>Free to use</strong>
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
      <div className="accordion-body" style={myStyle}>
        This is the second item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="panelsStayOpen-headingThree">
      <button className="accordion-button collapsed"  style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
      <strong>Browser Compatible</strong>
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
      <div className="accordion-body" style={myStyle}>
        This is the third item's accordion body.It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
    <div className="container my-3">
        <button  onClick={toggleStyle}  type="button" className="btn btn-primary dark-mode-btn">{btnText}</button>
        </div>
        <button onClick={props.handleClick}> { props.message ? props.message : 'click here'}</button>

    </div>

  )
}
