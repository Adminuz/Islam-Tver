import React from 'react';


const TimeTable = ({time,id,month}) => {
   const date = new Date();
   const monthInt  = parseInt(month)
   const jumma = new Date(date.getFullYear(),monthInt,id).getDay() == 5;
   return(

    <tr style={date.getDate() == id && date.getMonth() == monthInt ? {backgroundColor: 'grey'} : {backgroundColor: 'white'} &&  jumma ? { color: "red"} : { color: "blue",} }>
    <td>{id}</td>
    <td>{time.fajr}</td>
    <td>{time.sunrise}</td>
    <td>{time.dhuhr}</td>
    <td>{time.asr}</td>
	  <td>{time.maghrib}</td>
	  <td>{time.isha}</td>
    </tr>

)}; 

export default TimeTable;