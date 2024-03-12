import { Box, Stack, Typography, TextField, Paper } from '@mui/material';
import './login.css'
import { useLocation, useNavigate } from 'react-router-dom';
import { useInfo } from '../context/useInfo';
import TextButton from '../components/TextButton';

export default function () {
    const { googleSignIn } = useInfo();

    return <Stack className='login' justifyContent="center" alignItems="strech" gap={"1rem"}>
        <TextField
            type='text'
            label="Username"
        />
        <TextField
            label="Password"
            type='password'
        />
        <TextButton label='Log in' variant="contained"/>
        <TextButton label='Sign in with Google' variant="contained" onClick={() => googleSignIn()}/>
        <TextButton label='Register' variant="outlined" to='/register'/>
    </Stack>
}