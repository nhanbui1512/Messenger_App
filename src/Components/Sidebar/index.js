import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Navigation from '../Navigation';
import ChatList from './ChatList';

const cx = classNames.bind(styles);

function Sidebar() {
  return (
    <div className={cx('wrapper')}>
      <Navigation />
      <ChatList />
    </div>
  );
}

export default Sidebar;
