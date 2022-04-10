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
        icon:'test'
    },
    {
        title:'Steaking',
        description:'this is test description',
        moreInfo:'Some description test ver long text etc',
        ctaLabel:'Click here!',
        icon:'test'
    },
    {
        title:'Mining',
        description:'this is test description',
        moreInfo:'Some description test ver long text etc',
        ctaLabel:'Click here!',
        icon:'test'
    },
    {
        title:'Swap',
        description:'this is test description',
        moreInfo:'Some description test ver long text etc',
        ctaLabel:'Click here!',
        icon:'test'
    },
    {
        title:'NFT',
        description:'this is test description',
        moreInfo:'Some description test ver long text etc',
        ctaLabel:'Click here!',
        icon:'test'
    },
    {
        title:'Refferrals',
        description:'this is test description',
        moreInfo:'Some description test ver long text etc',
        ctaLabel:'Click here!',
        icon:'test'
    }],
    backgroundImage:'https://www.techporn.ph/wp-content/uploads/NTT-DOCOMO-Renewable-Enegry-PR.jpg',
    cardBackground:"#d1ebb0"
  }