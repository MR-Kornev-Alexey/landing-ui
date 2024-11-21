import React from 'react';
import "./main.css"
import Box from "@mui/material/Box";

const ImgGradient: React.FC = () => {
        return (
            <>
                <Box className="media-object">
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Box
                            component="img"
                            sx={{
                                width: '100%', // Установите ширину изображения
                                height: 'auto', // Автоматически подстраивает высоту под ширину
                                maxWidth: 645, // Максимальная ширина изображения
                            }}
                            alt="logo" // Альтернативный текст для изображения
                            src="assets/images/main.png"// Путь к изображению
                        />
                    </Box>
                </Box>

            </>
        )
    }
;

export default ImgGradient;