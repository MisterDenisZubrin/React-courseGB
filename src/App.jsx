import './styles/App.scss';
import Message from './components/Message';
import { useState, useEffect, useCallback } from "react";

function App() {

  // state

  const [text, setText] = useState('');
  const [author, setAuthor] = useState('');
  const [messageList, setMessageList] = useState([]);

  // functions

  const addMessage = useCallback((event) => {
    if (event) {
      event.preventDefault();
    }
    setAuthor('Человек:'); // Почему работает только со 2 раза?
    console.log(author);
    setMessageList([...messageList, { author: author, text: text }]);
  }, [messageList, author, text]);

  // effects

  useEffect(() => {
    // Первый рендер из-за инициализации author? В каком жизненном цикле она происходит?
    // Так и должно работать?
    console.log('render'); // Второй рендер из-за dev-версии
    if (author === 'Человек:') {
      setTimeout(() => {
        document.querySelector('.list').insertAdjacentHTML('beforeend',
          `<li class="message">
              <span class='message__author'>Робот:</span>
              <p class='message__text'>Сообщение отправлено</p>
            </li>`)
      }, 1000);
    } else {
      document.querySelector('.list').insertAdjacentHTML('beforeend',
        `<li class="message">
            <span class='message__author'>Робот:</span>
            <p class='message__text'>Добро пожаловать в чат!</p>
          </li>`)
    }
  }, [messageList, author]);

  // render

  return (
    <div className="App container">
      <div className="messenger">
        <ul className="list">
          {messageList.map((message, idx) => <Message key={idx} message={message} />)}
        </ul>
        <form action="#" className='form'>
          <textarea
            className='form__textarea'
            name="textarea"
            id="textarea"
            placeholder='Введите ваше сообщение...'
            value={text}
            onInput={(event) => { setText(event.target.value) }}
          ></textarea>
          <input type="submit" value="&#10003;" className='form__button' onClick={addMessage} />
        </form>
      </div>
    </div>
  );
}

export default App;