import React, {useState, useEffect} from "react";
import MovieService from "../service/movie.service";

// Functional Component MovieList
export const MovieList = () =>
{

	// const [movies, setMovies] = useState([]);

	const [movies, setMovies] = useState([]);
	const movieService = new MovieService();
	async function getMovies()
	{
		const movies = await movieService.getMovies('star wars');
		setMovies(movies.Search);
	}

	useEffect(() => {getMovies();}, []);

	const [show, setShow] = useState();
	const showMovie = (index) => {
		if(index === show) return setShow(null);setShow(index);
	}

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