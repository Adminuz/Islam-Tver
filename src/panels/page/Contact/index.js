import React from 'react';
import { Panel, PanelHeader,MiniInfoCell,SimpleCell,Group,Link} from '@vkontakte/vkui';
import {Icon28StoryQuestionCircleFillViolet,Icon20ArticleOutline,Icon20GlobeOutline,Icon20PlaceOutline,Icon20PhoneOutline} from '@vkontakte/icons';
const Contact = props => (
	<Panel id={props.id}>
		<PanelHeader 
		left={
		<SimpleCell 
		before={<Icon28StoryQuestionCircleFillViolet/>} 
		>Контакты</SimpleCell>
		
		}>

		</PanelHeader>

	
		<Group>
              <MiniInfoCell before={<Icon20ArticleOutline />} textWrap="full">
			  Официальный Mini Apps Духовного управления мусульман Тверской области (ДУМТвО)
              </MiniInfoCell>
			  
			  <MiniInfoCell before={<Icon20PhoneOutline />} textWrap="short">
			  +7 (4822) 75-10-52
              </MiniInfoCell>

			  <MiniInfoCell before={<Icon20PlaceOutline />} textWrap="short">
			  Тверь, Улица Советская, 66
              </MiniInfoCell>
			

			  <MiniInfoCell before={<Icon20GlobeOutline />}>
                <Link href="https://vk.com/islamtver">vk.com/islamtver</Link>
              </MiniInfoCell>

	 </Group>

	</Panel>
);



export default Contact;
