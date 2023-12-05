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

const cx = classNames.bind(styles);

export default function ChatList({ children }) {
  useEffect(() => {
    getAllRoom()
      .then((res) => {
        if (res.result === true) {
          setRooms(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [rooms, setRooms] = useState([]);

  const renderRoom = () => {
    return rooms.map((room) => {
      return <ChatItem key={room.roomId} name={room.roomName} data={room} />;
    });
  };
  return (
    <div className={cx('wrapper')}>
      <div className={cx('header')}>
        <div className={cx('title-wrap')}>
          <h1 className={cx('title')}>Chat</h1>
        </div>
        <Link to={'/new'}>
          <CircleButton icon={<EditIcon />} />
        </Link>
      </div>
      <div className={cx('search-box')}>
        <Search />
      </div>
      <div className={cx('chat-list')}>
        <Routes>
          <Route
            element={<ChatItem newMess name={'Tin nhắn mới'}></ChatItem>}
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
    </div>
  );
}
