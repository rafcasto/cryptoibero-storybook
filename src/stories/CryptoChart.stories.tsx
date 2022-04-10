import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {CryptoChart} from '../components/CryptoChart/CryptoChart';

export default {
    title: 'example/chart',
    component: CryptoChart, 
    argTypes:{
        boderColor: {control:'color'}
    },
} as ComponentMeta<typeof CryptoChart>

const Template: ComponentStory<typeof CryptoChart> = (args) => <CryptoChart {...args} />; 

export const defaultChart = Template.bind({}); 
const labels = ['test','test1','test3']; 
const data = [10.2,5.3,15]; 
const chartInfo = {
    data:data,
    labels:labels 
}
defaultChart.args= {
  chartInfo:chartInfo ,
  backgroundColor:'rgba(0, 128, 0, 0.52)',
  borderColor:'rgba(0, 128, 0, 0.53)'
}