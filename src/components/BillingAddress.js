import React from 'react'

export default function BillingAddress () {
  return (
    <div className='container' style={{ height:"600px"}}>

    <div className='row col-md-12' >
    <div className='col-md-7' style={{ marginLeft: "4rem" }}>
      <div style={{ backgroundColor: "white", marginTop: "1rem", paddingLeft: "2rem", paddingRight: "2rem",paddingBottom:"3rem" }}>
                            <h6 style={{ paddingTop: "2rem" }}>Personal details</h6>
                            <form style={{ marginTop: "2rem" }}>
                                <div className="mb-3">
                                    <label htmlFor="Name" placeholder="placeholder" className="form-label">Name*</label>
                                    <input type="text" className="form-control" id="Name" name="Name" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="Email" className="form-label">Email*</label>
                                    <input type="Email" className="form-control" id="Email" name="Email" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="Phone" className="form-label">Phone</label>
                                    <input type="Number" className="form-control" id="Phone" name="Phone" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="Comments" className="form-label">Comments</label>
                                    <textarea type="text" className="form-control" id="Comments" name="Comments" style={{height:"7rem"}}/>
                                </div>

                            </form>
                        </div>
                    
    
    </div>
    <div className='col-md-4' >
                        <div style={{ backgroundColor: "white", padding: "2rem",marginTop:"1rem",paddingBottom:"5.5rem" }}>
                            <h6>Appointment Summary</h6>
                            <p>Service</p>
                            <p style={{ float: "left" }}>Blow dry,45mins</p>
                            <p style={{ marginLeft: "19rem" }}>rs:45.00</p>
                            <hr></hr>
                            <p>Location</p>
                            <p>Address line 1,City</p>
                            <p>PostCode</p><hr></hr>
                            <p>Date & Time</p>
                            <p>Monday, 11th April 2022</p>
                            <p>10:00Am(GMT)</p><hr></hr>
                            <h6 style={{ float: "left" }}>Total</h6>
                            <h6 style={{ marginLeft: "19rem" }}>rs:45.00</h6>
                        </div>
                        <div>
                            <button className="btn btn-primary" type="button" style={{
                                width: "-webkit-fill-available", backgroundColor: "#0ccef5b5",marginTop:"1rem"
                            }}>Proceed</button>
                        </div>
                    </div>
    </div>
    </div>
  )
}

