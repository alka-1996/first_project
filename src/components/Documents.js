import React from 'react'

const Documents = () => {
    return (
        <div>
            <div style={{ backgroundColor: "white", marginTop: "1rem", paddingLeft: "1rem", paddingRight: "1rem", paddingBottom: "1rem", borderRadius: "1.5rem" }}>

                <div style={{ backgroundColor: "#b8b4c7", marginTop: "1rem", paddingLeft: "2rem", borderRadius: "1.5rem", paddingRight: "2rem", paddingBottom: "3rem" }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: ' 35px' }}>
                        <p>10:30</p>
                        <div style={{ marginRight: "1rem" }}>
                            <i class="fa fa-signal" aria-hidden="true"></i>
                            <i class="fa fa-wifi" aria-hidden="true" style={{ marginLeft: "1rem" }}></i>
                            <p style={{ display: 'flex', justifyContent: 'space-between', float: "right", marginLeft: "1rem" }}><p style={{ backgroundColor: "yellow" }}>5</p> 2</p>
                        </div>
                    </div>
                    <div style={{ backgroundColor: "white", marginTop: "-1rem", paddingLeft: "2rem", paddingRight: "2rem", paddingBottom: "3rem", borderRadius: "1.5rem", width: "100%" }}>
                   
                   
                    <div  style={{display: 'flex', justifyContent: 'space-between'}}>
                        <h4><i style={{ marginRight: "1rem", paddingTop: "2rem" }} className="fa fa-arrow-left"></i>Upload Documents</h4>
                        <a style={{color:"grey", textDecorationLine:"none",paddingTop:"2rem",fontSize:"1.3rem"}} href="Skip">Skip</a>
                        </div>


                        <p style={{ marginTop: "1rem",color:"gray" }}>Choose your document type</p>
                        <form style={{ marginTop: "0rem" }}>


                            <div  className="box" style={{ display: 'flex', justifyContent: 'space-between', paddingTop: ' 15px',backgroundColor:"#37303008",marginBottom:"1rem" , paddingLeft:"0.5rem" }}>
                                <img src="https://i.pinimg.com/originals/e7/45/4f/e7454f77d353d73e3082a483d1cfcbd0.png" width="49px" height="36px" className="" alt="logo" />
                                <p>Addhar Card</p>
                                <div className="form-check"><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"  style={{borderRadius:"25rem"}}/>
                                    <label class="form-check-label" for="flexCheckDefault"></label></div>

                            </div>

                            <div  className="box" style={{ display: 'flex', justifyContent: 'space-between', paddingTop: ' 15px', backgroundColor:"#37303008", marginBottom:"1rem" , paddingLeft:"1rem" }}>
                                <i class="fa fa-address-card-o" aria-hidden="true"></i>

                                <p> Driving License</p>
                                <div className="form-check"><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" style={{backgroundColor:"#5a5270",borderRadius:"25rem"}} />
                                    <label class="form-check-label" for="flexCheckDefault"></label></div>

                            </div>


                            <div className="box" style={{ display: 'flex', justifyContent: 'space-between', paddingTop: ' 15px',backgroundColor:"#37303008", paddingLeft:"1rem" }}>
                                <i class="fa fa-id-card" aria-hidden="true"></i>
                                <p> Voter Id</p>
                                <div class="form-check"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" style={{borderRadius:"25rem"}} />
                                    <label class="form-check-label" for="flexCheckDefault"></label></div>
                            </div>

                            <div>
                                <button className="btn btn-primary" type="button" style={{
                                    marginTop: "1rem", width: "-webkit-fill-available", backgroundColor: "#5b5370", marginBottom:"15rem"
                                }}> Finish Upload</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Documents
