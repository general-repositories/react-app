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


// *********************************************************
// Components

// Class Based Component
class MyComponent extends React.Component
{
  render()
  {
    return <h2>This is my component</h2>
  }
}

// Function Based Component
const Greeting = (props) =>
{
  return (
    <div>
      <h1>Hello {props.name}</h1>
      <h2>You are {props.age} years old</h2>
    </div>
  )
}

ReactDOM.render
(
  <div>
    <Greeting name="Austin" age={27} />
    <Greeting name="Robert" age="35" />
    <MyComponent/>
  </div>,
  document.getElementById('root')
  )

// *********************************************************
// Getting crazy with props

// const Post = (props) =>
// {
//   return (
//     <div>
//       <img src={props.profileImage} />
//       <p><strong>{props.name}</strong></p>
//       <p>{props.text}</p>
//       <button>Like</button>
//       <button>Share</button>
//     </div>
//   )
// }

// ReactDOM.render
// (
//   <div>
//     <Post profileImage="./img/image" name="John Doe" text={"some text"} />
//   </div>,
//   document.getElementById('root'
// )
// *********************************************************  
  
// *********************************************************
// "JSX" Idk what that means exactly, but it's pret cool
// Component Stuff


// const myAge = 27;
// setInterval(() => {
//   ReactDOM.render
//   (
//     <div>
//       <p>Hello  from React App</p>
//       <p>It is {new Date().toLocaleTimeString()}</p>
//       <p>2 + 2 = {2+2}</p>
//       <p>Am I 18 years or older: {myAge >= 18 ? 'yes' : 'no'}</p>
//     </div>,
//     document.getElementById('root')
//   )
// }, 1000);
// *********************************************************

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();