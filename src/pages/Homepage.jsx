import React, { useEffect } from 'react';

import { Box, Stack, Typography, Skeleton, Container } from '@mui/material';
import { useInfo } from '../context/useInfo';

import TextButton from '../components/TextButton';
import Preview from '../components/Preview';
import Categories from '../components/Categories';
import useProduct from '../hooks/useProduct';

export default function () {
    const { user, logout } = useInfo();
    const { getAllProducts, products } = useProduct();

    useEffect(() => {
        getAllProducts();
    }, [])


    return <>
        {user && <Stack sx={{ marginTop: "2rem" }}>
            <Typography variant='h4'>Welcome back, {user.displayName}</Typography>
        </Stack>}

        <Stack direction="row" className='previews'>
            {Array.from(Array(10).keys()).map(index => (
                <Preview key={index} product={products[index]} />
            ))}
        </Stack>

        <Stack direction='row' flexWrap='wrap' gap='1rem'>
            <Categories />
            <Stack flexGrow="1" flexBasis="500px">
                {Array.from(Array(5).keys()).map(index => (
                    <Preview key={index} product={products[index + 10]} variant='tile' />
                ))}
                <TextButton label='Discover more' to='/discover' expanded />
            </Stack>
        </Stack>
        <br />
    </>
}
