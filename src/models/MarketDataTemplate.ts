import {CryptoChartTemplate} from './CryptoChartTemplate'
export interface CryptoMarketInfo
{
    id:string,
    icon:string,
    name:string,
    symbol:string, 
    sell:string,
    buy:string,
    exchange:string,
    chartInfo:CryptoChartTemplate,
}


