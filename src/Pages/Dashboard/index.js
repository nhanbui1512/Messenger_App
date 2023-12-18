import classNames from 'classnames/bind';
import styles from './Dashboard.module.scss';

import ChatBox from '../../Components/ChatBox';
import Sidebar from '../../Components/Sidebar';
import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { getCookie } from '../../Services/local/cookie';
import { useNavigate } from 'react-router-dom';
import { getMyProfile } from '../../Services/user';

const cx = classNames.bind(styles);

function DashboardPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = getCookie('authToken');
    if (!token) navigate('/login');
    getMyProfile(token)
      .then((res) => {
        if (res.result === false) navigate('/login');
      })
      .catch((err) => {
        console.log(err);
      });
  }, [navigate]);
  return (
    <div className={cx('wrapper')}>
      <Sidebar />
      <Routes>
        <Route key={1} path="/room/:roomid" element={<ChatBox />}></Route>
      </Routes>
    </div>
  );
}

export default DashboardPage;
