import './styles/App.scss';
import Message from './components/Message';
import { useState, useEffect, useCallback, useRef } from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function App() {

  // Массив чатов на будущее

  const chats = [
    {
      name: 'Чат 1',
      id: 1
    },
    {
      name: 'Чат 2',
      id: 2
    }
  ];
  
  // state

  const [text, setText] = useState('');
  const [messageList, setMessageList] = useState([]);

  // functions

  const addMessage = useCallback((author = 'Человек:', message = text) => {
    setMessageList([...messageList, { author: author, text: message }]);
  }, [messageList, text]);

  const handleSubmit = event => {
    event.preventDefault();
    addMessage();
  }

  // Ответ робота ( неправильно написано )

  // useEffect(() => {
  //   if (text) {
  //     setTimeout(() => {
  //       document.querySelector('.list').insertAdjacentHTML('beforeend',
  //         `<li class="message">
  //               <span class='message__author'>Робот:</span>
  //               <p class='message__text'>Сообщение отправлено</p>
  //             </li>`)
  //     }, 1000);
  //   }
  //   // В этом случае будет бесконечный цикл. Менять массив сообщений нельзя,
  //   // поскольку рендер работает на его основе.
  //   // setTimeout(() => {
  //   //   addMessage('Робот:', 'Сообщение отправлено');
  //   // }, 1000);
  // }, [messageList]); // Нельзя добавлять text

  // Автофокус

  const inputRef = useRef();

  useEffect(() => {
    console.log(inputRef);
    inputRef.current?.querySelector('textarea').focus(); // Как правильно искать элемент?
  }, [messageList]);


  // render

  return (
    <div className="App container">
      {/* 
      Оставил код для того, чтобы на его примере можно было посмотреть функционал автоответчика робота

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
      </div> */}

      <div className="messenger">
        <nav aria-label="main mailbox folders" className='messenger__chats'>
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Чат 1" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Чат 2" />
              </ListItemButton>
            </ListItem>
          </List>
        </nav>
        <div className="messenger__current-chat">
          <List className='messenger__messages-list'>
            {messageList.map((message, idx) => <Message key={idx} message={message} />)}
          </List>
          <TextField
            id="outlined-multiline-static"
            multiline
            rows={4}
            defaultValue="Введите ваше сообщение"
            className='input-field'
            value={text}
            onInput={(event) => { setText(event.target.value) }}
            placeholder='Введите ваше сообщение...'
            sx={{
              width: '80%',
              '& #outlined-multiline-static': {
                fontSize: '14px'
              }
            }}
            ref={inputRef}
          />
          <Button
            className='messenger__send-btn'
            variant="contained"
            onClick={handleSubmit}
            sx={{
              margin: '40px 0 0 10px'
            }}>&#10003;</Button>
        </div>
      </div>
    </div>
  );
}

export default App;