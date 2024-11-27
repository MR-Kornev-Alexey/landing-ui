import React, {FC} from 'react'
import {Grid,  Typography} from '@mui/material'
import Container from "@mui/material/Container";

const Banner: FC = () => {


    return (
        <Container maxWidth="lg" sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            paddingBottom:10
        }}>
            <Grid
                container
                spacing={2}
                sx={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Grid
                    item
                    xs={12}
                    sm={4}
                    md={3}
                    lg={2}
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Typography
                        className="h1"
                        sx={{
                            textTransform: "uppercase",
                            textAlign: "center"
                        }}
                    >
                        <span style={{ color: "#D978F5" }}>l1ve</span>
                        <br />
                        stack
                    </Typography>
                </Grid>

                <Grid
                    item
                    xs={12}
                    sm={2}
                    md={1}
                    lg={1}
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Typography
                        className="h1"
                        sx={{
                            textTransform: "uppercase"
                        }}
                    >
                        +
                    </Typography>
                </Grid>

                <Grid
                    item
                    xs={12}
                    sm={4}
                    md={3}
                    lg={2}
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Typography
                        className="h1"
                        sx={{
                            textTransform: "uppercase",
                            textAlign: "center"
                        }}
                    >
                        h3llo
                        <span style={{ color: "#5CDCB5" }}>
                <br />
                cloud
            </span>
                    </Typography>
                </Grid>
            </Grid>


            <Typography variant="h6" sx={{
                marginTop: 5,
                textAlign: 'center',
            }}>
                L1veStack — платформа компании H3llo.Cloud для создания инфраструктуры на основе контейнеров.<br/>Она
                поддерживает реализацию проектов любой сложности.<br/>В основе платформы три распределённых ЦОДа, один
                из которых мы создали собственными силами.
            </Typography>
        </Container>
    )
}

export default Banner
