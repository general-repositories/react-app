import axios from 'axios';
const apiKey = '7ea59a4d';
export default class MovieService
{
	getMovies(title,page=1)
	{
		return axios.get(`https://www.omdbapi.com/?s=${title}&page=${page}&apikey=${apiKey}`)
		.then((response) => response.data)
		.catch((error) => console.error(error));
	}

	getMovieByID(ID)
	{
		return axios.get(`https://www.omdbapi.com/?i=${ID}&apikey=${apiKey}`)
		.then((response) => response.data)
		.catch((error) => console.error(error));
	}
}