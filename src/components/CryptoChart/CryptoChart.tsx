import React from 'react';
import {CryptoChartTemplate} from '../../models/CryptoChartTemplate'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
  } from 'chart.js';
import {Line} from 'react-chartjs-2'


  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
  );

interface CryptoChartProps {
  chartInfo:CryptoChartTemplate,
  borderColor?:string,
  backgroundColor?:string,
}


export const CryptoChart = (
    {
       chartInfo,
       borderColor,
       backgroundColor,
        ...props
    } : CryptoChartProps) => {

        const options = {
            responsive: true,
            plugins: {
              legend: {
                display:false
              },
              title: {
                display: true,
                text: chartInfo.title,
              },
            },
          };

          const data = {
            labels: chartInfo.labels,
            datasets:[
                {
                    
                    data:chartInfo.data,
                    fill:true,
                    borderColor: borderColor,
                    backgroundColor:backgroundColor ,
                }
            ]
        }

        return (<div>
            <Line 
            data-testid='tescryptochartidt'
            options={options}
            data={data}
            />
        </div>)
    }