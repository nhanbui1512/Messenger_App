import classNames from 'classnames/bind';
import styles from './Dashboard.module.scss';

import ChatBox from '../../Components/ChatBox';
import Sidebar from '../../Components/Sidebar';
import { Route, Routes } from 'react-router-dom';
const cx = classNames.bind(styles);

function DashboardPage() {
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
