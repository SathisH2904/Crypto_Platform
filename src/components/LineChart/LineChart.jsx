import React from 'react'
import Chart from "react-google-charts"
import { useState , useEffect } from 'react'

const LineChart = ({historicalData}) => {
    const [data,setData]=useState([['Date','Prices']])

    useEffect(()=>{
        let dataCopy=[['Date','Prices']];
        if(historicalData.prices)
        {
            historicalData.prices.map((item,index)=>{
                return(
                    dataCopy.push([`${new Date(item[0]).toLocaleDateString().slice(0,-5)}`,item[1]])
                )
            })
            setData(dataCopy);
        }
    },[historicalData])
    
    return (
        <Chart chartType='LineChart' data={data} height="100%" legendToggle></Chart>
    )
}

export default LineChart;