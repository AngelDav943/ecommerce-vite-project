
import {
    AppBar,
    Box,
    Toolbar,
    Typography,
    Avatar,
    Container,
    TextField,
    InputAdornment,
    Tooltip,
    Menu,
    MenuItem
} from '@mui/material';

import { useNavigate, Link } from 'react-router-dom';
import { useInfo } from '../context/useInfo';

import TextButton from './TextButton';

import { Search, Send, ShoppingCart } from '@mui/icons-material';
import { useState } from 'react';

export default function SearchAppBar() {
    const { user, logout } = useInfo();

    const navigate = useNavigate();
    function home() {
        navigate('/')
    }

    const [avatarMenu, setAvatarMenu] = useState(null);
    const handleOpenUserMenu = (e) => {
        setAvatarMenu(e.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAvatarMenu(null);
    };

    const [searchInput, setSearchInput] = useState("");
    function onKeyPress(event) {
        setSearchInput(event.target.value)
        if (event.keyCode == 13) startSearch()
    }

    function startSearch() {
        // console.log("search!!", searchInput)
        if (searchInput.replace(/ /g, "") != "") navigate(`/search?query=${searchInput}`, { replace: true })
    }

    return (
        <Box sx={{ flexGrow: 1, position: "static" }}>
            <AppBar>
                <Toolbar sx={{ width: "100%", maxWidth: "750px", margin: "0 auto" }}>
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

                    <Container sx={{
                        display: { sm: 'none', xs: 'inherit' },
                        flexGrow: 1
                    }} />

                    <TextField
                        variant='standard'
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Search />
                                </InputAdornment>
                            ),
                            endAdornment: (
                                <InputAdornment position="end" sx={{ cursor: 'pointer' }} onClick={() => startSearch()}>
                                    <Send sx={{ color: 'white', padding: '0.05rem' }} />
                                </InputAdornment>
                            ),
                        }}

                        sx={{
                            display: { sm: 'inherit', xs: 'none' },
                            margin: "0 3.5rem",
                            flexGrow: 1
                        }}

                        onKeyUp={(e) => onKeyPress(e)}
                    />

                    <Link to='/cart'>
                        <ShoppingCart sx={{ color: 'white', margin: "0 1rem" }} />
                    </Link>

                    {user ?
                        <>
                            <Tooltip>
                                <Avatar alt={user.displayName} src={user.photoURL} onClick={handleOpenUserMenu} />
                            </Tooltip>
                            <Menu
                                id="menu-appbar"
                                anchorEl={avatarMenu}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(avatarMenu)}
                                onClose={handleCloseUserMenu}
                            >
                                <MenuItem onClick={() => { handleCloseUserMenu(); logout(); }}>
                                    <Typography textAlign="center">Log out</Typography>
                                </MenuItem>
                            </Menu>

                        </>
                        :
                        <TextButton label='Log in' to='/login' sx={{ color: 'white' }} />
                    }

                </Toolbar>
            </AppBar>
        </Box>
    );
}
