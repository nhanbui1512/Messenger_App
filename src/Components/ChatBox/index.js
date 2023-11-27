import classNames from 'classnames/bind';
import styles from './ChatBox.module.scss';
import Header from './Header';
import ChatContent from './ChatContent';
import Footer from './Footer';
import { useState } from 'react';
import reactsImage from '../../assests/images/reactions';

const cx = classNames.bind(styles);

function ChatBox() {
  const [messages, setMessages] = useState([
    {
      time: '17:28',
      contents: [
        {
          text: 'tin nhắn 1',
          reactions: {
            data: [
              {
                name: 'heart',
                count: 1,
                icon: reactsImage.heart,
              },

              {
                name: 'laugh',
                count: 1,
                icon: reactsImage.laugh,
              },
              {
                name: 'sad',
                count: 1,
                icon: reactsImage.sad,
              },
            ],
            countReact: 3,
          },
        },
      ],
    },
    {
      time: '17:30',
      contents: [
        {
          text: 'tin nhắn 1',
          reactions: {
            data: [
              {
                name: 'sad',
                count: 2,
                icon: reactsImage.sad,
              },

              {
                name: 'laugh',
                count: 2,
                icon: reactsImage.laugh,
              },
            ],
            countReact: 4,
          },
        },
      ],
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
