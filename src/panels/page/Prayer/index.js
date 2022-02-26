import React ,{ useState, useEffect } from 'react';
import { Group, Panel, PanelHeader, NativeSelect,SimpleCell,FormItem, Div} from '@vkontakte/vkui';
import {Icon28CalendarCircleFillRed} from '@vkontakte/icons';
import useData from '../../../hooks/month.js';
import './style.css';
import TimeTable from '../../component/timetable.js';
import TitlePrayer from './title.js';

    const Prayer = ({id}) =>{
      const month = new Date().getMonth().toString();
      const [value,setvalue] = useState(month);
      const data = useData(value);
       
   const handleChange = (event) => setvalue(event.target.value);
      
  //  Июль [ee-YOOL’] July
  //  Август [AV-goost] August
  //  Сентябрь [syen-TYABR’] September
  //  Октябрь [ok-TYABR’] October
  //  Ноябрь [no-YABR’] November
  //  Декабрь [dee-KABR’] December
      
	return (
    <Panel id={id}>
      <PanelHeader
        left={
          <SimpleCell before={<Icon28CalendarCircleFillRed />}>
            Календарь молитв
          </SimpleCell>
        }
      ></PanelHeader>
      <TitlePrayer />
      <FormItem >
      <NativeSelect value={value}  onChange={handleChange}>
          <option value="0">Январь</option>
          <option  value="1">Февраль</option>
          <option  value="2">Март</option>
          <option  value="3">Апрель</option>
          <option  value="4">Май</option>
          <option  value="5">Июнь</option>
          <option  value="6">Июль</option>
          <option  value="7">Август</option>
          <option  value="8">Сентябрь</option>
          <option  value="9">Октябрь</option>
          <option  value="10">Ноябрь</option>
          <option  value="11">Декабрь</option>
        </NativeSelect>
        </FormItem>
      <Group>
        {data && (
          <table className="timetable">
            <thead>
              <tr>
                <th>День</th>
                <th>Фаджр</th>
                <th>Восход</th>
                <th>Зур</th>
                <th>Аср</th>
                <th>Магриб</th>
                <th>Иша</th>
              </tr>
            </thead>

            <tbody>
              {data.map((e, i) => (
                <TimeTable key={i} month={value} time={e} id={i + 1} />
              ))}
            </tbody>
          </table>
        )}
      </Group>

      <Div />
      <Div />
    </Panel>
  );};


export default Prayer;
