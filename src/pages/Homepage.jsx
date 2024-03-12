import { Box, Stack, Typography, Skeleton, Container } from '@mui/material';
import { useInfo } from '../context/useInfo';

import TextButton from '../components/TextButton';

export default function () {
    const {user, logout} = useInfo();

    return <>
	{/*
	<TextButton label="logout" onClick={()=> logout()}/>
        */}
	{user && <Stack sx={{marginTop:"2rem"}}>
            <Typography variant='h4'>Welcome back, {user.displayName}</Typography>
        </Stack>}
        <Stack direction="row" className='previews'>
            {Array.from(Array(20).keys()).map(index => (
                <Skeleton key={index} variant='rectangular' className='preview'>
                    {index}
                </Skeleton>
            ))}
        </Stack>
        <Stack>
            {Array.from(Array(10).keys()).map(index => (
                <Skeleton key={index} variant='rectangular' className='tile' />
            ))}
        </Stack>
    </>
}
