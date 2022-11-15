import Message from '../Message/Message';
import './Messenger.scss'
import { useState, useEffect, useCallback, useRef } from "react";
import { useNavigate, useParams } from 'react-router-dom';
// Material UI Components
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Messenger() {

  const chats = [
    {
      name: 'Чат 1',
      id: 1,
      messages: []
    },
    {
      name: 'Чат 2',
      id: 2,
      messages: []
    }
  ];

  // state

  const [text, setText] = useState('');
  const [messageList, setMessageList] = useState([]);

  // functions

  const addMessage = useCallback((author = 'Человек:', message = text) => {
    setMessageList([...messageList, { author: author, text: message }]);
    if (chatId) {
      const list = chats.find(el => el.id === +chatId).messages;
      list.push({ author: author, text: message });
      console.log(list);
      console.log(messageList);
    }
  }, [messageList, text]);

  const handleSubmit = event => {
    event.preventDefault();
    addMessage();
  }

  let { chatId } = useParams();

  // Загрузка данных конкретного чата
  
  useEffect(() => {
    // const list = chats.find(el => el.id === +chatId).messages;
    // setMessageList([...messageList, ...list]);
    // console.log(list);
  }, [chatId]);

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
    inputRef.current?.querySelector('textarea').focus(); // Как правильно искать элемент?
  }, [messageList]);

  const navigate = useNavigate();

  return (
    <div className="messenger">
      <nav aria-label="main mailbox folders" className='messenger__chats'>
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={()=>{navigate('/chats/1')}}>
              <ListItemText primary="Чат 1" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={()=>{navigate('/chats/2')}}>
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
  );
}

export default Messenger;