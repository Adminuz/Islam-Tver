import React from 'react';

import {Icon12Verified} from '@vkontakte/icons'
import {SimpleCell,  Avatar } from '@vkontakte/vkui';
const style = { 
    color: 'white',
    backgroundColor: 'transparent',
 
}

const ContinerTime = ({date}) =>{
    const img = require(`../../img/prayer/${date.img}.png`).default;
   
     return(
     <SimpleCell 
     before={<Avatar 
        size={55} 
        mode='image'
        shadow={false}
        style={style} 
        src={img}/>} 
     badge={(date.status) ? <Icon12Verified/>:null } 
     after={date.time} 
     description={date.info}>{date.name}
     </SimpleCell>
     )
 }
export default ContinerTime;