import React, { useState } from 'react';
import {Tabbar,TabbarItem,Counter} from '@vkontakte/vkui';
import {Icon28ServicesCircleFillTurquoise,Icon28StoryQuestionCircleFillViolet,Icon28CalendarCircleFillRed} from '@vkontakte/icons';



export default function Menu({go}){
    const [simple, setSimple] = useState('one');


	const acte = (e) => {
         go(e)
        setSimple(e.currentTarget.dataset.sele)
	};




return( <Tabbar>
    <TabbarItem selected={simple === 'one'} onClick={acte} data-sele="one"  data-to="home" text="Главный">
      <Icon28ServicesCircleFillTurquoise />
    </TabbarItem>
    <TabbarItem selected={simple === 'two'} onClick={acte} data-sele="two" data-to="prayer" text="Намаз">
      <Icon28CalendarCircleFillRed />
    </TabbarItem>
    <TabbarItem selected={simple === 'three'} onClick={acte} data-sele="three" data-to="contact" text="Контакты">
      <Icon28StoryQuestionCircleFillViolet />
    </TabbarItem>
  </Tabbar>)

}