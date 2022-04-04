import * as React from "react";
import SideBar from "../../components/siderBar/SideBar";
import "./bankreconciliation.css";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import { useState } from "react";
import { Button, Grid, Paper } from "@material-ui/core";
const BankReconciliationForm = () => {
  const [isSelected, setIsSelected] = useState(false);
  const [selectedFile, setSelectedFile] = useState();

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsSelected(true);
  };
  const paperStyle = {
    padding: 20,
    height: "50vh",
    width: 780,
    margin: "80px auto",
  };

  return (
    <>
      <SideBar />

      <div className="bankreconciliation">
        <Grid>
          <Paper elevation={10} style={paperStyle}>
            <div className="bankreconciliationWrapper">
              <div className="leftConciliation">
                <Box>Mon, 04-04-2022</Box>
                <Box>
                  <div className="leftcontent">
                      <span>MOBICORE AMOUNTS</span>
                      <span>xxxx</span>
                  </div>
                </Box>
                <Box>
                  <div className="leftcontent">
                      <span>MISED ON BANK</span>
                      <span>xxxx</span>
                  </div>
                </Box>
                <Box>
                  <div className="leftcontent">
                      <span>MOBICORE AMOUNTS</span>
                      <span>xxxx</span>
                  </div>
                </Box>
              </div>
              <div className="centerConciliation">
                <Box>
                  <div>
                    <Input
                      type="file"
                      name="file"
                      className="btn bg-primary"
                      onChange={changeHandler}
                    />
                    {isSelected ? (
                      <div>
                        <p>Filename: {selectedFile.name}</p>
                      </div>
                    ) : (
                      <p></p>
                    )}
                    <div>
                      <Box>
                        <label>
                          <input style={{ display: "none" }} type="file" />
                          <Button variant="contained" color="default">
                            Upload
                          </Button>
                        </label>
                      </Box>
                    </div>
                  </div>
                </Box>

                <Box>Date</Box>
              </div>
              <div className="rightConciliation">
                <Box>Date</Box>
              </div>
            </div>
          </Paper>
        </Grid>
      </div>
    </>
  );
};

export default BankReconciliationForm;
