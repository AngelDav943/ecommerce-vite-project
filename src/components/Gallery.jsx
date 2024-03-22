import { Container, Stack, Skeleton, Typography, Paper } from '@mui/material';
import { Link } from 'react-router-dom';

import './gallery.css'

import { useEffect, useState } from 'react';
import useProduct from '../hooks/useProduct';
import TextButton from './TextButton';

export default function Gallery({ images }) {
    const [current, setCurrent] = useState(0);

    return <Stack className='gallery'>
        {images ?
            <Paper>
                <img className='main_preview' src={images[current]} alt={"main preview"} />
            </Paper>
            : <Skeleton className='main_preview' variant='rectangle' />}
        <Stack direction='row' className='list'>
            {images && images.map((image, index) => (
                <img
                    key={index}
                    className='preview'
                    src={image}
                    alt={`preview_${index}`}
                    onMouseEnter={() => setCurrent(index)}

                />
            ))}
        </Stack>
    </Stack>
}