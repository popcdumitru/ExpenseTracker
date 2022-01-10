import react from "react";
import ChartBar from'./ChartBar';
import './Chart.css';



const Chart = (props) =>{
    //transforming a datapoint object to a number
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    //using the spread operator to pull out all the array elements and adding them as standalone elements
    const totalMaximum = Math.max(...dataPointValues);

    return (
         <div className='chart'>
            {props.dataPoints.map((dataPoint) => ( 
             <ChartBar 
                key={dataPoint.label}
                value ={dataPoint.value}
                maxValue={totalMaximum} 
                label={dataPoint.label}  
            />
        ))}
        </div>
    );
};

export default Chart;