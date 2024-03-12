import { Box, Stack, Typography, TextField, Paper } from '@mui/material';
import './login.css'
import { useNavigate } from 'react-router-dom';
import TextButton from '../components/TextButton';

export default function () {

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
        <TextButton label='Register' variant="contained"/>
        <TextButton label='Log in' variant="outlined" to='/login'/>
    </Stack>
}