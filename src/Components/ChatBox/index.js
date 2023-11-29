import classNames from 'classnames/bind';
import styles from './ChatBox.module.scss';
import Header from './Header';
import ChatContent from './ChatContent';
import Footer from './Footer';
import { useEffect, useState } from 'react';
import axios from 'axios';

const cx = classNames.bind(styles);

function ChatBox() {
  // const [messages, setMessages] = useState([
  //   {
  //     time: '17:28',
  //     contents: [
  //       {
  //         text: 'tin nhắn 1',
  //         reactions: {
  //           data: [
  //             {
  //               name: 'heart',
  //               count: 1,
  //               icon: reactsImage.heart,
  //             },

  //             {
  //               name: 'laugh',
  //               count: 1,
  //               icon: reactsImage.laugh,
  //             },
  //             {
  //               name: 'sad',
  //               count: 1,
  //               icon: reactsImage.sad,
  //             },
  //           ],
  //           countReact: 3,
  //         },
  //       },
  //     ],
  //   },
  //   {
  //     time: '17:30',
  //     contents: [
  //       {
  //         text: 'tin nhắn 1',
  //         reactions: {
  //           data: [
  //             {
  //               name: 'sad',
  //               count: 2,
  //               icon: reactsImage.sad,
  //             },

  //             {
  //               name: 'laugh',
  //               count: 2,
  //               icon: reactsImage.laugh,
  //             },
  //           ],
  //           countReact: 4,
  //         },
  //       },
  //     ],
  //     myself: true,
  //   },
  // ]);
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    axios
      .get(`http://192.168.0.101:3000/message/get-by-room?roomid=1&page=1&per_page=5`, {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJOYW1lIjoibmhhbmJ1aTE1MTIiLCJlbWFpbCI6Im5oYW5iMTlAZ21haWwuY29tIiwiaWF0IjoxNzAxMjI3NDIxLCJleHAiOjE3MDM4MTk0MjF9.MX1kxk7CiNB8nki-GMB1oSJTY0YzX0KTUqYHUhRA4N4`,
        },
      })
      .then((res) => {
        setMessages(res.data.data.reverse());
      })
      .catch((error) => console.log(error.message));
  }, []);
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
