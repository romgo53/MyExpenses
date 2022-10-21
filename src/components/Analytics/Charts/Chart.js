import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css'

const Chart = (props) => {
    const dataPointsValue = props.dataPoints.map((point) => point.value);
    const totalMaximum = Math.max(...dataPointsValue);
    return (
        <div className="chart">
            {props.dataPoints.map( dataPoint => {
             return <ChartBar value={dataPoint.value}
                              maxValue={totalMaximum}
                              key={dataPoint.label}
                              label={dataPoint.label} />
             
            }) 
            }
             
                
        </div>
    )
};

export default Chart;