import { useState, useEffect } from 'react';

import './carbon-intensity.styles.scss';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

import { Line } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );




function CarbonIntensity() {

    const [intensityData, setIntensityData] = useState([]);

    const options = {
        responsive: true,
        plugins: {
            legend: {
            position: 'top',
            },
            title: {
            display: true,
            text: 'Carbon Intensity Plot from ',
            },
        },
    };

    const labels = intensityData.map((item)=>{
        let labelTime = new Date(item.from)
        return labelTime.getUTCDate()+'/'+(parseInt(labelTime.getUTCMonth())+1)+'/'+labelTime.getUTCFullYear()+' '+labelTime.getUTCHours()+':'+labelTime.getUTCMinutes()
        //return labelTime.getDay()+'/'+(parseInt(labelTime.getMonth())+1)+'/'+labelTime.getFullYear()+' '+labelTime.getHours()+':'+labelTime.getMinutes()
    });

    const data = {
        labels,
        datasets: [
            {
            label: 'Forcast',
            data: intensityData.map((item)=>item.intensity.forecast),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
            label: 'Actual',
            data: intensityData.map((item)=>item.intensity.actual),
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };

    const from = new Date('09/18/2021 12:00').toISOString();
    const to  = new Date('10/01/2021 12:00').toISOString();

    console.log(from, to, 'from to');

    useEffect(()=>{

        console.log('intensity data',intensityData);

        fetch(`https://api.carbonintensity.org.uk/intensity/${from}/${to}`)
        .then(res => res.json())
        .then(result=>{
            console.log(result);
            setIntensityData([...result.data])
        }, error=>{console.log(error)})

    },[]);

    return (
        <div className="content-box">
            <div className="box-heading">
                Carbon Intensity
            </div>

          <div className="box-content">
            <Line options={options} data={data} />     
          </div>

        </div>
    )
}

export default CarbonIntensity;