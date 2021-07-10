import logo from './logo.svg';
import './App.css';
import MovieService from './service/movie.service';
import { useEffect } from 'react';
import { MovieList } from './components/movieList';

const App = () => {

  return(
    <div>
      <MovieList/>
    </div>
  )

  // const {getMovies} = new MovieService();

  // const [movieList, setMovieList] = useState();

  // const getMovieList = async (title => {
  //   const movies = await getMovies(title);
  //   setMovieList(movies.Search)
  // };

  // useEffect(()) => {
  //   getMovieList('star wars');
  // }, (1);
}

export default App;