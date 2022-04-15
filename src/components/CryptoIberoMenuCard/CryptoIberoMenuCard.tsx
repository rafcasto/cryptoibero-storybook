import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {CryptoIberoMenuCardTemplate} from '../../models/CryptoIberoMenuCardTemplate'
import styled, { ThemeProvider } from 'styled-components';
import NoSsr from '@mui/material/NoSsr';
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from '@mui/material/styles';
import { deepPurple, green, grey, yellow } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
const customTheme = createTheme({
  palette: {
    primary: {
      main: green[900],
    },
  },
});
interface CryptoIberoMenuCardProps {
    info:CryptoIberoMenuCardTemplate,
    background:string
}

const StyledCard = styled(Card)`
  ${({ theme }) => `
  cursor: pointer;
  border-radius: 15px;
  background-color: ${theme.palette.primary.main};
  transition: ${theme.transitions.create(['background-color', 'transform'], {
    duration: theme.transitions.duration.standard,
  })};
  &:hover {
    background-color: ${theme.palette.secondary.main};
    transform: scale(1.04);
  }
  `}
`;


export  const CryptoIberoMenuCard = ({
    info,
    background,
    ...props
}:CryptoIberoMenuCardProps) => {
    

  return (
    <NoSsr>
        <MuiThemeProvider theme={customTheme}>
        <ThemeProvider theme={customTheme}>
            <StyledCard>
    <Card style={{background:background}} >
      <CardContent>         

          
      <Grid container sx={{ color: 'text.primary' }}>
      <Grid item xs={10} md={11}>
          <Typography sx={{ fontSize: 14 }} component="div" color="text.secondary" gutterBottom>
           {info.description}
           
           </Typography>
           </Grid>
           <Grid item xs={2} md={1}>
       <img src={info.icon} width="40px" />
        
      </Grid>
        </Grid>
        <Typography variant="h5" component="div">
            {info.title}
        </Typography>
        
        <Typography variant="body2">
          {info.moreInfo}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">{info.ctaLabel}</Button>
      </CardActions>
    </Card>
    </StyledCard>
    </ThemeProvider>
      </MuiThemeProvider>
    </NoSsr>
  );
}