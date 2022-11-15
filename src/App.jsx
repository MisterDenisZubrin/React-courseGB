import './styles/App.scss';
import Messenger from './components/Messenger/Messenger';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <div className="App container">

        <nav>
          <ul className="nav">
            <li><Link to="/">Главная</Link></li>
            <li><Link to="/chats">Чаты</Link></li>
            <li><Link to="/profile">Профиль</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/"></Route>
          <Route path="/chats" element={<Messenger />}></Route>
          <Route path="/chats/:chatId" element={<Messenger />}></Route>
          <Route path="/profile"></Route>
          <Route path="*" element={<p>Страница не найдена</p>}></Route>
        </Routes>

      </div>
    </BrowserRouter >
  );
}

export default App;