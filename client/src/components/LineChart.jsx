import React, { useEffect, useState } from 'react';
import Chart from 'react-google-charts';

const LineChart = ({ historicalData }) => {
    const [data, setData] = useState([["Date", "Price"]]);

    useEffect(() => {
        if (!historicalData?.data?.prices) return;
      
        const chartData = [['Date', 'Price']];
      
        historicalData.data.prices.forEach(([timestamp, price]) => {
          const date = new Date(timestamp);
          if (!isNaN(date.getTime())) {
            chartData.push([date, price]);
          }
        });
      
        console.log("Final chart data:", chartData);
        setData(chartData);
      }, [historicalData]);
      

    const options = {
        title: 'Price over Last 10 Days',
        hAxis: {
            title: 'Date',
            format: 'MMM d',
            textStyle: { color: '#333' },
            titleTextStyle: { color: '#333' }
        },
        vAxis: {
            title: 'Price',
            textStyle: { color: '#333' },
            titleTextStyle: { color: '#333' }
        },
        legend: { position: 'none' },
        chartArea: { width: '80%', height: '70%' },
        colors: ['#ff9900'],
        lineWidth: 3,
        pointSize: 5,
        backgroundColor: '#f4f4f4',
        titleTextStyle: {
            color: '#333',
            fontSize: 16,
            bold: true
        }
    };

    return (
        <div className='flex justify-center items-center'>
            <Chart
                chartType='LineChart'
                data={data}
                options={options}
                width={'80%'}
                height={'300px'}
            />
        </div>
    );
};

export default LineChart;
