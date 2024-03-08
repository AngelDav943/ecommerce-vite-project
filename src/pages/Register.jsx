import { Box, Stack, Typography, Button, TextField, Paper } from '@mui/material';
import './login.css'
import { useNavigate } from 'react-router-dom';

export default function () {


    const navigate = useNavigate();

    return <Stack className='login' justifyContent="center" alignItems="strech" gap={"1rem"}>

        <TextField
            type='text'
            label="Username"
        />
        <TextField
            type='email'
            label="Email address"
        />
        <TextField
            label="Password"
            type='password'
        />
        <Button variant="contained" className='submit'>
            Register
        </Button>
        <Button variant="outlined" className='register' onClick={() => navigate('/login')}>
            Log in
        </Button>
    </Stack>
}