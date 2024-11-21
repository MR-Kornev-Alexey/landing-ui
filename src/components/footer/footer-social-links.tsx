import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'

const SocialLinks: FC = () => {
    return (
        <Box sx={{ ml: -1 }}>
            <Box
                component="ul"
                sx={{
                    m: 0,
                    p: 0,
                    lineHeight: 0,
                    borderRadius: 3,
                    listStyle: 'none',
                }}
            >
                <Box
                    component="li"
                    sx={{
                        display: 'inline-block',
                        color: 'primary.contrastText',
                        mr: 0.5,
                    }}
                >
                    <Link
                        target="_blank"
                        sx={{
                            lineHeight: 0,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 36,
                            height: 36,
                            borderRadius: '50%',
                            color: 'inherit',
                            '&:hover': {
                                backgroundColor: 'secondary.main',
                            },
                            '& img': {
                                fill: 'currentColor',
                                width: 22,
                                height: 'auto',
                            },
                        }}
                        href="#"
                    >
                        <img src="/images/icons/instagram.svg" alt="Instagram icon" />
                    </Link>
                </Box>
            </Box>
        </Box>
    )
}

export default SocialLinks