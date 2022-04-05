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
    margin: "4px 0px",
    width: 300,
  };
  const [isSelected, setIsSelected] = useState(false);
  const [selectedFile, setSelectedFile] = useState();

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsSelected(true);
  };
  const paperStyle = {
    padding: 20,
    height: "65vh",
    width: 1000,
    margin: "80px auto",
  };

  return (
    <>
      <SideBar />

      <div className="bankreconciliation">
        <div className="dateText">
          <Box>Mon, 04-04-2022</Box>
        </div>
        <Grid>
          <Paper elevation={10} style={paperStyle}>
            <div className="bankreconciliationWrapper">
              <div className="leftConciliation">
                <Box>
                  <div className="rightcontent">
                    <div className="lefttitle">
                      <span className="textSpan">
                        <Stack component="form" noValidate spacing={3}>
                          <TextField
                            id="date"
                            label="Select Date"
                            type="date"
                            defaultValue="2017-05-24"
                            sx={{ width: 220 }}
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
                      <span className="textSpan">MOBICORE AMOUNT</span>
                    </div>
                    <div className="amount">
                      <span>xxxx</span>
                    </div>
                  </div>
                </Box>
                <Box>
                  <div className="leftcontent">
                    <div className="lefttitle">
                      <span className="textSpan">MISSED ON BANK</span>
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
                        <TextField
                          id="outlined-basic"
                          label="Amount"
                          variant="outlined"
                        />
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
                        <span className="textSpan">DELTA</span>
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
                  <div className="rightcontent">
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
                      <span className="textSpan">BANK AMOUNTS</span>
                    </div>
                    <div className="amount">
                      <span>xxxx</span>
                    </div>
                  </div>
                </Box>
                <Box>
                  <div className="leftcontent">
                    <div className="lefttitle">
                      <span className="textSpan">MISSED ON MOBICORE</span>
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
                        <TextField
                          id="outlined-basic"
                          label="Reference No"
                          variant="outlined"
                        />
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
    </>
  );
};

export default BankReconciliationForm;
