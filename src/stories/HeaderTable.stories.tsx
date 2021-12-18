import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {HeaderTable} from '../components/HeaderTable/HeaderTable'

export default {
    title:"Example/HeaderTable",
    componet: HeaderTable,
} as ComponentMeta<typeof HeaderTable>

const Template: ComponentStory<typeof HeaderTable> = (args) => <HeaderTable {...args} />

export const CryptoHeaderTable = Template.bind({});
CryptoHeaderTable.args = {
    headers:['','Name','Symbol','Sell','Buy','Last 24h Ex','']
}