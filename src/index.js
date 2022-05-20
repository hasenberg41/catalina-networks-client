import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogsData = [
  { id: 1, name: 'Valera' },
  { id: 2, name: 'Kesha' },
  { id: 3, name: 'Dasha' },
  { id: 4, name: 'Serega' }
];

let messagesData = [
  "Где деньги?", "Buy beer", "Lets go", "Sheet"
];

let profilePosts = [
  { likes: 0, text: "Buy beer" },
  { likes: 15, text: "Drinked beer" },
  { likes: 32, text: "oaoa" }
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App personeDialogs={dialogsData} messagesDialog={messagesData} profilePosts={profilePosts}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
