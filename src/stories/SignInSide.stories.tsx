import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {SignInSide} from '../components/SignInSide/SignInSide';

export default {
    title: 'Views/SignIn',
    component:SignInSide,
} as ComponentMeta<typeof SignInSide>

const Template: ComponentStory<typeof SignInSide> = (args) => <SignInSide {...args} />
export const defaultSignSideTemplate = Template.bind({})
defaultSignSideTemplate.args = {
    background:'https://cryptoslate.com/wp-content/uploads/2021/04/crypto-green.jpg'
}