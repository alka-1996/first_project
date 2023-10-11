import React from 'react'

export default function List(props) {
    return (
        <>
            <div className='container' style={{ backgroundColor: "#f3eeeeb0" ,height:"700px"}}>
                <div  className="my-3">
                    <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: ' 35px' }}>
                        <h2>Gallery</h2>
                        <div><a href="/images"><button type="button" className="btn btn-success" style={{ marginRight: '18px' }}>Add Image</button></a></div>
                    </div>
                     <div style={{ display: 'flex', justifyContent: 'left', paddingTop: ' 35px',    paddingBottom: "23px"
 }}> 
                        <div className='col-md-9'><input type="search" placeholder="Search images" style={{width:"100%",padding:'7px'}} /></div>
                        <div className='col-md-3'>
                            <div style={{float:'left' ,marginLeft:'96px'}} >  <a href="/gallery"><i className="fa fa-th" style={{ color: '#2525df', border: "1px solid black",padding:'12px' }}>Grid View</i></a></div>
                             <div > <a href="/materialUI"><i className="fa fa-list" style={{ border: "1px solid black", color:'gray',padding:'12px'}}>List View</i></a></div>
                             </div>
                    </div> 
                    
                </div>

                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col"><i className="fa fa-square-o" aria-hidden="true"></i></th>
                            <th scope="col">Images</th>
                            <th scope="col">Uploaded on</th>
                            <th scope="col">Edit</th>
                        </tr>
                    </thead>
                    <tbody  style={{border:"1px solid #3e37374a"}}>
                        <tr>
                        <th scope="row"><div class="form-check"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label class="form-check-label" for="flexCheckDefault"></label></div></th>                            
                        <td><img src="https://www.shutterstock.com/image-photo/makeup-design-template-brushes-pearls-260nw-1911924961.jpg" width="25" height="25" className="" alt="logo" /></td>
                            <td>march-29-2022 ,11:37</td>
                            <td><i className='fa fa-edit'></i></td>
                    </tr>
                    <tr>
                    <th scope="row"><div class="form-check"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label class="form-check-label" for="flexCheckDefault"></label></div></th>                       
                         <td><img src="https://www.shutterstock.com/image-photo/close-hairdressers-hands-drying-long-260nw-357210452.jpg" width="25" height="25" className="" alt="logo" /></td>
                        <td>march-29-2022 ,11:37</td>
                        <td><i className='fa fa-edit'></i></td>
                    </tr>
                    <tr>
                    <th scope="row"><div class="form-check"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label class="form-check-label" for="flexCheckDefault"></label></div></th>                       
                         <td><img src="https://www.shutterstock.com/image-photo/hair-dresser-provides-styling-services-260nw-1835552527.jpg" width="25" height="25" className="" alt="logo" /></td>
                        <td>march-29-2022 ,11:37</td>
                        <td><i className='fa fa-edit'></i></td>
                    </tr>
                    <tr>
                    <th scope="row"><div class="form-check"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label class="form-check-label" for="flexCheckDefault"></label></div></th>                        
                        <td><img src="https://images.pexels.com/photos/853427/pexels-photo-853427.jpeg" width="25" height="25" className="" alt="logo" /></td>
                        <td>march-29-2022 ,11:37</td>
                        <td><i className='fa fa-edit'></i></td>
                    </tr>
                    <tr>
                    <th scope="row"><div class="form-check"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label class="form-check-label" for="flexCheckDefault"></label></div></th>                       
                        <td><img src="https://www.shutterstock.com/image-photo/makeup-artist-tools-prepared-work-260nw-1993225691.jpg" width="25" height="25" className="" alt="logo" /></td>
                        <td>march-29-2022 ,11:37</td>
                        <td><i className='fa fa-edit'></i></td>
                    </tr>
                    <tr>
                    <th scope="row"><div class="form-check"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label class="form-check-label" for="flexCheckDefault"></label></div></th>                        
                        <td><img src="https://www.shutterstock.com/image-photo/female-ha…resser-standing-cutting-hair-260nw-1834218562.jpg" width="25" height="25" className="" alt="logo" /></td>
                        <td>march-29-2022 ,11:37</td>
                        <td><i className='fa fa-edit'></i></td>
                    </tr>
                    <tr>
                    <th scope="row"><div class="form-check"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label class="form-check-label" for="flexCheckDefault"></label></div></th>                       
                         <td><img src="https://www.shutterstock.com/image-photo/female-ha…resser-standing-cutting-hair-260nw-1834218562.jpg" width="25" height="25" className="" alt="logo" /></td>
                        <td>march-29-2022 ,11:37</td>
                        <td><i className='fa fa-edit'></i></td>
                    </tr>
                    <tr>
                        <th scope="row"><div class="form-check"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label class="form-check-label" for="flexCheckDefault"></label></div></th>
                        <td><img src="https://www.shutterstock.com/image-photo/young-woman-visit-beauty-salon-260nw-1551548918.jpg" width="25" height="25" className="" alt="logo" />
                        </td>
                        <td>march-29-2022 ,11:37</td>
                        <td><i className='fa fa-edit'></i></td>
                    </tr>


                </tbody>
            </table>
            {/* <div>
                    <ul className="list-group">
                        <li className="list-group-item">
                            <input className="form-check-input me-1" type="checkbox" value="" id="firstCheckboxStretched" />

                            <label className="form-check-label stretched-link" for="firstCheckboxStretched"></label>
                        </li>
                        <li className="list-group-item">
                            <input className="form-check-input me-1" type="checkbox" value="" id="secondCheckboxStretched" />
                            <img src="https://www.shutterstock.com/image-photo/close-hairdressers-hands-drying-long-260nw-357210452.jpg"  width="25" height="25" className="" alt="logo" />

                            <label className="form-check-label stretched-link" for="secondCheckboxStretched">Second checkbox</label>
                        </li>
                        <li className="list-group-item">
                            <input className="form-check-input me-1" type="checkbox" value="" id="thirdCheckboxStretched" />
                            <img src="https://www.shutterstock.com/image-photo/hair-dresser-provides-styling-services-260nw-1835552527.jpg"  width="25" height="25" className="" alt="logo" />

                            <label className="form-check-label stretched-link" for="thirdCheckboxStretched">Third checkbox</label>
                        </li>
                        <li className="list-group-item">
                            <input className="form-check-input me-1" type="checkbox" value="" id="thirdCheckboxStretched" />
                            <img src="https://images.pexels.com/photos/853427/pexels-photo-853427.jpeg"  width="25" height="25" className="" alt="logo" />

                            <label className="form-check-label stretched-link" for="thirdCheckboxStretched">Third checkbox</label>
                        </li>
                        <li className="list-group-item">
                            <input className="form-check-input me-1" type="checkbox" value="" id="thirdCheckboxStretched" />
                            <img src="https://www.shutterstock.com/image-photo/makeup-artist-tools-prepared-work-260nw-1993225691.jpg" width="25" height="25" className="" alt="logo" />

                            <label className="form-check-label stretched-link" for="thirdCheckboxStretched">Third checkbox</label>
                        </li>
                        <li className="list-group-item">
                            <input className="form-check-input me-1" type="checkbox" value="" id="thirdCheckboxStretched" />
                            <img src="https://www.shutterstock.com/image-photo/view-inside-modern-salon-showing-260nw-1835221933.jpg"  width="25" height="25" className="" alt="logo" />

                            <label className="form-check-label stretched-link" for="thirdCheckboxStretched">Third checkbox</label>
                        </li>
                        <li className="list-group-item">
                            <input className="form-check-input me-1" type="checkbox" value="" id="thirdCheckboxStretched" />
                            <img src="https://www.shutterstock.com/image-photo/female-ha…resser-standing-cutting-hair-260nw-1834218562.jpg"  width="25" height="25" className="" alt="logo" />

                            <label className="form-check-label stretched-link" for="thirdCheckboxStretched">Third checkbox</label>
                        </li>
                        <li className="list-group-item">
                            <input className="form-check-input me-1" type="checkbox" value="" id="thirdCheckboxStretched" />
                            <img src="https://www.shutterstock.com/image-photo/young-woman-visit-beauty-salon-260nw-1551548918.jpg"  width="25" height="25" className="" alt="logo" />

                            <label className="form-check-label stretched-link" for="thirdCheckboxStretched">Third checkbox</label>
                        </li>
                    </ul>
                </div>
            </div> */}

<button onClick={props.handleClick}> { props.message ? props.message : 'click here'}</button>

        </div >
        </>
    )
}




