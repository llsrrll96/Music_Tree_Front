import React from 'react'
import { DataGrid } from '@material-ui/data-grid';

const column = [
    {field:'id', headerName:'ID', width:70},
    {field: 'firstName', headerName:'First name',width:130},
    {field: 'lastName', headerName:'Last name',width:130},
    {field: 'age',headerName:'Age',type:'number',witdh:90},
    {field: 'fullName',headerName : 'Full Name',
     description : 'this is desc',
     sortable: false,
     width: 160,
     valueGetter:(params)=>
            `${params.getValue('firstName')||''} ${params.getValue('lastName')||''} `
    },
           
]
const rows = [
    {id:1, lastName: 'snow', firstName : "jonh", age:36},
    {id:2, lastName: 'snow2', firstName : "jonh", age:36},
    {id:3, lastName: 'snow3', firstName : "jonh", age:36},
    {id:4, lastName: 'snow4', firstName : "jonh", age:36},
    {id:5, lastName: 'snow5', firstName : "jonh", age:36},
]

const DataGridDemo = () => {
    return (
        <div className="Admini-root" style={{height: 400, width:'80%' }}>
            <DataGrid rows={rows} columns={column} pageSize={2} checkboxSelection/>
        </div>
    )
}

export default DataGridDemo
