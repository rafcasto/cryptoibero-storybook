import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {CryptoIberoMenuCard} from '../components/CryptoIberoMenuCard/CryptoIberoMenuCard'
import { components } from '@storybook/components';
import {CryptoIberoMenuCardTemplate} from '../models/CryptoIberoMenuCardTemplate'
import { Icon } from '@mui/material';
export default {
    title: 'Example/CryptoIberoMenuCard',
    component:CryptoIberoMenuCard,
    argTypes:{
        background:{control:'color'}
    },
} as ComponentMeta<typeof CryptoIberoMenuCard>

const Template: ComponentStory<typeof CryptoIberoMenuCard> = (args) => <CryptoIberoMenuCard {...args} />

export const defaultCryptoIberoMenuCard = Template.bind({});
const menuOptionTemplate = {
    title:'Test title',
    description:'this is test description',
    moreInfo:'Some description test ver long text etc',
    ctaLabel:'Click here!',
    icon:'test'
}

defaultCryptoIberoMenuCard.args = {
    info:menuOptionTemplate,
    background:'#91ba30'
}