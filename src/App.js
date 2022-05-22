import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Friends from './components/Friends/Friends';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';

const App = (props) => {
  return (
    <BrowserRouter>

      <div className='App-main'>

        <Header />

        <Navbar />

        <div className='App-content'>
          <Routes>

            <Route path='/profile' element={<Profile
              state={props.state.profilePage}
              dispatch={props.dispatch} />}
            />

            <Route path='/dialogs/*' element={<DialogsContainer
              state={props.state.dialogsPage}
              dispatch={props.dispatch} />}
            />
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
