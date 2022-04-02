import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {HeaderCryptoIbero} from '../components/Header/HeaderCryptoIbero'
import { Props } from '@storybook/addon-docs';


export default {
    title: 'Example/Header',
    component: HeaderCryptoIbero,
  } as ComponentMeta<typeof HeaderCryptoIbero>;


  const Template: ComponentStory<typeof HeaderCryptoIbero> = (args) => <HeaderCryptoIbero {...args} />;

  export const HeaderTemplate = Template.bind({})
  HeaderTemplate.args = {
    background:'hsla(111, 82%, 17%, 1)',
    balances:['BALANCE: $100.00','PORTAFOLIO: $100.00','MINING: $100.OO'],
    settings:['Account','Profile','Logout'],
    color:'#dce800'
  }