import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import Button from './Button';

const PopChart = () => {
  const [options, setOptions] = useState({});
  const [series, setSeries] = useState([]);

  useEffect(() => {
    setSeries([
      {
        name: 'Population',
        data: [
          8550405,
          3971883,
          2720546,
          2296224,
          1567442,
          1563025,
          1469845,
          1394928,
          1300092,
          1026908,
        ],
      },
    ]);

    setOptions({
      chart: {
        background: '#f4f4f4',
        foreColor: '#333',
      },
      xaxis: {
        categories: [
          'New York',
          'Los Angeles',
          'Chicago',
          'Houston',
          'Philadelphia',
          'Phoenix',
          'San Antonio',
          'San Diego',
          'Dallas',
          'San Jose',
        ],
      },
      plotOptions: {
        bar: {
          horizontal: false,
        },
      },
      fill: {
        colors: ['#f44336'],
      },
      dataLabels: {
        enabled: false,
      },
      title: {
        text: 'Largest US Cities By Population',
        align: 'center',
        margin: 20,
        offsetY: 20,
        style: {
          fontSize: '25px',
          fontWeight: 400,
        },
      },
    });
  }, []);

  const onClick = () => {
    setOptions({
      ...options,
      plotOptions: {
        ...options.plotOptions,
        bar: {
          ...options.plotOptions.bar,
          horizontal: !options.plotOptions.bar.horizontal,
        },
      },
    });
  };

  return (
    <>
      <Chart
        options={options}
        series={series}
        type="bar"
        height="450"
        width="100%"
      />
      <Button onClick={onClick} />
    </>
  );
};

export default PopChart;
