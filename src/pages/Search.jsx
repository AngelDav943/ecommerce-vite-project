import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { Box, Stack, Typography, Skeleton, Container, Pagination } from '@mui/material';
import { useInfo } from '../context/useInfo';

import TextButton from '../components/TextButton';
import Preview from '../components/Preview';
import useProduct from '../hooks/useProduct';

export default function () {
    const { user, logout } = useInfo();
    const { searchProduct, products, totalPages } = useProduct();

    const [searchParams, setSearchParams] = useSearchParams();
    const [viewingPage, setViewingPage] = useState(1);

    useEffect(() => {
        setViewingPage(1)
    }, [searchParams])

    useEffect(() => {
        searchProduct(searchParams.get("query"), viewingPage);
    }, [searchParams, viewingPage])


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
