import React, { useEffect, useState } from 'react';

import { Box, Stack, Typography, Skeleton, Container, Pagination } from '@mui/material';
import { useInfo } from '../context/useInfo';

import TextButton from '../components/TextButton';
import Preview from '../components/Preview';
import useProduct from '../hooks/useProduct';

export default function () {
    const { user, logout } = useInfo();
    const { getAllProducts, products } = useProduct();

    const [viewingPage, setViewingPage] = useState(1);

    useEffect(() => {
        getAllProducts(viewingPage);
    }, [viewingPage])


    return <>
        <Stack>

            {/* <Pagination count={5} page={viewingPage} color='primary' onClick={(e) => console.log(e)} /> */}
            <Stack direction='row'>
                <TextButton label='back' expanded={true} onClick={() => setViewingPage(viewingPage - 1)} disabled={viewingPage <= 1} />
                <TextButton label={viewingPage} disabled />
                <TextButton label='next' expanded={true} onClick={() => setViewingPage(viewingPage + 1)} disabled={viewingPage >= 5} />
            </Stack>
            {products.map((product, index) => (
                <Preview key={index} product={product} variant='tile' />
            ))}
        </Stack>
    </>
}
