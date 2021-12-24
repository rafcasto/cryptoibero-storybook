import React from 'react';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
interface HeaderTableProps
{
    headers:string[]
}

export const HeaderTable = ({headers}:HeaderTableProps) => 
{
    return (
    <TableHead>
        <TableRow>
            {headers.map((header)=> (
                <TableCell key={header} align='left'><b>{header}</b></TableCell>
            ))}
        </TableRow>
    </TableHead>);
}