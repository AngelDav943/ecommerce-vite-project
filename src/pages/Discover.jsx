import React, { useEffect, useState } from 'react';

import { Box, Stack, Typography, Skeleton, Container, Pagination } from '@mui/material';
import { useInfo } from '../context/useInfo';

import TextButton from '../components/TextButton';
import Preview from '../components/Preview';
import useProduct from '../hooks/useProduct';

export default function () {
    const { user, logout } = useInfo();
    const { getAllProducts, products, totalPages } = useProduct();

    const [viewingPage, setViewingPage] = useState(1);

    useEffect(() => {
        getAllProducts(viewingPage);
    }, [viewingPage])


    return <>
        <Stack>
            <br />
            <Stack direction='row' justifyContent="center">
                <Pagination count={totalPages} page={viewingPage} color='primary' onChange={(e, value) => setViewingPage(value)} />
            </Stack>
            {products.map((product, index) => (
                <Preview key={index} product={product} variant='tile' />
            ))}
        </Stack>
    </>
}
