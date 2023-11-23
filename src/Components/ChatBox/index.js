import classNames from 'classnames/bind';
import styles from './ChatBox.module.scss';
import Header from './Header';
import ChatContent from './ChatContent';
import Footer from './Footer';
import { useState } from 'react';

const cx = classNames.bind(styles);

function ChatBox() {
  const [messages, setMessages] = useState([
    {
      time: '17:28',
      contents: ['tin nhắn 1', 'tin nhắn 2', 'tin nhắn 3'],
    },
    {
      time: '17:30',
      contents: ['tin nhắn 1', 'tin nhắn 2', 'tin nhắn 3'],
      myself: true,
    },
  ]);

  return (
    <div className={cx('wrapper')}>
      <div className={cx('header')}>
        <Header />
      </div>
      <div className={cx('content')}>
        <ChatContent data={messages} />
      </div>
      <div className={cx('footer')}>
        <Footer setMessages={setMessages} />
      </div>
    </div>
  );
}

export default ChatBox;
