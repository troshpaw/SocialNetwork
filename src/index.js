import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogs = [
  { id: 1, name: 'Dimych' },
  { id: 2, name: 'Sveta' },
  { id: 3, name: 'Alex' },
  { id: 4, name: 'Masha' },
  { id: 5, name: 'Victor' }
];

let messages = [
  { id: 1, message: 'Hello!' },
  { id: 2, message: 'How are you?' },
  { id: 3, message: 'Bye-bye!' }
];

let posts = [
  { id: 1, message: 'Hi, how are you?', likesCount: 10 },
  { id: 2, message: 'This is my first post!', likesCount: 15 },
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App dialogs={dialogs} messages={messages}  posts={posts}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
