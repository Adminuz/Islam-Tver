import React from 'react';
import { Group, Panel, PanelHeader, SimpleCell, Div} from '@vkontakte/vkui';
import {Icon28CalendarCircleFillRed} from '@vkontakte/icons';
import './style.css';
import TimeTable from '../../component/timetable.js';
import TitlePrayer from './title.js';

    const Prayer = ({id,data}) =>{
		
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
                <TimeTable key={i} time={e} id={i + 1} />
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
