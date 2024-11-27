"use client"
import React, { FC, useState } from 'react';
import Container from '@mui/material/Container';
import { Grid, Typography } from '@mui/material';
import Box from '@mui/material/Box';

const Faq: FC = () => {
    const faq = [
        {
            question: 'А если нужно больше? Будет дороже?',
            answer: 'Не обязательно. Платформа L1veStack позволяет гибко масштабировать ресурсы в зависимости от ваших потребностей. Вы платите только за реально использованные ресурсы, а не за заранее зарезервированные мощности. Это особенно выгодно при увеличении нагрузки на проект.'
        },
        {
            question: 'Почему это удобно?',
            answer: 'L1veStack создана для удобства разработчиков: мгновенное развертывание контейнеров, автоматическое масштабирование и мониторинг позволяют сосредоточиться на продукте, а не на инфраструктуре. Уровень надежности Tier 3 и сертификаты безопасности обеспечивают высокую доступность и защиту данных.'
        },
        {
            question: 'Можно ли масштабироваться?',
            answer: 'Да, конечно! Платформа поддерживает горизонтальное и вертикальное масштабирование. Вы можете добавлять ресурсы по мере роста нагрузки на ваше приложение, что особенно важно для проектов с переменной нагрузкой или при быстром увеличении числа пользователей.'
        },
        {
            question: 'Почему это выгодно?',
            answer: 'По статистике, на стоимость сильнее всего влияют рабочие часы в будни, скорость роста команды, количество тестов и размер кодовой базы. Реально используемые ресурсы часто бывают в 10-20 раз меньше зарезервированных. Это в несколько раз экономичнее облака.\n\n' +
                'Вы экономите на фактическом счете в сравнении с традиционной моделью оплаты. Да, цены за vCPU, RAM и SSD выше рынка, но за счёт метода расчёта — это действительно выгодно.\n\n'
        },
    ];

    const [selectedQuestion, setSelectedQuestion] = useState(0);

    const handleQuestionClick = (index: React.SetStateAction<number>) => {
        setSelectedQuestion(index);
    };

    return (
        <Container
            maxWidth="lg"
            sx={{
                height: 600,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
            }}
        >
            <Grid
                container
                spacing={2}
                sx={{
                    justifyContent: 'space-between',
                }}
            >
                <Grid
                    item
                    md={6}
                    xs={12}

                >   <Box>

                </Box>
                    <Typography className="h1" sx={{ py: 4, textAlign: 'left' }}>
                        FAQ
                    </Typography>
                    {faq.map((item, index) => (
                        <Typography
                            key={index}
                            className="subtitlereg_28"
                            sx={{
                                py: 4,
                                textAlign: 'left',
                                cursor: "pointer",
                                color: selectedQuestion === index ? '#5CDCB5' : '#fff',
                                borderBottom: 1,
                                borderColor: selectedQuestion === index ? '#5CDCB5' : 'transparent',
                            }}
                            onClick={() => handleQuestionClick(index)}

                        >
                            {item.question}
                        </Typography>
                    ))}
                </Grid>
                <Grid
                    item
                    md={6}
                    xs={12}
                >
                    <Box className="gradient-border" sx={{
                        width: 595,
                        height: 704,
                        padding: 7,
                        margin:1
                    }}>
                        <Typography className="subtitlebold_32" sx={{ py: 4, textAlign: 'left' }}>
                            {faq[selectedQuestion].question}
                        </Typography>
                        <Typography className="subtitlereg_20" sx={{ py: 4, textAlign: 'left' }}>
                            {faq[selectedQuestion].answer}
                        </Typography>
                    </Box>

                </Grid>
            </Grid>
        </Container>
    );
};

export default Faq;

//сделать градиентный бордер от  #69FCCF до  #5F1058 45 градусов от верха слева до низа справа