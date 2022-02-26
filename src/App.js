import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import { View, AdaptivityProvider,ScreenSpinner, AppRoot} from '@vkontakte/vkui';
import "@vkontakte/vkui/dist/vkui.css";

/// Component
import Home from './panels/page/Home';
import Prayer from './panels/page/Prayer';
import Contact from './panels/page/Contact';
import Menu from './panels/page/menu';



const App = () => {
	const [activePanel, setActivePanel] = useState('home');
    const [getTodey , setTodey] = useState(null);

	
    const [getMonth, setMonth] = useState(null);
    const [popout, setPopout] = useState(<ScreenSpinner size='large' />);
	   



	   async function prayerTimes(){ 
		const date = new Date();
		const  month = date.getMonth() +1;
		const day = date.getDate() -1;
		const data = await require(`./data/${month}.json`);
		 setMonth(data);
		 setTodey(data[day]);
		 setPopout(null);
		 }



	useEffect(() => {

		prayerTimes();
           bridge.subscribe(({ detail: { type, data }}) => {
			if (type === 'VKWebAppUpdateConfig') {
				const schemeAttribute = document.createAttribute('scheme');
				schemeAttribute.value = 'client_light';
				document.body.attributes.setNamedItem(schemeAttribute);
			}
		});
	
  

	}, []);

	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};
	
	return (
		<AdaptivityProvider>
			<AppRoot>
				<View activePanel={activePanel} popout={popout} >
					<Home id='home' data={getTodey} go={go} />
					<Prayer id='prayer' data={getMonth} go={go} />
					<Contact id='contact' go={go} />
				</View>
				</AppRoot>
			<Menu go={go}/> 
		</AdaptivityProvider>
	);
}

export default App;
