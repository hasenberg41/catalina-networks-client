import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Friends from './components/Friends/Friends';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

const App = (props) => {
  return (
    <BrowserRouter>

      <div className='App-main'>

        <Header />

        <Navbar />

        <div className='App-content'>
          <Routes>

            <Route path='/profile' element={<Profile posts={props.profilePosts} />} />
            <Route path='/dialogs/*' element={<Dialogs dialogs={props.personeDialogs} messages={props.messagesDialog} />} />
            <Route path='/friends/*' element={<Friends />} />
            <Route path='/music' element={<Music />} />
            <Route path='/settings' element={<Settings />} />

          </Routes>
        </div>
      </div >

    </BrowserRouter>
  );
}

export default App;
