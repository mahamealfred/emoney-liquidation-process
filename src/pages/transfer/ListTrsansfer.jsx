import React, { useState } from "react";
import SideBar from "../../components/siderBar/SideBar";
import "./listtransfer.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

function createData(date, service, amount, banktransaction, authorisation) {
  return { date, service, amount, banktransaction, authorisation };
}

const rows = [
  createData("2020-04-04", "CBHI collection", 500, 134, "Cancel"),
  createData("2021-05-03", "Tax Collecton", 1000, "xxxx", "Accept"),
  createData("2022-03-03", "CBH Collection", 16.0, "XXXX", "Accept"),
  createData("2022-03-06", "CBH Collection", 16.0, "XXXX", "Accept"),
  createData("2022-03-07", "CBH Collection", 16.0, "XXXX", "Accept"),
  createData("2022-06-08", "CBH Collection", "xxxx", "XXXX", "Accept"),
  createData("2022-06-07", "CBH Collection", 16.0, "XXXX", "Cancel"),
  createData("2022-06-08", "CBH Collection", "xxxx", "XXXX", "Accept"),
  createData("2020-04-04", "CBHI collection", 500, 134, "Cancel"),
  createData("2021-05-03", "Tax Collecton", 1000, "xxxx", "Accept"),
  createData("2022-03-03", "CBH Collection", 16.0, "XXXX", "Accept"),
  createData("2022-03-06", "CBH Collection", 16.0, "XXXX", "Accept"),
];

const authorizations = [
  {
    value: "Accept",
    label: "Accept",
  },
  {
    value: "Cancel",
    label: "Cancel",
  },
];

const ListTrsansfer = () => {
  const [authorization, setAuthorization] = useState("Select ...");
  // const [date,setDate]=useState( new Date().toISOString().slice(0, 10))
  const date = new Date().toISOString().slice(0, 10);

  const handleChange = (event) => {
    setAuthorization(event.target.value);
  };
  // useEffect(()=>{
  //  function fetchDate(){
  //    getCurrentDate()
  //  }
  //  fetchDate()
  // },[])

  return (
    <>
      <SideBar />
      <div className="listtransfer">
        <div className="dateDisplay">
          <div className="leftdatecontent">
            <Box component="div" sx={{ display: "inline" }}>
              <Box>
                <div className="datecontent">
                  <Stack component="form" noValidate spacing={3}>
                    <TextField
                      id="date"
                      label="Select Date"
                      type="date"
                      defaultValue={date}
                      sm={{}}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </Stack>
                </div>
              </Box>
            </Box>
          </div>
          <div className="rightdatecontent">
          <Box component="div" sx={{ display: "inline" }}>
              <Box>
                <div className="datecontent">
                  <Stack component="form" noValidate spacing={3}>
                  <ButtonGroup variant="text" aria-label="text button group">
                <Button>Generate PDF</Button>
                <Button>Generate Excel</Button>
              </ButtonGroup>
                  </Stack>
                </div>
              </Box>
            </Box>
          </div>
        </div>
        <div className="tableDisplay">
          <DialogTitle>LIST OF TRANSFER TO BE AUTHORISED</DialogTitle>
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
                    <TableCell align="center">
                      {" "}
                      <Box
                        component="form"
                        sx={{
                          "& .MuiTextField-root": { m: 0.5, width: "15ch" },
                        }}
                        noValidate
                        autoComplete="off"
                      >
                        <div>
                          <TextField
                            id="standard-select-currency"
                            select
                            label="Select"
                            value={authorization}
                            onChange={handleChange}
                            variant="standard"
                          >
                            {authorizations.map((option) => (
                              <MenuItem key={option.value} value={option.value}>
                                {option.label}
                              </MenuItem>
                            ))}
                          </TextField>
                        </div>
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
      <SideBar />
    </>
  );
};

export default ListTrsansfer;
