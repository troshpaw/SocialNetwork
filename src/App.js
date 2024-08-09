import './App.css';

const App = () => {
  return (
    <div className='app-wrapper'>

      <header className='header'>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png'></img>
      </header>
      <nav className='nav'>
        <div>
          <a>Profile</a>
        </div>
        <div>
          <a>Messages</a>
        </div>
        <div>
          <a>News</a>
        </div>
        <div>
          <a>Music</a>
        </div>
        <div>
          <a>Settings</a>
        </div>
      </nav>
      <div className='content'>
        <div>
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Imageworld-artphp3.png/1200px-Imageworld-artphp3.png'></img>
        </div>
        <div>
          avatar + description
        </div>
        <div>
          My posts
          <div>
            New post
          </div>
          <div>
            <div>
              Post 1
            </div>
            <div>
              Post 2
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
