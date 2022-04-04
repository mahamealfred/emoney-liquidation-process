import React from 'react';
import './topbar.css';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Topbar = () => {
  return (
    <div className="topbar">
        <div className="topbarWrapper">
            <div className="topLeft">
            <img src="../../Assets/images/mobicashLogo.jpg" alt="" className="topAvatar" />
            </div>
            <div className="topCenter">
            <span className="centerText">
            eMoney Liquidation Process
             </span>
            </div>
            <div className="topRight">
            <Stack spacing={2} direction="row">
            <Button variant="text">BEN</Button>
           <Button variant="outlined">Logout</Button>
           </Stack>
            </div>

        </div>

    </div>
  )
}

export default Topbar