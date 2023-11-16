import classNames from 'classnames/bind';
import styles from './ChatBox.module.scss';
import Header from './Header';
import ChatContent from './ChatContent';
import Footer from './Footer';

const cx = classNames.bind(styles);

function ChatBox() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('header')}>
        <Header />
      </div>
      <div className={cx('content')}>
        <ChatContent />
      </div>
      <div style={{ height: 60 }} className={cx('footer')}>
        <Footer />
      </div>
    </div>
  );
}

export default ChatBox;
