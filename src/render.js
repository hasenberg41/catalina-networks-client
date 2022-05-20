import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state, { addPost } from './redux/state';

const root = ReactDOM.createRoot(document.getElementById('root'));
export const rerenderTree = () => root.render(
  <React.StrictMode>
    <App state={state} addPost={addPost} />
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
