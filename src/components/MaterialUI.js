import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';

const columns = [
  {
    field: 'images',
    headerName: 'Images',
    width: 550,
    renderCell: (param) => <img src={param.value} height="37" width="36" alt="..."/>
    //editable: true,
  },
  {
    field: 'Uploadedon',
    headerName: 'Uploaded On',
    width: 550,
   // editable: true,
  },
  {
    field: 'Edit',
    headerName: 'Edit',
    width: 110,
    renderCell: (param) => <i className='fa fa-edit'></i>

   // editable: true,
  }
  
];

const rows = [
  { id: 1, images: 'https://www.shutterstock.com/image-photo/makeup-design-template-brushes-pearls-260nw-1911924961.jpg', Uploadedon: 'march-29-2022 ,11:37',Edit:"" },
  { id: 2, images: 'https://www.shutterstock.com/image-photo/close-hairdressers-hands-drying-long-260nw-357210452.jpg', Uploadedon: 'march-29-2022 ,11:37',Edit:"" },
  { id: 3, images: 'https://www.shutterstock.com/image-photo/hair-dresser-provides-styling-services-260nw-1835552527.jpg', Uploadedon: 'march-29-2022 ,11:37',Edit:"" },
  { id: 4, images: 'https://images.pexels.com/photos/853427/pexels-photo-853427.jpeg', Uploadedon: 'march-29-2022 ,11:37',Edit:"" },
  { id: 5, images: 'https://www.shutterstock.com/image-photo/makeup-artist-tools-prepared-work-260nw-1993225691.jpg', Uploadedon: 'march-29-2022 ,11:37',Edit:"" },
  { id: 6, images: 'https://www.shutterstock.com/image-photo/view-inside-modern-salon-showing-260nw-1835221933.jpg', Uploadedon: 'march-29-2022 ,11:37',Edit:"" },
  { id: 7, images: 'https://www.shutterstock.com/image-photo/female-ha…resser-standing-cutting-hair-260nw-1834218562.jpg', Uploadedon: 'march-29-2022 ,11:37',Edit:"" },
  { id: 8, images: 'https://www.shutterstock.com/image-photo/young-woman-visit-beauty-salon-260nw-1551548918.jpg', Uploadedon: 'march-29-2022 ,11:37',Edit:"" },
];

export default function DataTable() {
  return (
    <div className='container' style={{ backgroundColor: "#f3eeeeb0"}}>
       <div h2 className="my-3">
                    <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: ' 35px' }}>
                        <div><h2>Gallery</h2></div>
                        <div><button type="button" className="btn btn-success" style={{ marginRight: '18px' }}>Add Image</button></div>
                    </div>
                     <div style={{ display: 'flex', justifyContent: 'left', paddingTop: ' 35px',    paddingBottom: "23px"
 }}> 
                        <div className='col-md-9'><input type="search" placeholder="Search images" style={{width:"100%",padding:'7px'}} /></div>
                        <div className='col-md-3'>
                            <div style={{float:'left' ,marginLeft:'96px'}}><a href="/gallery"><i className="fa fa-th" style={{ color: '#2525df', border: "1px solid black",padding:'12px' }}>Grid View</i></a></div>
                             <div><a href="//materialUI"><i className="fa fa-list" style={{ border: "1px solid black", color:'gray',padding:'12px'}}>List View</i></a></div>
                             </div>
                    </div> 
                    
                </div>
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
    </div>
  );
}