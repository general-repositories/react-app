import { movies } from "./movieList";


// Movie Card App Thing
export const MovieCard = (props) =>
{
  return (
    <div className="flex-container">
      <div className="superman-center">
        <img src={props.posterUrl}/>
      </div>
      <div className="flex-column">
        <h1>{props.title}</h1>
        <div>
          <h2 className="g-box">{props.type}</h2>
          <h2 className="g-box">{props.rated}</h2>
          <h2 className="g-box">{props.runtime}</h2>
          <h2 className="g-box">{props.genre}</h2>
        </div>
        <h2>Plot</h2>
        <p>{props.plot}</p>
        <h2>Actors</h2>
        <p>{props.actors}</p>
      </div>
    </div>
  )
}

export const MovieList = (movies) =>
{
    <div>
        
    </div>
}