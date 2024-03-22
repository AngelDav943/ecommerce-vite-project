import { Button, Stack, Typography, Skeleton, Container } from '@mui/material';
import { useInfo } from '../context/useInfo';
import { useCart } from '../context/useCart';
import './product.css'
import { useNavigate, useParams } from 'react-router-dom';

import TextButton from '../components/TextButton';
import Preview from '../components/Preview';
import Gallery from '../components/Gallery';

import { useEffect } from 'react';
import useProduct from '../hooks/useProduct';

import { ShoppingCart } from '@mui/icons-material';


export default function () {
    const { user } = useInfo();
    const params = useParams();

    const { cart, addItem } = useCart();

    const { products, getProduct } = useProduct();
    const product = products[0];
    const images = (products[0] || {}).images;

    const navigate = useNavigate();

    function onBuy() {
        if (user == null) return navigate("/login", { state: { last: `/product/${params["id"]}` } })
    }

    function onCart() {
        if (user == null) navigate("/login", { state: { last: `/product/${params["id"]}` } })
        addItem(product)
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
        <Container sx={{ flexGrow: 1, flexBasis: "100px", display: { xs: 'none', sm: 'inherit' } }}>
            <Gallery images={images} />
        </Container>
        {/* <PriceDisplay onBuy={onBuy} sx={{ display: { xs: 'none', sm: 'inherit' } }} /> */}
        <Stack sx={{ flexGrow: 1, flexBasis: "200px" }}>
            {product == null && <>
                <Skeleton variant='text' sx={{ fontSize: "4rem" }} />
                <Skeleton variant='text' sx={{ fontSize: "2rem" }} />
            </>}
            {product && <Typography variant='h3'>{product.title}</Typography>}

            <br />
            <Container sx={{ fontSize: "4rem", display: { xs: 'contents', sm: 'none' } }}>
                <Gallery images={images} />
            </Container>
            {product && <Typography variant='h5'>${product.price}</Typography>}
            <br />
            <Stack direction='row' gap="1rem" flexWrap='wrap'>
                <TextButton sx={{ flexGrow: 1, flexBasis: '200px' }} variant='contained' label='Buy' onClick={() => onBuy()} />
                <TextButton sx={{ flexGrow: 1, flexBasis: '25px' }} variant='outlined' label={<ShoppingCart />} onClick={() => onCart()} />

            </Stack>
        </Stack>
        {/* {JSON.stringify(products)} */}
    </Stack>
}

