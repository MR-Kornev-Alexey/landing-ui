import React from 'react';
import {Box, Typography} from '@mui/material';

interface StyledButtonProps {
    label: string;
    onClick?: () => void;
    sx?: object; // для добавления пользовательских стилей
}

const StartButton: React.FC<StyledButtonProps> = ({label, onClick, sx}) => {
    return (
        <Box
            onClick={onClick}
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '196px',
                height: '46px',
                padding: '10px 14px',
                borderRadius: '6px',
                backgroundColor: '#5CDCB5',
                cursor: 'pointer',
                '&:hover': {
                    backgroundColor: '#4cbc9e',
                },
                ...sx, // добавляем пользовательские стили
            }}
        >
            <Typography variant="subtitle2" sx={{color: '#000', fontSize: 16, fontWeight: 700, lineHeight: 1.2}}>
                {label}
            </Typography>
        </Box>
    );
};

export default StartButton;
