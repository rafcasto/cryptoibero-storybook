import React from 'react';
import {CryptoMarketInfo} from '../../models/MarketDataTemplate'
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import {HeaderTable} from '../HeaderTable/HeaderTable'
import {DataTable} from '../DataTable/DataTable'
interface TableProps
{
    headers:string[],
    data:CryptoMarketInfo[],
    onClick?: () => void
}



export const CryptoMarketTable = (
    {
        headers,
        data,
        ...props
    }: TableProps) =>  {
    return (
        <TableContainer component={Paper}>
             <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <HeaderTable headers={headers} />
            <DataTable data={data} />
            </Table>
        </TableContainer>
    )
} 
