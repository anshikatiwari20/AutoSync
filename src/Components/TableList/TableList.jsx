/* eslint-disable no-underscore-dangle */
import React from 'react';
import './tableList.scss';

// mui table
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

// import dummy image
import book1 from '../../Images/book1.jpg';
import book2 from '../../Images/book2.jpg';
import book3 from '../../Images/book3.jpg';
import book4 from '../../Images/book4.jpg';
import book5 from '../../Images/book5.jpg';

function TableList() {
    // Replace this data with your own
    const data = [
        {
            _id: 23423343,
            product: 'The Psychology of Money',
            image: book1,
            customer: 'John',
            date: '25 December, 2024',
            ammount: 70,
            method: 'Online Payment',
            status: 'Approved',
        },
        {
            _id: 235343343,
            product: 'Ikigai',
            image: book2,
            customer: 'Andrea',
            date: '23 December, 2022',
            ammount: 50,
            method: 'Cash On Delivery',
            status: 'Pending',
        },
        {
            _id: 234239873,
            product: 'Atomic Habits',
            image: book3,
            customer: 'Dravid',
            date: '1 January, 2025',
            ammount: 100,
            method: 'Online Payment',
            status: 'Approved',
        },
        {
            _id: 23423143,
            product: 'Harry Potter : The Complete Collection',
            image: book4,
            customer: 'Ruby',
            date: '2 January, 2025',
            ammount: 70,
            method: 'Cash On Delivery',
            status: 'Approved',
        },
        {
            _id: 123423343,
            product: 'The Alchemist',
            image: book5,
            customer: 'John',
            date: '2 January, 2025',
            ammount: 50,
            method: 'Online Payment',
            status: 'Approved',
        },
        {
            _id: 2333343,
            product: 'Ikigai',
            image: book2,
            customer: 'Jack',
            date: '28 December, 2024',
            ammount: 60,
            method: 'Cash On Delivery',
            status: 'Pending',
        },
    ];

    return (
        <TableContainer component={Paper} className="table_list">
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className="table_cell">Tracking Id</TableCell>
                        <TableCell className="table_cell">Product</TableCell>
                        <TableCell className="table_cell">Customer</TableCell>
                        <TableCell className="table_cell">Ammount</TableCell>
                        <TableCell className="table_cell">Date</TableCell>
                        <TableCell className="table_cell">Payment Status</TableCell>
                        <TableCell className="table_cell">Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row) => (
                        <TableRow key={row._id}>
                            <TableCell component="th" scope="row" className="table_cell">
                                <div className="product_idd">
                                    <img src={row.image} alt="product" className="product_img" />
                                    {row._id}
                                </div>
                            </TableCell>
                            <TableCell className="table_cell">{row.product}</TableCell>
                            <TableCell className="table_cell">{row.customer}</TableCell>
                            <TableCell className="table_cell">{row.ammount}</TableCell>
                            <TableCell className="table_cell">{row.date}</TableCell>
                            <TableCell className="table_cell">{row.method}</TableCell>
                            <TableCell className="table_cell">
                                <span className={`status ${row.status}`}>{row.status}</span>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default TableList;
