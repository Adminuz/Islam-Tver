import { useTime } from 'react-timer-hook';
import {CardGrid,Card,Div} from '@vkontakte/vkui';
import logo from '../../img/logo2.webp'
import {HijriDate, JulianDate } from '../../inc/date.js'


export default function MyTime() {
    const style = {
        backgroundImage: `url(${logo})`,
        backgroundPosition: 'center ',
        backgroundSize: 'cover',
       backgroundRepeat: 'no-repeat',
       backgroundPositionY: '-10em'
  
    }


    const {
      seconds,
      minutes,
      hours,
     } = useTime({ format: '24-hour'});
  
    return (
        <CardGrid size="l">
        <Card style={style} mode="shadow">
        <div style={{height: 100 ,textAlign: 'center'}}>
        <div style={{fontSize: '45px',color:'white'}}>
          <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span><br/>
       </div>
       <div style={{fontSize: '17px',color:'white'}}>
       {JulianDate} <br/>  {HijriDate}

       </div>
      </div>
    
        </Card>
        <Div/>
      </CardGrid>
  
   
    );
  }
  