// import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
// import state from './redux/state';
import { addPost, updateNewPostText } from './redux/state';
import { updateNewMessageText } from './redux/state';

const root = ReactDOM.createRoot(document.getElementById('root'));

export let rerenderEntireTree = (state) => {
  root.render(
    <App 
      state={state} 
      addPost={addPost} 
      updateNewPostText={updateNewPostText} 
      updateNewMessageText={updateNewMessageText}
    />
  );
};

// export let rerenderEntireTree = (state) => {
//   ReactDOM.createRoot(document.getElementById('root')).render(
//     <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} />
//   );
// };