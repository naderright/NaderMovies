'use client'
import axios from "axios";
import { createContext,  useEffect,  useState } from "react"
import {  getOptions } from "../getOptions";

export const MovieContext = createContext([]);

export const MovieContextProvider = (props) => {

    const [nowPlaying, setNowPlaying] = useState([]);
    const [upcoming, setUpcoming] = useState([]);
    const [popular, setPopular] = useState([]);
    const [topRated, setTopRated] = useState([]);

      const getMovie = async(type,calback,page='1')=>{
        const url = `https://api.themoviedb.org/3/movie/${type}?language=en-US&page=${page}`;
        const {data} = await axios(url,getOptions);
        calback(data.results);
        
      }
    //   useEffect(()=>{
    //     getMovie('now_playing',setNowPlaying,'2')
    //   },[])

    return <MovieContext.Provider value={{
        getMovie,setNowPlaying, setUpcoming, setPopular
        , setTopRated, nowPlaying, upcoming, popular, topRated
    }}>
        {props.children}
    </MovieContext.Provider>
}