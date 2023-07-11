import React ,{useState}from 'react'
//import Navbar from './Navbar';

export default function  Textform(props) {
  const handleUpClick=()=>{
    //console.log ("Uppercase was clicked"+text);
    let newText= text.toUpperCase ();
    setText (newText)
    props.showAlert("Converted to uppercase!","success");
  }

  const handleLoClick=()=>{
    //console.log ("Lowercase was clicked"+text);
    let newText= text.toLowerCase ();
    setText (newText)
    props.showAlert("Converted to lowercase!", "success");
  }

  const handleClearClick=()=>{
    //console.log ("Uppercase was clicked"+text);
    let newText= '';
    setText (newText)
    props.showAlert("Text cleared!","success");
  }

  const handleOnChange=(event)=>{  
   // console.log ("On Change");
    setText (event.target.value)
  }
   const handleCopy=()=>{
    let text=document.getElementById("myBox")
    text.select();  
    navigator.clipboard.writeText(text.value);
    props.showAlert("copied to clipboard!","success");
   }

   const handleExtraSpaces=()=>{
     let newText=text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra spaces removed!","success");
   }


  const [text, setText] = useState ('Enter Text here');  
  //text =("new text")   //wrong  way to change the state
  //setText =("new text")   //correct way to change the state
  return (
    <>
    <div className ="container" style={{color:props.mode==='dark' ?'white':'#042743'}}>
      <h1 className='mb-1'>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control"  value={text} onChange={handleOnChange} style={{background:props.mode==='dark' ?'grey':'white' ,color:props.mode==='dark' ?'white':'black'}} id="myBox" rows="8"></textarea><br></br>
        <button  disabled ={text.length===0}className="btn btn-primary mx-1 my-1" onClick={handleUpClick}> convert to Uppercase</button>
        <button disabled ={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}> convert to Lowercase</button>
        <button disabled ={text.length===0}className="btn btn-primary mx-1 my-1" onClick={handleClearClick}> Clear Text</button>
        <button disabled ={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}> Copy Text</button>
        <button disabled ={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}> Remove Extra Spaces</button>

        </div>
  </div>
   <div className="container"  style={{color:props.mode==='dark' ?'white':'#042743'}}>
    <h2>your text summary</h2>
    <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Nothing to preview"}</p>
    </div>
  </>

  )
  
}
