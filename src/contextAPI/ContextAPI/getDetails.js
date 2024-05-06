'use server'

import axios from "axios";
import { getOptions } from "../constances";
export const getDetails = async (type, id) => {

        try {
                await new Promise((resolve)=>setTimeout(resolve,1000))
                const url = `https://api.themoviedb.org/3/${type}/${id}?language=en-US`;
                const { data } = await axios(url, getOptions);
                return data;
        } catch (error) {
                console.log(error);
        }

}