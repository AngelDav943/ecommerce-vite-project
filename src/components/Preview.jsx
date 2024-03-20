import { Container, Stack, Skeleton, Typography, Paper } from '@mui/material';
import { Link } from 'react-router-dom';

import './preview.css'

// TODO: add product preview variants
export default function ({ product = null, variant = 'icon' }) {

    if (product == null) return (
        <Link to="/product/0">
            <Skeleton variant='rectangular' className={`preview ${variant}`} />
        </Link>
    )

    return <Link className={`preview ${variant}`} to={`/product/${product.id}`}>
        <Paper className='item'>
            <img src={product.thumbnail} alt="" />
            <Container className='information'>
                <Typography>{product.title}</Typography>
                <Typography className='price'>${product.price}</Typography>
            </Container>
        </Paper>
    </Link>
}