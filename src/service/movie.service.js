export default class MovieService
{
	async getMovies(title)
	{
		const apiKey = '7ea59a4d';
		const response = await fetch(
			`https://www.omdbapi.com/?s=${title}&apikey=${apiKey}`, {
				method: "GET"
			}
		);

		return response.json();
	}
}