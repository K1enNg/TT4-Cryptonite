import React, { useEffect, useState } from 'react';
import Chart from 'react-google-charts';

const LineChart = ({ historicalData }) => {
    const [data, setData] = useState([["Date", "Price"]]);

    useEffect(() => {
        const dataCopy = [["Date", "Price"]];
        if (historicalData?.prices) {
            historicalData.prices.forEach((item) => {
                const date = new Date(item[0]);
                const price = item[1];
                dataCopy.push([date, price]);
            });
            setData(dataCopy);
        }
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
