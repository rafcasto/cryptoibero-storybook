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
    background:'#087f23',
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
        icon:'https://cdn-icons-png.flaticon.com/512/3345/3345272.png'
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
        icon:'https://cdn-icons-png.flaticon.com/512/6229/6229756.png'
    },
    {
        title:'Portafolio',
        description:'this is test description',
        moreInfo:'Some description test ver long text etc',
        ctaLabel:'Click here!',
        icon:'https://cdn-icons-png.flaticon.com/512/3345/3345142.png'
    }],
    backgroundImage:'https://www.techporn.ph/wp-content/uploads/NTT-DOCOMO-Renewable-Enegry-PR.jpg',
    cardBackground:"#80e27e"
  }