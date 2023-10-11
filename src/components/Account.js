import { IconButton, Input, InputAdornment, InputLabel } from '@material-ui/core'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import React from 'react'
import About from './About';


const Account = () => {

    const [values, setValues] = React.useState({
        password: "",
        showPassword: false,
    });

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handlePasswordChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };
    const handleClick = () => {
        console.log("Manoj Button clicked in parent component");
        };
    
    return (
        <div>
            <div style={{ backgroundColor: "white", marginTop: "1rem", paddingLeft: "1rem", paddingRight: "1rem", paddingBottom: "1rem", borderRadius: "1.5rem" }}>
<About color="Pink" message="Hello from parent" handleClick={handleClick} />
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

                        <h4><i style={{ marginRight: "1rem",paddingTop:"2rem" }} className="fa fa-arrow-left"></i>Create an Account</h4>

                        <p style={{ marginTop: "1rem" }}>it only takes a minute to create your account</p>
                        <form style={{ marginTop: "0rem" }}>
                            <div className="mb-3">
                                <label htmlFor="Daniel" className="form-label"></label>
                                <input type="text" className="form-control" id="Daniel" placeholder="Daniel" name="Daniel" style={{ backgroundColor: "#f7f1e6" }} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="Name" className="form-label"></label>
                                <input type="text" className="form-control" id="Name" placeholder="Last Name" name="Name" style={{ backgroundColor: "#f7f1e6" }} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="Email" className="form-label"></label>
                                <input type="Email" className="form-control" id="Email" placeholder="Email Address" name="Email" style={{ backgroundColor: "#f7f1e6" }} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="Phone" className="form-label"></label>
                                <input type="Number" className="form-control" id="Phone" placeholder="Mobile Number" name="Phone" style={{ backgroundColor: "#f7f1e6" }} />
                            </div>


                            <div>
                                <InputLabel htmlFor="standard-adornment-password" className="form-label">

                                </InputLabel>
                                <Input
                                    type={values.showPassword ? "text" : "password"} className="form-control" placeholder="Password" id="Password" name="password" style={{ backgroundColor: "#f7f1e6" }}
                                    onChange={handlePasswordChange("password")}
                                    value={values.password}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                            >
                                                {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                            </div>
                            <div style={{marginTop:"2rem"}}>
                                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" style={{ float: "left", marginTop: "0.3rem" }} />
                                <label for="vehicle1"><p style={{ float: "left",marginLeft:"0.5rem" }}>I agree to the stocksBull <a style={{color:"grey", textDecorationLine:"none"}} href="terms of services">Terms of service</a> and <a style={{color:"grey", textDecorationLine:"none"}} href="Privacy Policy">Privacy Policy</a></p></label>
                            </div>


                            <div>
                                <button className="btn btn-primary" type="button" style={{
                                    marginTop: "1rem", width: "-webkit-fill-available", backgroundColor: "#5b5370"
                                }}>Sign Up</button>
                            </div>
                            <p style={{ textAlign: "center" ,color:"grey" }}>Existing user <a style={{color:"black"}}href="Login">Login</a> </p>
                            <h4 style={{ textAlign: "center" }}>OR</h4>

                            <div>
                                <button type="button" class="btn btn-light" style={{ border: "1px solid black", width: "-webkit-fill-available" }}><i style={{ marginRight: "10px" }} class="fa fa-google" aria-hidden="true"></i>
                                    Sign Up with Google</button>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Account
