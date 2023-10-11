import * as React from 'react';
import SearchBar from "material-ui-search-bar";
import { DataGrid, GridToolbarColumnsButton, GridToolbarContainer, GridToolbarExport } from '@mui/x-data-grid';
import { Padding } from '@mui/icons-material';



function CustomToolbar  (props) {
  return (
    <div style={{display:"flex", justifyContent:"space-between"}}>
    <GridToolbarContainer>
      <GridToolbarExport/>
      <GridToolbarColumnsButton style={{marginLeft:"2rem"}}/>
      </GridToolbarContainer>
       <div className='search'><SearchBar {...props} style={{marginTop:"2rem"}}/></div> 
        </div>
  );
}


export default function ExportSelectorGrid() {
  const column = [
    {
      field: "Name", headerName: "Name", width: 200, editable: false,
      renderHeader: () => (
        <strong>
          Name
        </strong>
      ),
    },
    {
      field: "Position", headerName: "Position", width: 130, editable: false,
      renderHeader: () => (
        <strong>
          Position
        </strong>
      ),
    },
    {field: "Office", headerName: "Office",width: 200, editable: false,
    renderHeader: () => (
      <strong>
        Office
      </strong>
    ),
    },
    {field: "Age",headerName: "Age",width: 200,editable: false,
    renderHeader: () => (
      <strong>
        Age
      </strong>
    ),
    },
    {field: "Startdate",headerName: "Startdate", width: 200,editable: false,
    renderHeader: () => (
      <strong>
        Startdate
      </strong>
    ),
    },
    {field: "Salary",headerName: "Salary",width: 200,editable: true,
    renderHeader: () => (
      <strong>
        Startdate
      </strong>
    ),
    },
  ];


  const DATASET = [
    { id: 1, Name: 'Prescott Bartlett', Position: 'Technical Author', Office: 'London', Age: 27, Startdate: '2023-05-07', Salary: '$145,000' },
    { id: 2, Name: 'Gavin Cortez', Position: 'Technical Author', Office: 'London', Age: 27, Startdate: '2023-05-07', Salary: '$145,000' },
    { id: 3, Name: 'Gloria Little', Position: 'Technical Author', Office: 'London', Age: 27, Startdate: '2023-05-07', Salary: '$145,000' },
    { id: 4, Name: 'Lael Greer', Position: 'Technical Author', Office: 'London', Age: 27, Startdate: '2023-05-07', Salary: '$145,000' },
    { id: 5, Name: 'Tiger Nixon', Position: 'Technical Author', Office: 'London', Age: 37, Startdate: '2023-05-07', Salary: '$145,000' },
    { id: 6, Name: 'Quinn Flynn', Position: 'Technical Author', Office: 'London', Age: 27, Startdate: '2023-05-07', Salary: '$145,000' },
    { id: 7, Name: 'Finn Camacho', Position: 'Technical Author', Office: 'London', Age: 27, Startdate: '2023-05-07', Salary: '$145,000' },
    { id: 8, Name: 'Radha', Position: 'Technical Author', Office: 'London', Age: 18, Startdate: '2023-05-07', Salary: '$145,000' },
    { id: 9, Name: 'Anju', Position: 'Technical Author', Office: 'London', Age: 59, Startdate: '2023-05-07', Salary: '$145,000' },
    { id: 10, Name: 'Seema', Position: 'Technical Author', Office: 'London', Age: 27, Startdate: '2023-05-07', Salary: '$145,000' },
    { id: 11, Name: 'Aaru', Position: 'Technical Author', Office: 'London', Age: 27, Startdate: '2023-05-07', Salary: '$145,000' },
    { id: 12, Name: 'Janvi', Position: 'Technical Author', Office: 'London', Age: 27, Startdate: '2023-05-07', Salary: '$145,000' },
    { id: 13, Name: 'Aayushi', Position: 'Technical Author', Office: 'London', Age: 27, Startdate: '2023-05-07', Salary: '$145,000' },
    { id: 14, Name: 'manish', Position: 'Technical Author', Office: 'London', Age: 27, Startdate: '2023-05-07', Salary: '$145,000' },
    { id: 15, Name: 'Arun', Position: 'Technical Author', Office: 'London', Age: 27, Startdate: '2023-05-07', Salary: '$145,000' },
    { id: 16, Name: 'Vijay', Position: 'Technical Author', Office: 'London', Age: 27, Startdate: '2023-05-07', Salary: '$145,000' },
    { id: 17, Name: 'Vinayak', Position: 'Technical Author', Office: 'London', Age: 27, Startdate: '2023-05-07', Salary: '$145,000' },
    { id: 18, Name: 'Arjun', Position: 'Technical Author', Office: 'London', Age: 57, Startdate: '2023-05-07', Salary: '$145,000' },
    { id: 19, Name: 'Raghav', Position: 'Technical Author', Office: 'London', Age: 27, Startdate: '2023-05-07', Salary: '$145,000' },
    { id: 20, Name: 'shubham', Position: 'Technical Author', Office: 'London', Age: 27, Startdate: '2023-05-07', Salary: '$145,000' },
    { id: 21, Name: 'Hariom', Position: 'Technical Author', Office: 'London', Age: 27, Startdate: '2023-05-07', Salary: '$145,000' },
    { id: 22, Name: 'Himanshi', Position: 'Technical Author', Office: 'London', Age: 27, Startdate: '2023-05-07', Salary: '$145,000' },
    { id: 23, Name: 'Manoj', Position: 'Technical Author', Office: 'London', Age: 55, Startdate: '2023-05-07', Salary: '$145,000' },
    { id: 24, Name: 'Sonu', Position: 'Technical Author', Office: 'London', Age: 27, Startdate: '2023-05-07', Salary: '$145,000' },
    { id: 25, Name: 'Alka', Position: 'Technical Author', Office: 'London', Age: 27, Startdate: '2023-05-07', Salary: '$145,000' },



  ];


  const [searchText, setSearchText] = React.useState("");
  const [tableData, setTableData] = React.useState(DATASET);
  const [columns] = React.useState([
    { headerName: "ID", field: "id", width: 120 },
    { headerName: "Name", field: "Name", width: 130 },
    { headerName: "Position", field: "Position", width: 130 },
    { headerName: "Office", field: "Office", width: 130 },
    { headerName: "Age", field: "Age", width: 130 },
    { headerName: "Startdate", field: "Startdate", width: 130 },
    { headerName: "Salary", field: "Salary", width: 130 },
]);

  const requestSearch = (searchValue) => {
    const searchRegex = new RegExp(`.*${searchValue}.*`, "ig");
    const filteredRows = DATASET.filter((o) => {
      return Object.keys(o).some((k) => {
        return searchRegex.test(o[k].toString());
      });
    });
    setTableData(filteredRows);
  };

  const cancelSearch = () => {
    setSearchText("");
    requestSearch(searchText);
  };

  return (
    <div className='container' style={{ height: 500, width: '100%' }}>
      <DataGrid
        columns={columns}
        rows={tableData}        
        column={column}
        initialState={{
          pagination: {
            paginationModel: { pageSize: 5, page: 0 },
          },
        }}
        components={{Toolbar: CustomToolbar}}
        componentsProps={{
          toolbar: {
            value: searchText,
            onChange: (searchVal) => requestSearch(searchVal),
            onCancelSearch: () => cancelSearch()
          }
        }}
        
      />
    </div>
  );
}









