import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import { useEffect } from 'react';
import { Button } from '@mui/material';
import useAuth from '../../../hooks/useAuth';

const DashboardHome = () => {
    const { user } = useAuth()
    const [saveData, setSaveData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/savebmi')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setSaveData(data);
            })
    }, []);
    const exactData = saveData.filter(sd => sd.email === user.email);
    console.log(exactData);
    const handleDeleteUser = id => {
        const proceed = window.confirm('Are sure you want to delete the customer?');
        if (proceed) {
            const url = `http://localhost:5000/savebmi/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Delete successfully');
                        const remainingData = saveData.filter(order => order._id !== id);
                        setSaveData(remainingData);
                    }
                })
        }
    }
    return (
        <div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Date</TableCell>
                            <TableCell>BMI Value</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {exactData.map((row) => (
                            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell>{row.email}</TableCell>
                                <TableCell>{row.date}</TableCell>
                                <TableCell>{row.value}</TableCell>
                                <TableCell>{row.bmiStatus}</TableCell>
                                <TableCell>
                                    <Button variant="contained" onClick={() => handleDeleteUser(row._id)} sx={{ bgcolor: 'red' }}>Delete</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default DashboardHome;