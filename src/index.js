import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Blarg from './App';
import reportWebVitals from './reportWebVitals';
import reactDom from 'react-dom';
import {useState} from 'react';
// import {ErrorComponent} from './components/StateExample';
import {MovieCard} from './components/movieCard';
import 'bootstrap/dist/css/bootstrap.css';

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


ReactDOM.render
(
  // <div>
  //   <ErrorComponent/>
  // </div>,

  // <div>
  //   <MovieCard 
  //   title="Batman v Superman: Dawn of Justice" 
  //   type="Movie!" 
  //   rated="pg-13" 
  //   runtime="138 minutes" 
  //   genre="Action, Adventure, Sci-Fi" 
  //   plot="Fearing that the actions of Superman are left unchecked, Batman takes on the Man of Steel, while the world wrestles with what kind of a hero it really needs." 
  //   actors="Ben Affleck, Henry Cavill, Amy Adams, Jesse Eisenberg" 
  //   posterUrl="https://upload.wikimedia.org/wikipedia/en/3/35/Supermanflying.png"/>
  // </div>,

  <div>
    <Blarg/>
  </div>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();