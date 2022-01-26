import React from 'react';


const TimeTable = ({objact,date,id}) => {
   const {ntimes,jumma} =  objact;
   const day =  date.getDate();

return(

    <tr style={day == id ? {backgroundColor: 'grey'} : {backgroundColor: 'white'} &&  jumma ? { color: "red"}: { color: "blue",} }>
    <td>{id}</td>
    <td>{ntimes.fajr}</td>
    <td>{ntimes.sunrise}</td>
    <td>{ntimes.dhuhr}</td>
    <td>{ntimes.asr}</td>
	  <td>{ntimes.maghrib}</td>
	  <td>{ntimes.isha}</td>
    </tr>

)};

export default TimeTable;