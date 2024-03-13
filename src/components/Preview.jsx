import { Container, Skeleton, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import './preview.css'

// TODO: add product preview variants
export default function({ product = null, variant = 'icon'}) {

    if (product == null) return (
        <Link to="/product/0">
            <Skeleton variant='rectangular' className={`preview ${variant}`} />
        </Link>
    )

    return <Typography>not implemented</Typography>
}