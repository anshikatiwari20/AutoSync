/* eslint-disable jsx-a11y/img-redundant-alt */
import { DataGrid } from '@mui/x-data-grid';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import man1 from '../../Images/man1.jpg';
import man2 from '../../Images/man2.jpg';
import man3 from '../../Images/man3.jpg';
import man4 from '../../Images/man4.jpg';
import woman1 from '../../Images/woman1.jpg';
import woman2 from '../../Images/woman2.jpg';
import './datatable.scss';

// Replace this data with your own
const userData = [
    {
        id: '48992847evhe848455',
        username: 'Jack456',
        email: 'jack4958@gmail.com',
        image: man1,
        status: 'active',
        age: '25',
    },
    {
        id: '3857843954dgg485949',
        username: 'Dravid_002',
        email: 'dravid489@gmail.com',
        image: man2,
        status: 'passive',
        age: '30',
    },
    {
        id: '3i5ed45u4i3o588999385',
        username: 'John_49',
        email: 'john.598@gmail.com',
        image: man3,
        status: 'active',
        age: '19',
    },
    {
        id: '49867584hfhj48685493935',
        username: 'Ruby_488',
        email: 'ruby039@gmail.com',
        image: woman1,
        status: 'active',
        age: '23',
    },
    {
        id: '498675843hf4ihb5ui3oi55',
        username: 'Devin485',
        email: 'devin278@gmail.com',
        image: man4,
        status: 'passive',
        age: '30',
    },
    {
        id: '4086rht55o44956u59994943',
        username: 'Andrea588',
        email: 'andrea009@gmail.com',
        image: woman2,
        status: 'active',
        age: '21',
    },
    {
        id: '485hhgbr49u49t5t4t5678657',
        username: 'Johnn434',
        email: 'john03434@gmail.com',
        image: man2,
        status: 'passive',
        age: '30',
    },
    {
        id: '495jfr5894r03406907895804',
        username: 'Dilvib1233',
        email: 'dilvibhasanjohn1233@gmail.com',
        image: man3,
        status: 'active',
        age: '19',
    },
    {
        id: 't9y6678976586u5865y5hu5u586',
        username: 'Lucas0984',
        email: 'lucashossel@gmail.com',
        image: man4,
        status: 'passive',
        age: '26',
    },
    {
        id: '455656j5t5i44i39u939897',
        username: 'Ruby_488',
        email: 'ruby039@gmail.com',
        image: woman1,
        status: 'active',
        age: '21',
    },
    {
        id: '49786u58494389r5684i9',
        username: 'Lucas0984',
        email: 'lucashossel@gmail.com',
        image: man4,
        status: 'passive',
        age: '26',
    },
    {
        id: '4958yh85u493940368784',
        username: 'Johnn434',
        email: 'john03434@gmail.com',
        image: man2,
        status: 'passive',
        age: '30',
    },
];

function DataTable() {
    const [data, setData] = useState(userData);

    const handleDlt = (id) => {
        setData(data.filter((item) => item.id !== id));
    };

    const columns = [
        {
            field: 'id',
            headerName: 'ID',
            width: 310,
            renderCell: (param) => (
                <div className="userr">
                    <img src={param.row.image} alt="User Image" className="userr_image" />
                    {param.row.id}
                </div>
            ),
        },
        {
            field: 'username',
            headerName: 'Username',
            width: 180,
        },
        { field: 'email', headerName: 'Email', width: 280 },
        {
            field: 'status',
            headerName: 'Status',
            width: 150,
            renderCell: (param) => (
                <div className={`status ${param.row.status}`}>{param.row.status}</div>
            ),
        },
        { field: 'age', headerName: 'Age', width: 120 },
        {
            field: 'action',
            headerName: 'Action',
            width: 170,
            renderCell: (params) => (
                <div className="actionn">
                    <Link to={params.row.id}>
                        <button type="button" className="view_btn">
                            View
                        </button>
                    </Link>
                    <button
                        type="button"
                        className="delete_btn"
                        onClick={() => handleDlt(params.row.id)}
                    >
                        Delete
                    </button>
                </div>
            ),
        },
    ];

    return (
        <div className="data_table">
            <DataGrid
                className="data_grid"
                rows={data}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[10]}
                checkboxSelection
            />
        </div>
    );
}

export default DataTable;
