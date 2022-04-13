import * as React from "react";
import SideBar from "../../components/siderBar/SideBar";
import "./bankreconciliation.css";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import { useState } from "react";
import { Button, Grid, Paper } from "@material-ui/core";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";


const BankReconciliationForm = () => {
  const btnStyle = {
    margin: "0px 0px",
    width: 300,
  };
  const [isSelected, setIsSelected] = useState(false);
  const [selectedFile, setSelectedFile] = useState();
  const date = new Date().toISOString().slice(0, 10);

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsSelected(true);
  };
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 1000,
    margin: "80px auto",
  };

  return (
    <>
      <SideBar />

      <div className="bankreconciliation">
        <div className="dateText">
          <Box>Bank Reconciliation</Box>
        </div>
        <Grid>
          <Paper elevation={10} style={paperStyle}>
            <div className="bankreconciliationWrapper">
              <div className="leftConciliation">
                <Box>
                  <div className="datecontent">
                    <div className="lefttitle">
                      <span className="textSpan">
                        <Stack component="form" noValidate spacing={3}>
                          <TextField
                            id="date"
                            label="Select Date"
                            type="date"
                            defaultValue={date}
                            sx={{ width: 180,height:40 }}
                            InputLabelProps={{
                              shrink: true,
                            }}
                          />
                        </Stack>
                      </span>
                    </div>
                  </div>
                </Box>
                <Box>
                  <div className="leftcontent">
                    <div className="lefttitle">
                      <Button variant='text' className="textSpan">MOBICORE AMOUNT</Button>
                    </div>
                    <div className="amount">
                      <span>xxxx</span>
                    </div>
                  </div>
                </Box>
                <Box>
                  <div className="leftcontent">
                    <div className="lefttitle">
                      <Button variant="text" className="textSpan">MISSED ON BANK</Button>
                    </div>
                    <div className="amount">
                      <span>xxxx</span>
                    </div>
                  </div>
                </Box>
                <Box>
                  <div className="leftcontentWrapper">
                    <div className="lefttitle">
                      <span className="textSpan">TRANSFER AMOUNT</span>
                    </div>
                    <div className="transferamount">
                      <Box
                        component="form"
                        sx={{
                          "& > :not(style)": {
                            m: 1,
                            width: "23ch",
                            height: "12ch",
                          },
                        }}
                        noValidate
                        autoComplete="off"
                      >
                       <TextField id="standard-basic" label="Amount" variant="standard" />
                      </Box>
                    </div>
                  </div>
                </Box>
              </div>
              <div className="centerConciliation">
                <div className="centercontent">
                  <div className="selectfile">
                    <Input
                      type="file"
                      name="file"
                      className="btn bg-primary"
                      onChange={changeHandler}
                    />
                    {isSelected ? (
                      <div>
                        <p style={{ color: "green", padding: "5px" }}>
                          Filename: {selectedFile.name}
                        </p>
                      </div>
                    ) : (
                      <p></p>
                    )}
                  </div>
                </div>
                <Box>
                  <div className="delta">
                    <div className="leftcontent">
                      <div className="lefttitledelta">
                        <Button variant="text" className="textSpan">DELTA</Button>
                      </div>
                      <div className="amount">
                        <span>xxxx</span>
                      </div>
                    </div>
                  </div>
                </Box>
              </div>
              <div className="rightConciliation">
                <Box>
                  <div className="uploadcontent">
                    <div className="lefttitle">
                      <label>
                        <input style={{ display: "none" }} type="file" />
                        <Button variant="contained" color="default">
                          Upload
                        </Button>
                      </label>
                    </div>
                  </div>
                </Box>
                <Box>
                  <div className="leftcontent">
                    <div className="lefttitle">
                      <Button variant="text" className="textSpan">BANK AMOUNTS</Button>
                    </div>
                    <div className="amount">
                      <span>xxxx</span>
                    </div>
                  </div>
                </Box>
                <Box>
                  <div className="leftcontent">
                    <div className="lefttitle">
                      <Button variant="text" className="textSpan">MISSED ON MOBICORE</Button>
                    </div>
                    <div className="amount">
                      <span>xxxx</span>
                    </div>
                  </div>
                </Box>
                <Box>
                  <div className="leftcontentWrapper">
                    <div className="lefttitle">
                      <span className="textSpan">BANK REFERENCE</span>
                    </div>
                    <div className="transferamount">
                      <Box
                        component="form"
                        sx={{
                          "& > :not(style)": {
                            m: 1,
                            width: "23ch",
                            height: "12ch",
                          },
                        }}
                        noValidate
                        autoComplete="off"
                      >
                       <TextField id="standard-basic" label="Reference No" variant="standard" />
                      </Box>
                    </div>
                  </div>
                </Box>
              </div>
            </div>
            <div className="btnSubmit">
              <Button
                type="submit"
                color="pain"
                variant="contained"
                fullWidth
                style={btnStyle}
                // disabled={props.isSubmitting}
              >
                Transfer Initiate
              </Button>
            </div>
          </Paper>
        </Grid>
      </div>
      <SideBar />
    </>
  );
};

export default BankReconciliationForm;
