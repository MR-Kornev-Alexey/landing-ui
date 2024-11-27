import React from "react";
import {Box, Grid, Typography} from "@mui/material";

const gridLeft: React.FC = () => {
    return(
        <Grid
            item
            xs={6}
            sx={{
                position: "relative",
                marginLeft: 7
            }}
        >
            <Box sx={{position: "relative", width:623, height: 537}}>
                <Typography className="subtitlereg_28 vps-title">
                    с VPS <br/>
                    платишь за <span style={{color: "#D978F5"}}>100%</span>
                </Typography>
                <Typography className="subtitlereg_28 l1vestack-title">
                    c L1veStack <br/>
                    только за <span style={{color: "#37FFC2"}}>20%</span>
                </Typography>
                <Box
                    component="img"
                    className="vps-img"
                    sx={{
                        width: '100%', // Установите ширину изображения
                        height: 'auto', // Автоматически подстраивает высоту под ширину
                        maxWidth: {lg: 300, md: 270, sm: "100%", xs: "100%"}, // Максимальная ширина изображения
                    }}
                    alt="logo" // Альтернативный текст для изображения
                    src="assets/images/container_vps.svg"// Путь к изображению
                />
                <Box
                    component="img"
                    className="l1vestack-img"
                    sx={{
                        width: '100%', // Установите ширину изображения
                        height: 'auto', // Автоматически подстраивает высоту под ширину
                        maxWidth: {lg: 300, md: 270, sm: "100%", xs: "100%"}, // Максимальная ширина изображения
                    }}
                    alt="logo" // Альтернативный текст для изображения
                    src="assets/images/conteiner_livestack.svg"// Путь к изображению
                />
                <div className="vps-not-used subtitlereg_20 ">Не используется</div>
                <div className="vps-app vps_common">Application</div>
                <div className="vps-software vps_common">Software</div>
                <div className="vps-os vps_common">OS</div>
                <div className="l1vestack-software vps_common">Software</div>
                <div className="l1vestack-os vps_common">OS</div>
            </Box>
        </Grid>)
};

export default gridLeft;