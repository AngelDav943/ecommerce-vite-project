import { Box, Stack, Typography, Button, TextField, Paper } from '@mui/material';
import './login.css'
import { useNavigate } from 'react-router-dom';
import { useInfo } from '../context/useInfo';

export default function () {
    const { googleSignIn } = useInfo();
    const navigate = useNavigate();

    return <Stack className='login' justifyContent="center" alignItems="strech" gap={"1rem"}>

        <TextField
            type='text'
            label="Username"
        />
        <TextField
            label="Password"
            type='password'
        />
        <Button variant="contained" className='submit'>
            Log in
        </Button>
        <Button variant="contained" className='submit' onClick={() => googleSignIn()}>
            Sign in with Google
        </Button>
        <Button variant="outlined" className='register' onClick={() => navigate('/register')}>
            Register
        </Button>
    </Stack>
}