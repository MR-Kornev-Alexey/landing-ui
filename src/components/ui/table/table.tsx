import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {TariffSimple} from '@/interfaces/tariffing'
// Интерфейс для данных

// Пропсы для компонента
interface CreateTableProps {
    data: TariffSimple[]; // Массив объектов TariffSimple
}

// Компонент таблицы
export default function CreateTable({ data }: CreateTableProps) {
    return (
        <TableContainer
            component={Paper}
            sx={{
                overflow: 'hidden', // Убирает скролл
                maxWidth: '100%',
            }}
        >
            <Table
                sx={{
                    minWidth: 650,
                }}
                aria-label="simple table"
            >
                <TableBody>
                    {data.map((row, index) => (
                        <TableRow
                            key={index}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell className="subtitlereg_18">{row.title}</TableCell>
                            <TableCell className="subtitlereg_18">{row.cpu}</TableCell>
                            <TableCell className="subtitlereg_18">{row.ram}</TableCell>
                            <TableCell className="subtitlereg_18">{row.ssd}</TableCell>
                            <TableCell className="subtitlereg_18">{row.tariff}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>

    );
}
