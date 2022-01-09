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
import { height } from '@mui/system';


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
  width:number,
  height:number
}


export const CryptoChart = (
    {
       chartInfo,
       borderColor,
       backgroundColor,
       width,
       height,
        ...props
    } : CryptoChartProps) => {

        const options = {
            
            responsive: true,
          
            plugins: {
              legend: {
                display:false
              },
              title: {
                display: false,
                text: chartInfo.title,
              }
            },
            scales:
            {
              
              x:{
                grid:{
                  display:false
                },
                ticks:{
                  display:false
                }
              },
              y:{
                grid:{
                  display:false,
                  drawBorder:false
                },
                ticks:{
                  display:false
                }
              }
            }
          };

          const data = {
          
            labels: chartInfo.labels,
            
            datasets:[
                {
                    
                    data:chartInfo.data,
                    fill:true,
                    borderColor: borderColor,
                    backgroundColor:backgroundColor 
                }
            ]
        }

        return (<div>
            <Line 
            data-testid='tescryptochartidt'
            options={options}
            data={data}
            width={width} height={height}
            />
        </div>)
    }