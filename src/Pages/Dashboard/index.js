import classNames from 'classnames/bind';
import styles from './Dashboard.module.scss';

import ChatBox from '../../Components/ChatBox';
import Sidebar from '../../Components/Sidebar';
const cx = classNames.bind(styles);

function DashboardPage() {
    return (
        <div className={cx('wrapper')}>
            <Sidebar />
            <ChatBox />
        </div>
    );
}

export default DashboardPage;
