import React from 'react'
                <i class="fa fa-arrow-left">Back</i>

export default function DateTime() {
    return (
        <div className='container' style={{ height: "750px" }}>

            <div className='row col-md-12'>

                <div className='col-md-7' style={{ marginLeft: "4rem" }}>
                    <div style={{ backgroundColor: "white",margin:"1rem", paddingLeft:"2rem"}}>
                        <h6 style={{ paddingTop: "2rem" }}>Date & Time</h6>

                        <div style={{padding:"3rem"}}>
                            <h6 style={{textAlign:"center"}}><i class="fa fa-arrow-left" style={{marginRight:"6rem",color:"#918585"}}></i>April 2022<i class="fa fa-arrow-right"
                            style={{marginLeft:"6rem",color:"#918585"}}></i></h6>
                            <table className="table" >
                                <thead style={{color:"gray"}}>
                                    <tr>
                                        <th>Mon</th>
                                        <th>Tue</th>
                                        <th>Wed</th>
                                        <th>Thu</th>
                                        <th>Fri</th>
                                        <th>Sat</th>
                                        <th>Sun</th>



                                    </tr>
                                </thead>
                                <tbody style={{border:"none"}}>
                                    <tr>
                                        <td>28</td>
                                        <td>29</td>
                                        <td>30</td>
                                        <td>31</td>
                                        <td>1</td>
                                        <td>2</td>
                                        <td>3</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>5</td>
                                        <td>6</td>
                                        <td>7</td>
                                        <td>8</td>
                                        <td>9</td>
                                        <td>10</td>
                                    </tr>
                                    <tr>
                                        <td>11</td>
                                        <td>12</td>
                                        <td>13</td>
                                        <td>14</td>
                                        <td>15</td>
                                        <td>16</td>
                                        <td>17</td>
                                    </tr>
                                    <tr>
                                        <td>18</td>
                                        <td>19</td>
                                        <td>20</td>
                                        <td>21</td>
                                        <td>22</td>
                                        <td>23</td>
                                        <td>24</td>
                                    </tr>
                                    <tr>
                                        <td>25</td>
                                        <td>26</td>
                                        <td>27</td>
                                        <td>28</td>
                                        <td>29</td>
                                        <td>30</td>
                                        <td>1</td>
                                    </tr>
                                </tbody>
                            </table>
                           <div style={{textAlign:"center"}}>
                            <h6 style={{ paddingTop:"2rem"}}>available Times(in GMT)</h6>
                            <div  style={{marginTop:"2rem"}}>
                              <div style={{marginBottom:"30px"}}>
                                    <span  style={{border:"1px solid black",padding:"10px"}}>10:00 AM</span>
                                    <span  style={{border:"1px solid black" , margin:"38px",padding:"10px"}}>11:00 AM</span>
                                    <span  style={{border:"1px solid black",padding:"10px"}}>11:00 AM</span>
                                    <span  style={{border:"1px solid black", margin:"38px",padding:"10px"}}>11:00 AM</span>
                                    </div> 
                                    <div style={{marginBottom:"30px"}}>
                                    <span  style={{border:"1px solid black",padding:"10px"}}>10:00 AM</span>
                                    <span  style={{border:"1px solid black" , margin:"38px",padding:"10px"}}>11:00 AM</span>
                                    <span  style={{border:"1px solid black",padding:"10px"}}>11:00 AM</span>
                                    <span  style={{border:"1px solid black", margin:"38px",padding:"10px"}}>11:00 AM</span>
                                    </div> 
                                    <div style={{marginBottom:"30px"}}>
                                    <span  style={{border:"1px solid black",padding:"10px"}}>10:00 AM</span>
                                    <span  style={{border:"1px solid black" , margin:"38px",padding:"10px"}}>11:00 AM</span>
                                    <span  style={{border:"1px solid black",padding:"10px"}}>11:00 AM</span>
                                    <span  style={{border:"1px solid black", margin:"38px",padding:"10px"}}>11:00 AM</span>
                                    </div> 
                                    <div style={{marginBottom:"10px"}}>
                                    <span  style={{border:"1px solid black",padding:"10px"}}>10:00 AM</span>
                                    <span  style={{border:"1px solid black" , margin:"38px",padding:"10px"}}>11:00 AM</span>
                                    <span  style={{border:"1px solid black",padding:"10px"}}>11:00 AM</span>
                                    <span  style={{border:"1px solid black", margin:"38px",padding:"10px"}}>11:00 AM</span>
                                    </div> 
                                    </div>
                            </div>
                        </div>

                    </div>
                </div>


                <div className='col-md-4' >
                    <div style={{ backgroundColor: "white", padding: "2rem", marginTop: "1rem", paddingBottom: "5.5rem" }}>
                        <h6>Appointment Summary</h6>
                        <p>Service</p>
                        <p style={{ float: "left" }}>Blow dry,45mins</p>
                        <p style={{ marginLeft: "19rem" }}>rs:45.00</p>
                        <hr></hr>
                        <p>Location</p>
                        <p>Address line 1,City</p>
                        <p>PostCode</p><hr></hr>
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
    )
}


