import React from 'react';
import SideBar from '../../components/siderBar/SideBar';
import './listtransfer.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';

function createData(date, service, amount, banktransaction, authorisation) {
  return { date, service, amount, banktransaction, authorisation };
}

const rows = [
  createData('2020-04-04', 'CBHI collection', 500, 134, 'Cancel'),
  createData('2021-05-03', 'Tax Collecton', 1000, 'xxxx', 'Accept'),
  createData('2022-03-03', 'CBH Collection', 16.0, 'XXXX', 'Accept'),
  createData('2022-03-06', 'CBH Collection', 16.0, 'XXXX', 'Accept'),
  createData('2022-03-07', 'CBH Collection', 16.0, 'XXXX', 'Accept'),
  createData('2022-06-08', 'CBH Collection', 'xxxx', 'XXXX', 'Accept'),
  createData('2022-06-07', 'CBH Collection', 16.0, 'XXXX', 'Cancel'),
  createData('2022-06-08', 'CBH Collection', 'xxxx', 'XXXX', 'Accept'),
  createData('2020-04-04', 'CBHI collection', 500, 134, 'Cancel'),
  createData('2021-05-03', 'Tax Collecton', 1000, 'xxxx', 'Accept'),
  createData('2022-03-03', 'CBH Collection', 16.0, 'XXXX', 'Accept'),
  createData('2022-03-06', 'CBH Collection', 16.0, 'XXXX', 'Accept'),
 

];

const ListTrsansfer = () => {
  return (
      <>
      <SideBar/>
       <div className="listtransfer">
           <div className="dateDisplay">
               <Box component="div" sx={{ display: 'inline' }}>Monday 04-12-2022</Box>
           </div>
           <div className="tableDisplay">
        <DialogTitle >
            LIST OF TRANSFER TO BE AUTHORISED
        </DialogTitle>
       <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
        <caption>List of transfer to be authorised</caption>
        <TableHead>
          <TableRow>
            <TableCell>DATE</TableCell>
            <TableCell align="center">SERVICE</TableCell>
            <TableCell align="center">AMOUNT</TableCell>
            <TableCell align="center">BANK TRANSACTION</TableCell>
            <TableCell align="center">AUTHORISATION</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.date}
              </TableCell>
              <TableCell align="center">{row.service}</TableCell>
              <TableCell align="center">{row.amount}</TableCell>
              <TableCell align="center">{row.banktransaction}</TableCell>
              <TableCell align="center">{row.authorisation}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
       </div>
      </>
   
  )
}

export default ListTrsansfer