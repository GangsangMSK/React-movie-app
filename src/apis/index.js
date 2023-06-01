import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = '23e39cc9aa9c99d7457d7928326f432a';

const getNowPlayingMovies = async (page) => {
    try{
        const {data} = await axios({
            method: 'GET',
            url: BASE_URL + '/movie/now_playing',
            params: {
                api_key: API_KEY,
                language: 'ko',
                region: 'KR',
                page: page
            }
        });
        return data;
    } catch(error) {
        console.log("에러");
        throw Error(error);
    }
}

export{ getNowPlayingMovies}