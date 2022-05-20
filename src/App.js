import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Friends from './components/Friends/Friends';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

function App() {

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

  return (
    <BrowserRouter>

      <div className='App-main'>

        <Header />

        <Navbar />

        <div className='App-content'>
          <Routes>

            <Route path='/profile' element={<Profile posts={profilePosts} />} />
            <Route path='/dialogs/*' element={<Dialogs dialogs={dialogsData} messages={messagesData} />} />
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
