import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {CryptoMarketTable} from '../components/CryptoMarketTable/CryptoMarketTable'

export default {
    title: 'Example/CryptoMarketTable', 
    component: CryptoMarketTable
} as ComponentMeta<typeof CryptoMarketTable>;

const Template: ComponentStory<typeof CryptoMarketTable> = (args) => <CryptoMarketTable {...args} />

export const CryptoMarketTableDefault = Template.bind({});
CryptoMarketTableDefault.args = {
    headers : ['','Name','Symbol','Sell','Buy','Last 24h'], 
    data:[{
        icon:'https://static.easycrypto.com/img/coins/BTC.png',
        name:'Bitcoin',
        symbol:'BTC',
        sell:'70,443.48',
        buy:'73,265.79',
        exchange:'+4.5%'
    },
    {
        icon:'https://static.easycrypto.com/img/coins/ETH.png',
        name:'Ethereum',
        symbol:'ETH',
        sell:'5,802.01',
        buy:'6,036.79',
        exchange:'+3.5%'
    },
]
}