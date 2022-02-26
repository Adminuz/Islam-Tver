import React ,{ useState} from 'react';


const useData =  (month) => {
    const date = month || new Date().getMonth() +1;
    const data =  require(`../data/${date}.json`);
   return data;

}

export default useData;