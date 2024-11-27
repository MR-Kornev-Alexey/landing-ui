import React, {FC} from 'react';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';


const Reliability: FC = () => {
    return (
        <Container
            maxWidth="lg"
            sx={{
                height: 600,
                display: 'flex',
                justifyContent: 'flex-start',  // Прижимаем содержимое по вертикали
                alignItems: 'flex-start',      // Прижимаем содержимое по горизонтали
                flexDirection: 'column',
            }}
        >
            <Typography className="h1" sx={{ width: '100%', py: 4, textAlign: 'left' }}>
                Надежность
                <br />
                <span style={{ color: '#F78EED' }}>
            без компромиссов
        </span>
            </Typography>
            <Typography className="subtitlereg_20" sx={{ width: '70%', py: 4, textAlign: 'left' }}>
                L1veStack — это платформа для развертывания контейнерных приложений компании «Hello Cloud». ЦОДы «Hello
                Cloud» соответствуют уровню надежности Tier 3. Высокая безопасность размещения данных подтверждена
                сертификатами ФСБ, ФСТЭК, PCI DSS и аттестатом облачной платформы, доступность гарантируется стандартами
                SLA.
            </Typography>
        </Container>

    );
};

export default Reliability;
