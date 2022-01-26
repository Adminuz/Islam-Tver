import {Group,Div} from '@vkontakte/vkui';
import ContinerTime from '../../component/continerTime.js'
import MyTime from '../../component/mytime.js'



const TimeNamaz = ({data}) => {
   return(
      <Group>
       <MyTime />
        <ContinerTime id='Fajr' date={{img:'Fajr',time:data.fajr+ " - " + data.sunrise,name:'Фаджр',status:true,info:'Сухур'}} />
        <ContinerTime id='Dhuhr' date={{img:'Dhuhr',time:data.dhuhr,name:'Зухр',status:false}} />
        <ContinerTime id='Asr' date={{img:'Asr',time: data.asr,name:'Аср',status:false}} />
        <ContinerTime id='Maghrib' date={{img:'Maghrib',time:data.maghrib,name:'Магриб',status:false,info: 'Ифтар'}} />
        <ContinerTime id='Isha' date={{img:'Isha',time:data.isha,name:'Иша',status:false}} />
  
       <Div/> <Div/>
       </Group>)
}

export default TimeNamaz;