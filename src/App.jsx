import './styles/App.scss';
import Message from './components/Message';
import { useState, useEffect, useCallback } from "react";
// import {  } from "@material-ui/core";

function App() {

  // state

  const [text, setText] = useState('');
  const [messageList, setMessageList] = useState([]);

  // functions

  const addMessage = useCallback(( author = 'Человек:', message = text) => {
    setMessageList([...messageList, { author: author, text: message }]);
  }, [messageList, text]);

  const handleSubmit = event => {
    event.preventDefault();
    addMessage();
  }

  // effects

  useEffect(() => {
    if (text) {
      setTimeout(() => {
        document.querySelector('.list').insertAdjacentHTML('beforeend',
          `<li class="message">
                <span class='message__author'>Робот:</span>
                <p class='message__text'>Сообщение отправлено</p>
              </li>`)
      }, 1000);
    }
    // В этом случае будет бесконечный цикл. Менять массив сообщений нельзя,
    // поскольку рендер работает на его основе.
    // setTimeout(() => {
    //   addMessage('Робот:', 'Сообщение отправлено');
    // }, 1000);
  }, [messageList]); // Нельзя добавлять text

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
            placeholder='Введите ваше сообщение...'
            value={text}
            onInput={(event) => { setText(event.target.value) }}
          ></textarea>
          <input type="submit" value="&#10003;" className='form__button' onClick={handleSubmit} />
        </form>
      </div>
    </div>
  );
}

export default App;