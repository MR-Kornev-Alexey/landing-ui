import React from 'react';
import "./main.css"
import Box from "@mui/material/Box";

const ImgGradient: React.FC = () => {
        return (
            <>
                <Box className="media-object">
                        <Box
                            component="img"
                            sx={{
                                width: '100%', // Установите ширину изображения
                                height: 'auto', // Автоматически подстраивает высоту под ширину
                                maxWidth: { lg:645,  md:"100%", sm:"100%", xs:"100%"}, // Максимальная ширина изображения
                            }}
                            alt="logo" // Альтернативный текст для изображения
                            src="assets/images/main.png"// Путь к изображению
                        />
                </Box>
            </>
        )
    }
;

export default ImgGradient;