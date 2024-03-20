import { Button, Stack, Typography, Skeleton, Container } from '@mui/material';
import { useInfo } from '../context/useInfo';
import './product.css'
import { useNavigate, useParams } from 'react-router-dom';

import TextButton from '../components/TextButton';
import Preview from '../components/Preview';
import { useEffect } from 'react';
import useProduct from '../hooks/useProduct';



export default function () {
    const { user } = useInfo();
    const params = useParams();

    const { products, getProduct } = useProduct();
    const product = products[0];

    const navigate = useNavigate();

    function onBuy() {
        if (user == null) navigate("/login", { state: { last: `/product/${params["id"]}` } })
    }

    function PriceDisplay({ sx }) {
        return <Stack sx={{ flexGrow: 1, flexBasis: "200px", ...sx }}>
            {product == null && <>
                <Skeleton variant='text' sx={{ fontSize: "4rem" }} />
                <Skeleton variant='text' sx={{ fontSize: "2rem" }} />
            </>}
            {product && <>
                <Typography variant='h3'>{product.title}</Typography>
                <br />
                <Typography variant='h5'>${product.price}</Typography>
            </>}
            <br />
            <TextButton variant='contained' label='Buy' onClick={() => onBuy()} />
        </Stack>;
    }

    useEffect(() => {
        getProduct(params["id"])
    }, [])

    return <Stack className='product' direction='row' justifyContent="space-between" flexWrap="wrap">
        <Container sx={{ flexGrow: 1 }}>
            <br />
            <Typography>ID: {params["id"]}</Typography>
            <br />
        </Container>
        <Container sx={{ flexGrow: 1, flexBasis: "100px" }}>
            <Container sx={{ fontSize: "4rem", display: { xs: 'contents', sm: 'none' } }}>
                {product == null ?
                    <Skeleton variant='text' />
                    : <Typography variant='h3'>{product.title}</Typography>
                }
                <br />
            </Container>
            <Preview />
            {/* {product == null && } */}
            <br />
            <Stack sx={{ flexGrow: 1, display: { xs: 'inherit', sm: 'none' } }}>
                <Container sx={{ fontSize: "4rem", display: { xs: 'contents', sm: 'none' } }}>
                    {product == null ?
                        <Skeleton variant='text' sx={{ fontSize: "2rem" }}  />
                        : <Typography variant='h5'>${product.price}</Typography>
                    }
                    <br />
                </Container>
                <TextButton
                    sx={{ width: "100%" }}
                    variant='contained'
                    label='Buy'
                    onClick={() => onBuy()}
                />
            </Stack>
            {product == null && <>
                <Skeleton variant='text' />
                <Skeleton variant='text' />
                <Skeleton variant='text' />
                <Skeleton variant='text' />
            </>}
        </Container>
        <PriceDisplay onBuy={onBuy} sx={{ display: { xs: 'none', sm: 'inherit' } }} />
        {/* {JSON.stringify(products)} */}
    </Stack>
}

