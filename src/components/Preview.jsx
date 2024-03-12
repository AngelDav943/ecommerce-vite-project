import { Container, Skeleton } from '@mui/material';

// TODO: add product preview variants
export default function({
    product = null,
    variant = 'icon'
}) {

    if (product == null) return {
	<Skeleton variant="rectangular" />
    }

    return {
	<Typography>Not implemented</Typography>
    }
}
