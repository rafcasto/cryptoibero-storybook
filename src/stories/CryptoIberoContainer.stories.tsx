import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {CryptoIberoContainer} from '../components/CryptoIberoMainContainer/CryptoIberoContainer'
export default {
    title: 'Example/CryptoIberoContainer',
    component: CryptoIberoContainer, 
    argTypes:{
        boderColor: {control:'color'}
    },
} as ComponentMeta<typeof CryptoIberoContainer>

const Template: ComponentStory<typeof CryptoIberoContainer> = (args) => <CryptoIberoContainer {...args} />; 

export const defaultCryptoIberoContainer = Template.bind({}); 
defaultCryptoIberoContainer.args = {
    menus:[{
        title:'Test title1',
        description:'this is test description',
        moreInfo:'Some description test ver long text etc',
        ctaLabel:'Click here!',
        icon:'test'
    },
    {
        title:'Test title2',
        description:'this is test description',
        moreInfo:'Some description test ver long text etc',
        ctaLabel:'Click here!',
        icon:'test'
    },
    {
        title:'Test title3',
        description:'this is test description',
        moreInfo:'Some description test ver long text etc',
        ctaLabel:'Click here!',
        icon:'test'
    },
    {
        title:'Test title4',
        description:'this is test description',
        moreInfo:'Some description test ver long text etc',
        ctaLabel:'Click here!',
        icon:'test'
    },
    {
        title:'Test title5',
        description:'this is test description',
        moreInfo:'Some description test ver long text etc',
        ctaLabel:'Click here!',
        icon:'test'
    },
    {
        title:'Test title6',
        description:'this is test description',
        moreInfo:'Some description test ver long text etc',
        ctaLabel:'Click here!',
        icon:'test'
    }],
    cardBackground:"#91ba30"
}
