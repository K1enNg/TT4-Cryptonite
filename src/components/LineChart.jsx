import React, { useEffect, useState } from 'react';
import Chart from 'react-google-charts';

const LineChart = ({ historicalData }) => {
    const [data, setData] = useState([["Date", "Price"]]);

    useEffect(() => {
        const dataCopy = [["Date", "Price"]];
        if (historicalData?.prices) {
            historicalData.prices.forEach((item) => {
                // item[0] = timestamp (ms), item[1] = price
                const date = new Date(item[0]);
                const price = item[1];
                dataCopy.push([date, price]);
            });
            setData(dataCopy);
        }
    }, [historicalData]);

    return (
        <div>
            <Chart
                chartType='LineChart'
                data={data}
                options={{
                    title: 'Price over Last 10 Days',
                    hAxis: { title: 'Date', format: 'MMM d' },
                    vAxis: { title: 'Price' },
                    legend: 'none',
                }}
                width={'100%'}
                height={'400px'}
            />
        </div>
    );
};

export default LineChart;
