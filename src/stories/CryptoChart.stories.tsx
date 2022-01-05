import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {CryptoChart} from '../components/CryptoChart/CryptoChart'

export default {
    title: 'example/chart',
    component: CryptoChart, 
    argTypes:{
        boderColor: {control:'color'}
    },
} as ComponentMeta<typeof CryptoChart>

const Template: ComponentStory<typeof CryptoChart> = (args) => <CryptoChart {...args} />; 

export const defaultChart = Template.bind({}); 
defaultChart.args= {
  labelsText:['test','test1','test3'],
  data:[10.2,5.3,15],
  label:'this is a test',
  width:600,
  height:400,
  boderColor:'red',
  fillColor:'green'   
}