import {useState} from 'react';
import messages from './messages';
import './Eightball.css';

const Eightball = function (props){
    let index = Math.floor(Math.random() * messages.length);
    const [message, setMessage] = useState(messages[index]);
    return (
        <div id="eightball" onClick={() => { index = Math.floor(Math.random() * messages.length); setMessage(messages[index])}} style={{backgroundColor : message.color}}><p>{message.msg}</p></div>
    );
}

export default Eightball;