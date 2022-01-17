import axios from "axios";


export const baseUrl  = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
    const {data} = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '1a9fb712f0msh97b2de4484dc5a0p165808jsna49b6fad7d2e'
          }
    })
    return data;
}