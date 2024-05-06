// 'use client'
// import axios from "axios";
// import { createContext, useEffect, useState } from "react"
// import {  getOptions } from "../getOptions";

// export const TVContext = createContext([]);

// export const TVContextProvider = (props) => {

//     const [airingToday, setAiringToday] = useState([]);
//     const [onTheAir, setOnTheAir] = useState([]);
//     const [popular, setPopular] = useState([]);
//     const [topRated, setTopRated] = useState([]);

//       const getTV = async(type,calback,page='1')=>{
//         const url = `https://api.themoviedb.org/3/movie/${type}?language=en-US&page=${page}`;
//         const {data} = await axios(url,getOptions);
//         calback(data.results);
        
//       }

'use server'
import axios from "axios";
import { getOptions } from "../constances";


export const getAllTV = async (type,page) => {

    try {
        await new Promise((resolve)=>setTimeout(resolve,1000))

        const url = `https://api.themoviedb.org/3/tv/${type}?language=en-US&page=${page}`;
        const { data } = await axios(url, getOptions);
        return data.results
    } catch (error) {
        console.log(error);
    }


}
     
//     return <TVContext.Provider value={{
//         getTV,setOnTheAir, setAiringToday, setPopular
//         , setTopRated, airingToday, onTheAir, popular, topRated
//     }}>
//         {props.children}
//     </TVContext.Provider>
// }