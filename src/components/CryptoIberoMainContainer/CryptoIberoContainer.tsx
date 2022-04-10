import * as React from 'react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {CryptoIberoMenuCardTemplate} from '../../models/CryptoIberoMenuCardTemplate'
import {CryptoIberoMenuCard} from '../CryptoIberoMenuCard/CryptoIberoMenuCard'
import { backdropClasses } from '@mui/material';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
 
    
    height:250,
    color: theme.palette.text.secondary,
  }));

 interface CryptoIberoContainerProps {
      menus:CryptoIberoMenuCardTemplate [],
      cardBackground:string
 }

export const CryptoIberoContainer = ({
  menus,
  cardBackground,
  ...props
}:CryptoIberoContainerProps) => {
    return (
<Container maxWidth="md" style={{paddingTop:150}}>
<Grid container rowSpacing={1}  spacing={2}>
      {menus.map((menu) => (
        <Grid item xs={12} sm={4} md={4} key={menu.title}>
        
          <CryptoIberoMenuCard background={cardBackground} info={menu}></CryptoIberoMenuCard>
        
          
        </Grid>
      ))}
    </Grid>

</Container>
    
    )
}