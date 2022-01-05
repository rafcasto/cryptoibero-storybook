import React from 'react';
import { render, screen } from '@testing-library/react';
import {CryptoChart} from '../components/CryptoChart/CryptoChart'

const labels = ['testUnique']; 
const data = [1]; 
const chartInfo = {
    data:data,
    labels:labels
}

test('render chart component', () => {
    
    render(<CryptoChart  chartInfo={chartInfo} />)
    const cryptoChartTest = screen.getByTestId('tescryptochartidt'); 
    expect(cryptoChartTest).toBeInTheDocument();
})
