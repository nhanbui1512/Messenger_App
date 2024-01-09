import classNames from 'classnames/bind';
import styles from './ChatBox.module.scss';
import Header from './Header';
import ChatContent from './ChatContent';
import Footer from './Footer';
import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { StoreContext } from '../../store';
import { getMessages } from '../../Services/message';
import { getCookie } from '../../Services/local/cookie';
import Information from './Information';

const cx = classNames.bind(styles);

function ChatBox() {
  const context = useContext(StoreContext);
  const socket = context.socket;
  const [room, setRoom] = useState({});
  const { roomid } = useParams();
  const [more, setMore] = useState(false);
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
          content: null,
          createAt: '2023-11-29T16:52:03.000Z',
          deleteAt: null,
          userUserId: 1,
          roomchatRoomId: 1,
          messagegroupId: 23,
          reactions: {
            data: [],
            countReact: 0,
          },
          images: [
            {
              fileUrl: 'https://logowik.com/content/uploads/images/csv-file-format8052.jpg',
              createAtStr: '10:33 9/1/2024',
              id: 24,
              createAt: '2024-01-09T03:33:35.000Z',
              deleteAt: null,
              userUserId: 1,
              messageMessageId: 54,
              roomchatRoomId: 1,
            },
          ],
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
          images: [],
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
          images: [],
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
          images: [
            {
              fileUrl: 'https://logowik.com/content/uploads/images/csv-file-format8052.jpg',
              createAtStr: '10:33 9/1/2024',
              id: 24,
              createAt: '2024-01-09T03:33:35.000Z',
              deleteAt: null,
              userUserId: 1,
              messageMessageId: 54,
              roomchatRoomId: 1,
            },
          ],
        },
      ],
      myself: true,
    },
  ]);
  const userId = context.user.userId;

  useEffect(() => {
    const token = getCookie('authToken');

    getMessages({ roomid: roomid, page: 1, perPage: 10, token: token })
      .then((res) => {
        if (res.data) {
          setRoom(res.room);
          setMessages(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });

    socket.emit('joinRoom', { roomid: roomid });

    socket.on('message', (msg) => {
      if (msg.userUserId !== userId) msg.myself = false;
      // receive and handle message from socket
      setMessages((prev) => {
        const prevMsgs = [...prev];
        const isExist = prevMsgs.find((msgGroup) => msgGroup.id === msg.id);
        if (isExist) {
          prevMsgs[prevMsgs.length - 1].messages.push(msg.messages[msg.messages.length - 1]);
        } else {
          prevMsgs.push(msg);
        }
        return prevMsgs;
      });
    });
  }, [roomid, socket, userId]);
  return (
    <div className={cx('wrapper')}>
      <div className={cx('content-wrapper')}>
        <div className={cx('header')}>
          <Header setMore={setMore} room={room} />
        </div>

        <div className={cx('content')}>
          <ChatContent data={messages} setMessages={setMessages} />
        </div>
        <div className={cx('footer')}>
          <Footer setMessages={setMessages} />
        </div>
      </div>
      {more && <Information roomid={roomid} />}
    </div>
  );
}

export default ChatBox;
