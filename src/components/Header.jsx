
import AppBar from '@mui/material/AppBar';
import { Box, Toolbar, Typography, Avatar, Container, TextField, InputAdornment } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useInfo } from '../context/useInfo';

import TextButton from './TextButton';

import { Search } from '@mui/icons-material';

export default function SearchAppBar() {
    const { user } = useInfo();

    const navigate = useNavigate();
    function home() {
        navigate('/')
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar sx={{ width: "100%", maxWidth: "600px", margin: "0 auto" }}>
                    <Typography
                        onClick={() => home()}
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{
                            minWidth: "fit-content",
                            cursor: "pointer"
                            // display: { xs: 'none', sm: 'block' }
                        }}
                    >
                        LOGO
                    </Typography>

                    <Container sx={{flexGrow:1}}/>

                    {/* <TextField
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Search />
                                </InputAdornment>
                            ),
                        }}
                        sx={{ margin:"0 2rem", flexGrow: 1 }}
                        label="Search"
                    /> */}

                    {user ?
                        <Avatar alt='John doe' src={user.photoURL} />
                        : <TextButton label='Log in' to='/login' sx={{ color: 'white' }}/>
                    }

                </Toolbar>
            </AppBar>
        </Box>
    );
}