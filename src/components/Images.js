import React from 'react'

export default function Images() {
    return (
        <>
            <div className='container' style={{ backgroundColor: "#f3eeeeb0" ,height:"800px"}}>
                <div style={{paddingTop:"4rem",color:"#645b5b"}}>
                <i class="fa fa-arrow-left">Back</i>
                <h2 >Gallery Images</h2>
                </div>
                <div className='container' style={{border:"1px solid #e1d7d7" ,width:"60%",alignItems:"center", height: "484px",backgroundColor: "white",marginTop:"3rem"}}>
                    <div style={{marginTop:"4rem"}}>
                    <h3>Image details</h3>
                    <p>This Image will be part of the Gallary</p>
                    </div>
                <div className='container' style={{border:"2px dotted #c1b1b1",backgroundColor: "white",width: "27%",height: "250px",float: "left"}}>
                    <div style={{textAlign:"center",marginTop:"3rem",color:"gray"}}>
                    <h3>+</h3>
                    <h3>Add Image</h3>
                    <p>Max 20MB</p>
                    </div>
                    </div>    

                
            </div>
            </div>
        </>
    )
}

