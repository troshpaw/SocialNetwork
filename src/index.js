// import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import state from './redux/state';
import store from './redux/redux-store';
// import { addPost, updateNewPostText } from './redux/state';
// import { addMessage, updateNewMessageText } from './redux/state';
// import { subscrube } from './redux/state';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = (store) => {
    root.render(<App store={store} />);
};

rerenderEntireTree(store);

store.subscribe(() => {
    // let state = store.getState();
    // rerenderEntireTree(state);
    rerenderEntireTree(store);
});


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
