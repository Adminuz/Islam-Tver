import React from 'react';


const TimeTable = ({time,id}) => {
   const date = new Date();
   const jumma = new Date(date.getFullYear(),date.getMonth()+1,id).getDay() == 5;
   return(

    <tr style={date.getDate() == id ? {backgroundColor: 'grey'} : {backgroundColor: 'white'} &&  jumma ? { color: "red"} : { color: "blue",} }>
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