import React from "react";
import { Title } from '@vkontakte/vkui';

const TitlePrayer = ({date}) =>{
     var HijriYear = new Intl.DateTimeFormat('ru-TN-u-ca-islamicc',
     {month: 'long',year : 'numeric'})
     .format(Date.now())
return(
    <Title level="3" weight="regular" style={{ textAlign:'center' , margin: 5 }}>
   Время молитв для мусульман г. Твери <br/>
  Январь {date.getFullYear()}г. - {HijriYear}
  </Title>

);

}

export default TitlePrayer;