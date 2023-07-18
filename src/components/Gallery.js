import React from 'react'

export default function Gallery() {
    return (
        <>
            <div className='container' style={{ backgroundColor: "#f3eeeeb0",height:"850px"}}>
                <div h2 className="my-3">
                    <div style={{ display: 'flex', justifyContent: 'space-between',paddingTop:' 35px'}}>
                        <div><h2>Gallery</h2></div>
                        <div><a href="/images"><button type="button" className="btn btn-success" style={{marginRight:'18px'}}>Add Image</button></a></div>
                    </div>
                    <div className="btn-group" style={{ display: 'flex', marginLeft: '82%'}}>

                        <div> <a href="/gallery"><i className="fa fa-th" style={{ color: '#2525df', border: "1px solid black",padding:'12px' }}>Grid View</i></a></div>

                        <div><a href="/materialUI"><i className="fa fa-list" style={{ border: "1px solid black",color:'gray',padding:'12px'}}>List View</i></a></div>
                    </div>
                </div>

                <div className='row'>
                    <div className="col-md-3">
                        <div className="card" style={{ width: "18rem", margin: "2%" }}>
                            <img src="https://www.shutterstock.com/image-photo/makeup-design-template-brushes-pearls-260nw-1911924961.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Uploaded On</h5>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <p className="card-text">march-29-2022 ,11:37</p>
                                    <div><i className="fa fa-trash" style={{ border: '1px solid black',padding:'11px' }}></i></div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card" style={{ width: "18rem", margin: "2%" }}>
                            <img src="https://www.shutterstock.com/image-photo/close-hairdressers-hands-drying-long-260nw-357210452.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Uploaded On</h5>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <p className="card-text">march-29-2022 ,11:37</p>
                                    <div><i className="fa fa-trash" style={{ border: '1px solid black',padding:'11px' }}></i></div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card" style={{ width: "18rem", margin: "2%" }}>
                            <img src="https://www.shutterstock.com/image-photo/hair-dresser-provides-styling-services-260nw-1835552527.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Uploaded On</h5>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <p className="card-text">march-29-2022 ,11:37</p>
                                    <div><i className="fa fa-trash" style={{ border: '1px solid black',padding:'11px' }}></i></div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card" style={{ width: "18rem", margin: "2%" }}>
                            <img src="https://images.pexels.com/photos/853427/pexels-photo-853427.jpeg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Uploaded On</h5>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <p className="card-text">march-29-2022 ,11:37</p>
                                    <div><i className="fa fa-trash" style={{ border: '1px solid black' ,padding:'11px'}}></i></div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card" style={{ width: "18rem", margin: "2%" }}>
                            <img src="https://www.shutterstock.com/image-photo/makeup-artist-tools-prepared-work-260nw-1993225691.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Uploaded On</h5>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <p className="card-text">march-29-2022 ,11:37</p>
                                    <div><i className="fa fa-trash" style={{ border: '1px solid black',padding:'11px' }}></i></div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card" style={{ width: "18rem", margin: "2%" }}>
                            <img src="https://www.shutterstock.com/image-photo/view-inside-modern-salon-showing-260nw-1835221933.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Uploaded On</h5>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <p className="card-text">march-29-2022 ,11:37</p>
                                    <div><i className="fa fa-trash" style={{ border: '1px solid black',padding:'11px' }}></i></div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card" style={{ width: "18rem", margin: "2%" }}>
                            <img src="https://www.shutterstock.com/image-photo/female-ha…resser-standing-cutting-hair-260nw-1834218562.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Uploaded On</h5>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <p className="card-text">march-29-2022 ,11:37</p>
                                    <div><i className="fa fa-trash" style={{ border: '1px solid black',padding:'11px' }}></i></div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card" style={{ width: "18rem", margin: "2%" }}>
                            <img src="	https://www.shutterstock.com/image-photo/young-woman-visit-beauty-salon-260nw-1551548918.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Uploaded On</h5>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <p className="card-text">march-29-2022 ,11:37</p>
                                    <div><i className="fa fa-trash" style={{ border: '1px solid black',padding:'11px' }}></i></div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

