import React from "react";
import { Title } from '@vkontakte/vkui';
import { HijriDate, JulianDate } from '../../../inc/date.js'

const TitlePrayer = () =>{
  return (
    <Title
      level="3"
      weight="regular"
      style={{ textAlign: "center", margin: 5 }}
    >
      Время молитв для мусульман г. Твери <br />
      {JulianDate} {HijriDate}
    </Title>
  );
}

export default TitlePrayer;