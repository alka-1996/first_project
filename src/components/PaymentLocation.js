import React from 'react'

export default function PaymentLocation () {
  return (
    <div>
      <div style={{ backgroundColor: "white", padding: "2rem" }}>
                            <h4>Payment Location</h4>
                            <ul style={{ listStyle: "none" }}>
                                <li><label><input type="radio" checked="checked" name="radio" style={{ marginRight: "8px" }} />Pay Now</label></li>
                                <li><label><input type="radio" checked="checked" name="radio" style={{ marginRight: "8px" }} />Pay later at location</label></li>
                            </ul>
                        </div>
    </div>
  )
}

