import { Button, Stack, Typography, Skeleton, Container } from '@mui/material';
import { useInfo } from '../context/useInfo';
import './product.css'
import { useNavigate, useParams } from 'react-router-dom';

import TextButton from '../components/TextButton';
import Preview from '../components/Preview';



export default function () {
    const { user } = useInfo();
    const params = useParams();

    const navigate = useNavigate();

    function onBuy() {
        if (user == null) navigate("/login", { state: { last: `/product/${params["id"]}` } })
    }

    return <Stack className='product' direction='row' justifyContent="space-between" flexWrap="wrap">
        <Container sx={{ flexGrow: 1 }}>
            <br />
            <Typography>ID: {params["id"]}</Typography>
            <br />
        </Container>
        <Container sx={{ flexGrow: 1, flexBasis: "100px" }}>
            <Skeleton
                variant='text'
                sx={{ fontSize: "4rem", display: { xs: 'inherit', sm: 'none' } }}
            />
            <Preview />
            <br />
            <Stack sx={{ flexGrow: 1, display: { xs: 'inherit', sm: 'none' } }}>
                <Skeleton variant='text' sx={{ fontSize: "2rem" }} />
                <TextButton
                    sx={{ width: "100%" }}
                    variant='contained'
                    label='Buy'
                    onClick={() => onBuy()}
                />
            </Stack>
            <Skeleton variant='text' />
            <Skeleton variant='text' />
            <Skeleton variant='text' />
            <Skeleton variant='text' />
        </Container>
        <PriceDisplay onBuy={onBuy} sx={{ display: { xs: 'none', sm: 'inherit' } }} />
    </Stack>
}

function PriceDisplay({ onBuy, sx }) {
    return <Stack sx={{ flexGrow: 1, flexBasis: "200px", ...sx }}>
        <Skeleton variant='text' sx={{ fontSize: "4rem" }} />
        <Skeleton variant='text' sx={{ fontSize: "2rem" }} />
        <br />
        <TextButton variant='contained' label='Buy' onClick={() => onBuy()} />
    </Stack>;
}
