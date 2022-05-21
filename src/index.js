import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
export const rerenderTree = (state) => root.render(
  <React.StrictMode>
    <App 
      state={state} 
      addPost={store.addPost.bind(store)} 
      updateNewPostTextArea={store.updateNewPostTextArea.bind(store)}
      sendMessage={store.sendMessage.bind(store)}
      updateNewMessageTextArea={store.updateNewMessageTextArea.bind(store)}  
    />
  </React.StrictMode>
);

rerenderTree(store.getState());

store.subscribe(rerenderTree);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
