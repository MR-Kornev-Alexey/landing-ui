import React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export default function Copyright() {
    return (
        <Typography
            variant="subtitle1"
            align="center"
            sx={{
                whiteSpace: 'nowrap',
                display: { md:'flex', sm:'none', xs:'none' },
                justifyContent: "center",
                paddingBottom: 2
            }}
        >
            {'Copyright © '}
            <Link color="inherit" href="#" sx={{textDecoration: 'none'}} >
                OOO ХЕЛЛОУ
            </Link>{' '}
            {new Date().getFullYear()}.
        </Typography>
    );
}