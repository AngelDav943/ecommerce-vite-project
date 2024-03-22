import { Container, Stack, Skeleton, Typography, Paper } from '@mui/material';
import { Link } from 'react-router-dom';

import './categories.css'
import { useEffect } from 'react';
import useProduct from '../hooks/useProduct';
import TextButton from './TextButton';

export default function Categories() {
    const { getAllCategories, categories } = useProduct();

    useEffect(() => {
        getAllCategories();
    }, [])

    return <Paper className='categories'>
        <Typography variant='h5'>Categories</Typography>
        <hr />
        {categories.map((category, index) => (
            <TextButton key={index} label={category} expanded sx={{justifyContent:"flex-start", color:'lightgray'}}/>
        ))}
    </Paper>
}