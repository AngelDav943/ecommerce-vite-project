import { Box, Stack, Typography, TextField, Paper } from '@mui/material';
import './login.css'
import { useLocation, useNavigate } from 'react-router-dom';
import { useInfo } from '../context/useInfo';
import TextButton from '../components/TextButton';
import useForm from '../hooks/useForms';

export default function () {
    const { googleSignIn, setUser, emailSignIn } = useInfo();
    const { changeData, resetData, info } = useForm({
        email: "",
        password: ""
    });

    const navigate = useNavigate();
    const location = useLocation();

    const addLoginUser = (e) => {
        setUser(e);

        if (location.state["last"]) {
            navigate(location.state["last"])
            return;
        }
        navigate("/");
    }

    return <Stack className='login' justifyContent="center" alignItems="strech" gap={"1rem"}>
        <TextField
            type='email'
            label="Email"
            value={info.email}
            onChange={({ target }) => changeData("email", target.value)}
        />
        <TextField
            label="Password"
            type='password'
            value={info.password}
            onChange={({ target }) => changeData("password", target.value)}
        />
        <TextButton label='Log in' variant="contained" onClick={() => {
            addLoginUser(info);
            resetData();
        }}/>
        <TextButton label='Sign in with Google' variant="contained" onClick={() => googleSignIn()}/>
        <TextButton label='Register' variant="outlined" to='/register'/>
    </Stack>
}