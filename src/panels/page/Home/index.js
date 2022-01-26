import React from 'react';
import TimeNamaz from './TimeNamaz.js'
import icon from '../../../img/32.png'
import { Panel, PanelHeader, SimpleCell,  Avatar } from '@vkontakte/vkui';
const Home = ({ id, data }) => 
{
	return(
	   <Panel id={id}>
		<PanelHeader>{
			<SimpleCell 
			before={<Avatar size={32} 
			src={icon} />} 
			>Ислам в Твери
			</SimpleCell>
			} </PanelHeader>
	   {data && <TimeNamaz  data={data} />} 
		
	   </Panel>
)}; 



export default Home;
