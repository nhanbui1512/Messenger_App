import classNames from 'classnames/bind';
import styles from './ChatContent.module.scss';
import TimeBar from '../TimeBar';
import MessageItem from '../MessageItem';

const cx = classNames.bind(styles);

export default function ChatContent() {
  return (
    <div className={cx('wrapper')}>
      <TimeBar />
      <MessageItem />
    </div>
  );
}
