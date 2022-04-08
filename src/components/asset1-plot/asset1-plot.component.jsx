import { useContext, useEffect } from 'react';

import './asset1-plot.styles.scss';

import { Asset1DataContext } from '../../contexts/asset1Context';

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

function Asset1Plot() {

    const {asset1Data} = useContext(Asset1DataContext);

    
    const options = {
        responsive: true,
        plugins: {
            legend: {
            position: 'top',
            },
            title: {
            display: true,
            text: 'Asset 1 Plot',
            },
        },
    };
    
    const labels = asset1Data.map((item)=>{
        let labelTime = new Date(item.time)
        return labelTime.getDay()+'/'+(parseInt(labelTime.getMonth())+1)+'/'+labelTime.getFullYear()+' '+labelTime.getHours()+':'+labelTime.getMinutes()
    });

    const data = {
        labels,
        datasets: [
            {
            label: 'Minimum',
            data: asset1Data.map((item)=>item.min),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
            label: 'Maximum',
            data: asset1Data.map((item)=>item.max),
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };

    useEffect(()=>{

        
        var options = {
            responsive: true,
            plugins: {
                legend: {
                position: 'top',
                },
                title: {
                display: true,
                text: 'Asset 1 Plot',
                },
            },
        };
        
        var labels = asset1Data.map((item)=>item.time);
    
        var data = {
            labels,
            datasets: [
                {
                label: 'Minimum',
                data: asset1Data.map((item)=>item.min),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                },
                {
                label: 'Maximum',
                data: asset1Data.map((item)=>item.max),
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
                },
            ],
        };
        

        console.log('asset plot use effect', asset1Data);

        
        console.log(data);

    },[asset1Data]);

    return (
        <div className="content-box">
            <div className="box-heading">
                Asset 1 Plot
            </div>

          <div className="box-content">

            <Line options={options} data={data} /> 

          </div>

        </div>
    )
}

export default Asset1Plot;