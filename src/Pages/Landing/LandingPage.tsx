import * as React from 'react';
import {HeaderCryptoIbero} from '../../components/Header/HeaderCryptoIbero';
import {CryptoIberoContainer} from '../../components/CryptoIberoMainContainer/CryptoIberoContainer'
import {CryptoIberoMenuCardTemplate} from '../../models/CryptoIberoMenuCardTemplate'
import './Landing.css'
interface landingProps {
    background?:string,
    balances:string[],
    settings:string[],
    color?:string,
    menus:CryptoIberoMenuCardTemplate [],
    backgroundImage:string,
    cardBackground:string
  }

export const LandingPage = ({
    background,
    balances,
    settings,
    color,
    menus,
    backgroundImage,
    cardBackground,
 ...props   
}:landingProps) => {
    var sectionStyle = {
          
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize:'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
  
        height: '90vh'
      };
    return (
        <div className='Login-component' style={sectionStyle} >
        <HeaderCryptoIbero balances={balances} background={background} settings={settings} color={color} />
        <CryptoIberoContainer cardBackground={cardBackground} menus={menus}  />
        </div>
    )
}