import axios from 'axios';
const Base_url='https://youtube-v31.p.rapidapi.com';
const options = {
  
   
    params: {
      part: 'snippet',
      videoId: 'M7FIvfx5J10'
    },
    headers: {
      'X-RapidAPI-Key': '0178b4fa1cmsh8bef725aea89d3bp183925jsn482d5f88547c',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };
  export const fetchfrom=async(url)=>{
    const {data}=await axios.get(`${Base_url}/${url}`,options);
    return data;
  }
