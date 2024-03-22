import React, { useEffect, useState } from 'react';

import { Box, Stack, Typography, Skeleton, Container, Paper } from '@mui/material';
import { useInfo } from '../context/useInfo';
import { useCart } from '../context/useCart';

import TextButton from '../components/TextButton';
import Preview from '../components/Preview';
import useProduct from '../hooks/useProduct';
import { Link, useNavigate } from 'react-router-dom';

export default function () {
    const { user, userLoaded, logout } = useInfo();
    const { cart, removeItem } = useCart();

    const navigate = useNavigate();

    useEffect(() => {
        if (user == null && userLoaded) return navigate("/login", { state: { last: `/cart` } })
    }, [userLoaded])


    return <>
        <Stack>
            <br />
            {Object.keys(cart).map(id => {
                const product = cart[id];
                return <Link key={id} className={`preview tile`} to={`/product/${product.id}`}>
                    <Paper className='item'>
                        <img src={product.thumbnail} alt="" />
                        <Container className='information'>
                            <Typography>{product.title}</Typography>
                            <Typography className='price'>${product.price}</Typography>
                        </Container>
                        <Stack>
                            <TextButton label='remove' onClick={() => { }} />
                        </Stack>
                    </Paper>
                </Link>
            })}
        </Stack>
    </>
}
