import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {LandingPage} from '../Pages/Landing/LandingPage'

export default {
    title: 'Views/LandingPage',
    component: LandingPage,
  } as ComponentMeta<typeof LandingPage>;


  const Template: ComponentStory<typeof LandingPage> = (args) => <LandingPage {...args} />;
  export const defaultLandingPageTemplate = Template.bind({}); 
  defaultLandingPageTemplate.args = {
    background:'hsla(111, 82%, 17%, 1)',
    balances:['BALANCE: $100.00','PORTAFOLIO: $100.00','MINING: $100.00'],
    settings:['Account','Profile','Logout'],
    color:'#dce800',
    menus:[{
        title:'Exchange',
        description:'this is test description',
        moreInfo:'Some description test ver long text etc',
        ctaLabel:'Click here!',
        icon:'https://cdn-icons-png.flaticon.com/512/6405/6405597.png'
    },
    {
        title:'Steaking',
        description:'this is test description',
        moreInfo:'Some description test ver long text etc',
        ctaLabel:'Click here!',
        icon:'https://cdn-icons.flaticon.com/png/512/6232/premium/6232591.png?token=exp=1649999073~hmac=4bda85fec9fdd0c05273743ebfe6df4e'
    },
    {
        title:'Mining',
        description:'this is test description',
        moreInfo:'Some description test ver long text etc',
        ctaLabel:'Click here!',
        icon:'https://cdn-icons-png.flaticon.com/512/4491/4491427.png'
    },
    {
        title:'Swap',
        description:'this is test description',
        moreInfo:'Some description test ver long text etc',
        ctaLabel:'Click here!',
        icon:'https://cdn-icons-png.flaticon.com/512/6230/6230410.png'
    },
    {
        title:'NFT',
        description:'this is test description',
        moreInfo:'Some description test ver long text etc',
        ctaLabel:'Click here!',
        icon:'https://cdn-icons.flaticon.com/png/512/6231/premium/6231958.png?token=exp=1649999518~hmac=e47ae93a2207a674a989bcd999e201cf'
    },
    {
        title:'Refferrals',
        description:'this is test description',
        moreInfo:'Some description test ver long text etc',
        ctaLabel:'Click here!',
        icon:'https://cdn-icons.flaticon.com/png/512/6232/premium/6232810.png?token=exp=1649999747~hmac=14eeb1df7bd12a975e500e04b5fa0e6c'
    }],
    backgroundImage:'https://www.techporn.ph/wp-content/uploads/NTT-DOCOMO-Renewable-Enegry-PR.jpg',
    cardBackground:"#d1ebb0"
  }