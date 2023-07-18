import React from 'react'

export default function Template() {

    return (
        <>
            <div className='container' style={{ backgroundColor: "#f3eeeeb0", height: "800px" }}>
               

                <div className='row col-md-12' >
                    <div className='col-md-7' style={{ marginLeft: "4rem" }}>
                        <div style={{ backgroundColor: "white", padding: "2rem" }}>
                            <h4>Payment Location</h4>
                            <ul style={{ listStyle: "none" }}>
                                <li><label><input type="radio" checked="checked" name="radio" style={{ marginRight: "8px" }} />Pay Now</label></li>
                                <li><label><input type="radio" checked="checked" name="radio" style={{ marginRight: "8px" }} />Pay later at location</label></li>
                            </ul>
                        </div>
                        <div style={{ backgroundColor: "white", marginTop: "1rem", paddingLeft: "2rem", paddingRight: "2rem" }}>
                            <h6 style={{ paddingTop: "2rem" }}>Billing address</h6>
                            <form style={{ marginTop: "2rem" }}>
                                <div className="mb-3">
                                    <label htmlFor="Country" placeholder="placeholder" className="form-label">Country*</label>
                                    <input type="text" className="form-control" id="Country" name="Country" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="House No." className="form-label">Flat/House/ApartMent No.</label>
                                    <input type="number" className="form-control" id="Flat/House/ApartMent No." name="Flat/House/ApartMent No." />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="Address line1." className="form-label">Address line1*</label>
                                    <input type="text" className="form-control" id="Address line1" name="Address line1" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="Address line2." className="form-label">Address line2</label>
                                    <input type="text" className="form-control" id="Address line2" name="Address line2" />
                                </div>

                                <div className="row g-2 align-items-center">
                                    <div className="col-auto">
                                        <label htmlFor="city" className="form-label">City*</label>
                                    </div>
                                    <div className="col-auto">
                                        <input type="text" id="City" className="form-control" name="city" />
                                    </div>
                                    <div className="col-auto">
                                        <label htmlFor="inputPassword6" className="form-label">State</label>
                                    </div>
                                    <div className="col-auto">
                                        <input type="password" id="State" className="form-control" name="state" />
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="Zip code" className="form-label">Zip code</label>
                                    <input type="text" className="form-control" id="Zip code" name="Zip code" />
                                </div>

                            </form>
                        </div>
                    </div>
                    <div className='col-md-4' >
                        <div style={{ backgroundColor: "white", padding: "2rem" }}>
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
                            <p>Personal details</p>
                            <p>Mary cate</p>
                            <p>mkate@gmail.com|+9156567878</p>
                            <p>i'd live advice on the best products to get theperfect brow dry!</p><hr></hr>
                            <h6 style={{ float: "left" }}>Total</h6>
                            <h6 style={{ marginLeft: "19rem" }}>rs:45.00</h6>
                        </div>
                        <div>
                            <button className="btn btn-primary" type="button" style={{
                                width: "-webkit-fill-available", backgroundColor: "#0ccef5b5"
                            }}>Proceed</button>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}
