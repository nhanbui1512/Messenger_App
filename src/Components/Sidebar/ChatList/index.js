import classNames from 'classnames/bind';
import styles from './ChatList.module.scss';
import CircleButton from '../../CircleButton';
import { EditIcon } from '../../Icons';
import Search from '../../Search';
import ChatItem from '../ChatItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { Link, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getAllRoom } from '../../../Services/roomService';
import { getCookie } from '../../../Services/local/cookie';
import AccountItem from '../AccountItem';

const cx = classNames.bind(styles);

export default function ChatList({ children }) {
  const [rooms, setRooms] = useState([
    {
      avatar: null,
      createAtStr: '2023-11-27T04:25:16.000Z',
      roomId: 1,
      roomName: 'Group công ty',
      numberUser: 4,
      idHostUser: 1,
      createAt: '2023-11-27T04:25:16.000Z',
      users: [
        {
          avatar: 'nhanbuiavatar',
          createAtStr: '2023-11-27T04:23:12.000Z',
          updateAtStr: null,
          userId: 1,
          userName: 'nhanbui1512',
          email: 'nhanb19@gmail.com',
          phoneNumber: '09139023424',
          createAt: '2023-11-27T04:23:12.000Z',
          updateAt: null,
        },
        {
          avatar: 'avatar.jpeg',
          createAtStr: '2023-11-27T04:23:30.000Z',
          updateAtStr: null,
          userId: 2,
          userName: 'nhanbui',
          email: 'buithiennhan0345@gmail.com',
          phoneNumber: '09139023424',
          createAt: '2023-11-27T04:23:30.000Z',
          updateAt: null,
        },
        {
          avatar: 'nguyenvana.jpeg',
          createAtStr: '2023-11-27T04:23:47.000Z',
          updateAtStr: null,
          userId: 3,
          userName: 'avannguyen12',
          email: 'nguyenvana@gmail.com',
          phoneNumber: '09139023424',
          createAt: '2023-11-27T04:23:47.000Z',
          updateAt: null,
        },
        {
          avatar: 'phantheanh.jpeg',
          createAtStr: '2023-11-27T04:24:10.000Z',
          updateAtStr: null,
          userId: 4,
          userName: 'theanh23',
          email: 'phantheanh2312@gmail.com',
          phoneNumber: '09139023424',
          createAt: '2023-11-27T04:24:10.000Z',
          updateAt: null,
        },
      ],
      messages: [
        {
          createTimeStr: '23:52 29/11/2023',
          last: '1 tuần',
          messageId: 54,
          content: 'Có tôi học bách khoa nè, bạn học khóa bao nhiêu',
          createAt: '2023-11-29T16:52:03.000Z',
          deleteAt: null,
          userUserId: 1,
          messagegroupId: 23,
          user: {
            avatar: 'nhanbuiavatar',
            userId: 1,
            userName: 'nhanbui1512',
            email: 'nhanb19@gmail.com',
            phoneNumber: '09139023424',
          },
          userName: 'Bạn',
        },
      ],
    },
  ]);
  const [isSearch, setIsSearch] = useState(false);
  const [searchResult, setSearchResult] = useState([]);

  const renderRoom = () => {
    return rooms.map((room) => {
      return <ChatItem key={room.roomId} name={room.roomName} data={room} />;
    });
  };

  useEffect(() => {
    const token = getCookie('authToken');
    getAllRoom({ token: token })
      .then((res) => {
        if (res.data) {
          setRooms(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className={cx('wrapper')}>
      <div className={cx('header')}>
        <div className={cx('title-wrap')}>
          <h1 className={cx('title')}>Đoạn chat</h1>
        </div>
        <Link to={'/new'}>
          <CircleButton icon={<EditIcon />} />
        </Link>
      </div>
      <div className={cx('search-box')}>
        <Search setSearchResult={setSearchResult} setIsSearch={setIsSearch} />
      </div>

      {isSearch || (
        <>
          <div className={cx('chat-list')}>
            <Routes>
              <Route
                element={<ChatItem newMess name={'Tin nhắn mới'} />}
                key={1}
                path="/new"
              ></Route>
            </Routes>
            {renderRoom()}
          </div>

          <div className={cx('footer')}>
            <div className={cx('footer-content')}>
              <FontAwesomeIcon className={cx('download-icon')} icon={faDownload} />
              <span>Dùng thử Messenger dành cho Windows</span>
            </div>
          </div>
        </>
      )}

      {isSearch && (
        <div className={cx('chat-list')}>
          <div style={{ paddingLeft: 6 }}>
            {searchResult.map((account) => {
              return <AccountItem data={account} key={account.userId} />;
            })}
          </div>
        </div>
      )}
    </div>
  );
}
