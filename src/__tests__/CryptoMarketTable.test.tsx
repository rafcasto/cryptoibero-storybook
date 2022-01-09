import React from 'react';
import { render, screen } from '@testing-library/react';
import {CryptoMarketTable} from '../components/CryptoMarketTable/CryptoMarketTable';
import {CryptoMarketInfo} from '../models/MarketDataTemplate'

const labels = ['testUnique']; 
const data = [1]; 
const chartInfo = {
    data:data,
    labels:labels
}
const dataTable = [{
    icon:'cryptoIcon',
    name:'cryptoName',
    symbol:'cryptoSymbol',
    sell:'0',
    buy:'0',
    exchange:'cryptoExchange',
    chartInfo:chartInfo
}]

const theaders = ['icon','name','symbol','sell','buy','exchange'];
test('render table header ', () => {
    render(<CryptoMarketTable data={dataTable} headers={theaders}/>)
    const dataTableTest = screen.getByText('icon');
    expect(dataTableTest).toBeInTheDocument();
})

test('render table data ', () => {
    render(<CryptoMarketTable data={dataTable} headers={theaders}/>)
    const dataTableTest = screen.getByText('cryptoExchange');
    expect(dataTableTest).toBeInTheDocument();
})