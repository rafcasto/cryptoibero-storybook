import React from 'react';
import {CryptoMarketInfo} from '../../models/MarketDataTemplate'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';

interface DataTableProps
{
    data:CryptoMarketInfo[]
}

export const DataTable = ({data}:DataTableProps) => 
{
    return (
    
        <TableBody>
        
        {data.map((row) => (
          <TableRow
            key={row.name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
            <Avatar alt="Remy Sharp" src={row.icon} />
            </TableCell>
            <TableCell align="left">{row.name}</TableCell>
            <TableCell align="left">{row.symbol}</TableCell>
            <TableCell align="left">{row.sell}</TableCell>
            <TableCell align="left">{row.buy}</TableCell>
            <TableCell align="left">{row.exchange}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    
    );
}