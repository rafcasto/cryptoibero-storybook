import React from 'react';
import { render, screen } from '@testing-library/react';
import {HeaderTable} from '../components/HeaderTable/HeaderTable';


const theaders = ['col1','col2'];
test('render header table cols', () => {
    render(<HeaderTable headers={theaders}/>); 
    const linkElement = screen.getByText('col1'); 
    expect(linkElement).toBeInTheDocument();
});
