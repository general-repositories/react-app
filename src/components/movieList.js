import React, {useState, useEffect} from "react";
import MovieService from "../service/movie.service";
// import movieService from "../service/movie.service";

// Functional Component MovieList
export const MovieList = () =>
{
	const [movies, setMovies] = useState([]);
	
	const movieService = new MovieService();
	
	// const [pages, setPages] = useState();
	// const [movieTitle, setMovieTitle] = useState();
	// const [currentPage, setCurrentPage] = useState();

	// const getMoviesByTitle = async (title) =>
	// {
	// 	setMovieTitle(title);
	// 	setPages();
	// 	const movieList = await movieService.getMoviesByTitle(title);
	// }

	// const getMoviesByPage = async () =>
	// {
	// 	setCurrentPage(page);
	// 	const movieList = await movieService.getMoviesByTitle(movieTitle, page);
	// 	console.log("movieListByPage: ", movieList);
	// }

	async function getMovies()
	{
		// set movies to whatever comes out of movieService
		const moviesResponse = await movieService.getMovies('star wars');
		// set whatever is in movies.Search into the state
		setMovies(moviesResponse.Search); // takes whatever is in moviesResponse.Search and stuffs it into movies state variable
		// Why is state special?
		// State variables are "watched" for changes, if one changes, the DOM auto updates
	}

	// This runs by default when the page loads (this is the first initial run of getMovies())
	useEffect(() => {getMovies();}, []);

	// const [show, setShow] = useState();
	// const showMovie = (index) => 
	// {
	// 	if(index === show) return setShow(null);setShow(index);
	// }

	return (
		<div>
			{
				movies.map((movie, index) => (
					<div className="movie-card" key={index}>
						<img src={movie.Poster} alt={`${movie.Title}`}/>
						<div>
							<h5>{movie.title}</h5>
							<button
								onClick={() => {console.log(movie)}}
							>Log Movie</button>
						</div>
					</div>
				))
			}
		</div>
	)
}