import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import reactDom from 'react-dom';

// *********************************************************
// Writing to the dom with somewhat normal JS
// const rootDiv = document.getElementById('root');
// const greeting = document.createElement('p');
// greeting.innerHTML = "Hello from React App";

// const time = document.createElement('p');
// time.innerHTML = `It is ${(new Date()).toLocaleTimeString()}`;

// console.log(greeting);
// rootDiv.appendChild(greeting);
// rootDiv.appendChild(time);
// *********************************************************

const MovieCard = (props) =>
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

ReactDOM.render
(
  <div>
    <MovieCard 
    title="Batman v Superman: Dawn of Justice" 
    type="Movie!" 
    rated="pg-13" 
    runtime="138 minutes" 
    genre="Action, Adventure, Sci-Fi" 
    plot="Fearing that the actions of Superman are left unchecked, Batman takes on the Man of Steel, while the world wrestles with what kind of a hero it really needs." 
    actors="Ben Affleck, Henry Cavill, Amy Adams, Jesse Eisenberg" 
    posterUrl="https://upload.wikimedia.org/wikipedia/en/3/35/Supermanflying.png"/>
  </div>,
  document.getElementById('root')
  )

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();