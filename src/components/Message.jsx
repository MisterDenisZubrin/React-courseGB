function Message(props) {
  return (
    <li className="message">
      <span className='message__author'>{props.message.author}</span>
      <p className='message__text'>{props.message.text}</p>
    </li>
  );
}

export default Message;