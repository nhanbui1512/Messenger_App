import classNames from 'classnames/bind';
import styles from './ChatBox.module.scss';
import Header from './Header';
import ChatContent from './ChatContent';
import Footer from './Footer';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
const cx = classNames.bind(styles);

function ChatBox() {
  const [messages, setMessages] = useState([
    {
      createAtStr: '23:52 29/11/2023',
      id: 23,
      createAt: '2023-11-29T16:52:03.000Z',
      userUserId: 3,
      roomchatRoomId: 1,
      user: {
        avatar: 'nguyenvana.jpeg',
        userId: 3,
        userName: 'avannguyen12',
        email: 'nguyenvana@gmail.com',
        phoneNumber: '09139023424',
      },
      messages: [
        {
          createTimeStr: '23:52 29/11/2023',
          last: '3 ngày',
          messageId: 54,
          content: 'Có tôi học bách khoa nè, bạn học khóa bao nhiêu',
          createAt: '2023-11-29T16:52:03.000Z',
          deleteAt: null,
          userUserId: 1,
          roomchatRoomId: 1,
          messagegroupId: 23,
          reactions: {
            data: [],
            countReact: 0,
          },
        },
      ],
      myself: false,
    },
    {
      createAtStr: '22:05 29/11/2023',
      id: 21,
      createAt: '2023-11-29T15:05:32.000Z',
      userUserId: 1,
      roomchatRoomId: 1,
      user: {
        avatar: 'nhanbuiavatar',
        userId: 1,
        userName: 'nhanbui1512',
        email: 'nhanb19@gmail.com',
        phoneNumber: '09139023424',
      },
      messages: [
        {
          createTimeStr: '22:05 29/11/2023',
          last: '3 ngày',
          messageId: 47,
          content: 'Trong nhóm mình có ai học bách khoa không nhỉ',
          createAt: '2023-11-29T15:05:32.000Z',
          deleteAt: null,
          userUserId: 1,
          roomchatRoomId: 1,
          messagegroupId: 21,
          reactions: {
            data: [],
            countReact: 0,
          },
        },
      ],
      myself: true,
    },
    {
      createAtStr: '21:53 29/11/2023',
      id: 19,
      createAt: '2023-11-29T14:53:05.000Z',
      userUserId: 1,
      roomchatRoomId: 1,
      user: {
        avatar: 'nhanbuiavatar',
        userId: 1,
        userName: 'nhanbui1512',
        email: 'nhanb19@gmail.com',
        phoneNumber: '09139023424',
      },
      messages: [
        {
          createTimeStr: '21:50 29/11/2023',
          last: '3 ngày',
          messageId: 36,
          content: 'Chào Thế Anh nhé',
          createAt: '2023-11-29T14:50:46.000Z',
          deleteAt: null,
          userUserId: 1,
          roomchatRoomId: 1,
          messagegroupId: 19,
          reactions: {
            data: [
              {
                title: 'laugh',
                users: [4],
              },
              {
                title: 'sad',
                users: [2, 3],
              },
            ],
          },
        },
        {
          createTimeStr: '21:50 29/11/2023',
          last: '3 ngày',
          messageId: 37,
          content: 'Rất vui được làm quen',
          createAt: '2023-11-29T14:50:47.000Z',
          deleteAt: null,
          userUserId: 1,
          roomchatRoomId: 1,
          messagegroupId: 19,
          reactions: {
            data: [],
          },
        },
      ],
      myself: true,
    },
  ]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/message/get-by-room?roomid=1&page=1&per_page=5`, {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJOYW1lIjoibmhhbmJ1aTE1MTIiLCJlbWFpbCI6Im5oYW5iMTlAZ21haWwuY29tIiwiaWF0IjoxNzAxNzcxODM2LCJleHAiOjE3MDQzNjM4MzZ9.ZpRkIIAbYMvZurdOSPiw33r6UjJEZhZXW3lRL_m17rY`,
        },
      })
      .then((res) => {
        setMessages(res.data.data.reverse());
      })
      .catch((error) => console.log(error.message));
  }, []);
  return (
    <div className={cx('wrapper')}>
      <Routes>
        <Route
          path="/room/:roomid"
          element={
            <>
              <div className={cx('header')}>
                <Header />
              </div>

              <div className={cx('content')}>
                <ChatContent data={messages} setMessages={setMessages} />
              </div>
              <div className={cx('footer')}>
                <Footer setMessages={setMessages} />
              </div>
            </>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default ChatBox;
