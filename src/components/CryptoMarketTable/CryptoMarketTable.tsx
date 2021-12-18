import React from 'react';
import {CryptoMarketInfo} from './MarketDataTemplate'
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
interface TableProps
{
    headers:string[],
    data?:CryptoMarketInfo[],
    onClick?: () => void
}



export const CryptoMarketTable = (
    {
        headers
    }: TableProps) =>  {
    return (
        <TableContainer component={Paper}>
            <HeaderTable headers={headers} />
        </TableContainer>
    )
} 
