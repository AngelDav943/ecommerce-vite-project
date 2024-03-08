
import AppBar from '@mui/material/AppBar';
import { Box, Toolbar, Typography, Avatar, Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useInfo } from '../context/useInfo';

import { Search } from '@mui/icons-material';

export default function SearchAppBar() {
    const { user } = useInfo();

    const navigate = useNavigate();
    function home() {
        navigate('/')
    }

    function loginClick() {
        navigate('/login')
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

                    <Container sx={{flexGrow: 1}}>
                        <Search />

                    </Container>

                    {user ?
                        <Avatar alt='John doe' src={user.photoURL} />
                        : <Button onClick={() => loginClick()} sx={{ my: 2, color: 'white', display: 'block' }}>Log in</Button>
                    }

                </Toolbar>
            </AppBar>
        </Box>
    );
}