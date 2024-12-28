'use server'

import axios from "axios";
import { getOptions } from "../constances";
export const getDetails = async (type, id) => {

        try {
              
                const url = `https://api.themoviedb.org/3/${type}/${id}?language=en-US`;
                const { data } = await axios(url, getOptions);
                return data;
        } catch (error) {
                console.log(error);
        }

}