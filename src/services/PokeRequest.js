import axios from 'axios';
import { API_URL } from 'app/app-constants';

export async function getPokemonByUrl(url) {
    const response = await axios.get(url);
    return response.data;
}

export async function getPokemons(limit, offset) {
    console.log('Called');
    const response = await axios.get(`${API_URL}/pokemon/?limit=${limit}&offset=${offset}/`);
    return response.data;
}
