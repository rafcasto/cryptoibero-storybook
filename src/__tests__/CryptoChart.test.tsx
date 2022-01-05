import React from 'react';
import { render, screen } from '@testing-library/react';


import {CryptoChart} from '../components/CryptoChart/CryptoChart'

const labels = ['testUnique']; 
const data = [1]; 

test('render chart component', () => {
    
    render(<CryptoChart    data={data} labelsText={labels} label='test' width={600} height={400} fillColor='red' boderColor='red' />)
    const cryptoChartTest = screen.getByTestId('tescryptochartidt'); 
    expect(cryptoChartTest).toBeInTheDocument();
})
