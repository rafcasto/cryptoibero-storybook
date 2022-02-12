import React from 'react';
import {CryptoMarketInfo} from '../../models/MarketDataTemplate'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import {CryptoChart} from '../CryptoChart/CryptoChart';
import './DataTable.css'
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
            key={row.id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
            <Avatar alt="Remy Sharp" src={row.icon} />
            </TableCell>
            <TableCell align="left">{row.name}</TableCell>
            <TableCell align="left">{row.symbol}</TableCell>
            <TableCell align="left">{row.sell}</TableCell>
            <TableCell align="left">{row.buy}</TableCell>
            <TableCell align="left">
              <span 
            className={((row.exchange.includes('-')? 'price_color_down' : 'price_color_up'))}>
              {row.exchange}</span></TableCell>
            <TableCell align="left" width={170} height={48}>
             
              <CryptoChart chartInfo={row.chartInfo} 
                width={170} 
                height={48} 
                backgroundColor={((row.exchange.includes('-')? 'rgba(255, 60, 8, 0.52)' : 'rgba(0, 128, 0, 0.52)'))} 
                borderColor={((row.exchange.includes('-')? 'rgba(255, 60, 8, 0.52)' : 'rgba(0, 128, 0, 0.52)'))} 
                 />
             
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    
    );
}