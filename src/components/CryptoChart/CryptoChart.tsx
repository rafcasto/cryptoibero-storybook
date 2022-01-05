import React from 'react';
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
    labelsText:string[],
    data:number[],
    label:string,
    boderColor:string,
    fillColor:string,
    height:number,
    width:number
}
export const options = {
    responsive: true,
    type:'line',
    plugins: {
      legend: {
        display:false
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  };

export const CryptoChart = (
    {
        labelsText,
        data,
        label,
        boderColor,
        fillColor,
        height,
        width,
        ...props
    } : CryptoChartProps) => {
        return (<div>
            <Line 
            data-testid='tescryptochartidt'
            options={options}
            
            data={{
                labels:labelsText,
                datasets:[
                    {
                        
                        data:data,
                        fill:true,
                        borderColor: 'rgb(255, 99, 132)',
                        backgroundColor: 'rgba(255, 99, 132, 0.5)',
                    }
                ]
            }}
         
            />
        </div>)
    }