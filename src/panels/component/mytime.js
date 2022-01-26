import { useTime } from 'react-timer-hook';
import {CardGrid,Card,Div} from '@vkontakte/vkui';
import logo from '../../img/logo2.webp'
export default function MyTime() {
    const style = {
        backgroundImage: `url(${logo})`,
        backgroundPosition: 'center ',
        backgroundSize: 'cover',
       backgroundRepeat: 'no-repeat',
       backgroundPositionY: '-10em'
  
    }

    var HijriYear = new Intl.DateTimeFormat('ru-TN-u-ca-islamic',
    {day: 'numeric', month: 'long',weekday: 'long',year : 'numeric'})
    .formatToParts(Date.now())
    var date = new Date();


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
       {date.getDate()} Январь {date.getFullYear()}г. <br/> {HijriYear[2].value} {HijriYear[4].value} {HijriYear[6].value} г. х.

       </div>
      </div>
    
        </Card>
        <Div/>
      </CardGrid>
  
   
    );
  }
  