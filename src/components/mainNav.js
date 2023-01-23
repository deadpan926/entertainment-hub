import * as React from 'react';
// import { makeStyles } from '@mui/material';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import SearchIcon from '@mui/icons-material/Search';
import MovieIcon from '@mui/icons-material/Movie';
import TvIcon from '@mui/icons-material/Tv';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material/styles';


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});
// const useStyles = makeStyles({
//     root: {
//         width: 500,
//         position: 'fixed',
//         bottom: 0,
//         backgroundColor: "#2d313a",
//         zIndex: 100,
//     },
// }
// );


export default function SimpleBottomNavigation() {
    const [value, setValue] = React.useState(0);
    const navigate = useNavigate();
    useEffect(() => {
        if (value === 0) navigate('/');
        else if(value === 1) navigate("/movies");
        else if(value === 2) navigate("/series");
        else if(value === 3) navigate("/search");
    }, [value,navigate]);
  return (
    <Box sx={{ width: '100%',
            position: 'fixed',
            bottom: 0,
            backgroundColor: "#2d313a",
            zIndex: 100,}}>
      <ThemeProvider theme={darkTheme}>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{
          ".MuiBottomNavigation-root": {
            color: "#007A78"
          }
      }}
        showLabels
        // className={classes.root}
      >
        <BottomNavigationAction  label="Trending" icon={<WhatshotIcon />} />
        <BottomNavigationAction  label="Movies" icon={<MovieIcon />} />
        <BottomNavigationAction  label="TV Series" icon={<TvIcon />} />
        <BottomNavigationAction  label="Search" icon={<SearchIcon />} />
      </BottomNavigation>
      </ThemeProvider>
    </Box>
  );
}
