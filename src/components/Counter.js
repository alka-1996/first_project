import React, { Component } from "react";

class Counter extends Component {
    state={
        count:0,
    }

    makeincrementer =amount =>() =>{
        const x = ()=>({a:1})
        this.setState(prevState =>({
                count:prevState.count + amount,
            
        }) ) 
    }
    increment =this.makeincrementer(1)
    decrement =this.makeincrementer(-1)

       


    render(){
        return(
            <>
            <div>
              <button  className="increment" onClick ={this.increment}>Increment count</button>
              <button className="decrement" onClick ={this.decrement}>Decrement count</button>
            
            </div>

            </>
        )
    }
}
export default Counter;