
import {  Pagination, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import React from 'react'

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

const CustomPagination = ({ setPage, numOfPages = 10}) => {

    const handlePageChange = (page) => {
        setPage(page);
        window.scroll(0,0);
    }
  
    return (
    <div style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: 10,
      }}>
        <ThemeProvider theme={darkTheme}>
        <Pagination count = {numOfPages} 
        onChange={(e) => handlePageChange(e.target.textContext)} 
        color="primary"
        />
        </ThemeProvider>
        
    </div>
  )
}

export default CustomPagination