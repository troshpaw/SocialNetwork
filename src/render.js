// import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
// import state from './redux/state';
import { addPost } from './redux/state';

export let rerenderEntireTree = (state) => {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <App state={state} addPost={addPost} />
  );
};