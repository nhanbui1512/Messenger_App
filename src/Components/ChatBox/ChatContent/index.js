import classNames from 'classnames/bind';
import styles from './ChatContent.module.scss';
import TimeBar from '../TimeBar';
import MessageItem from '../MessageItem';

const cx = classNames.bind(styles);

export default function ChatContent() {
  return (
    <div className={cx('wrapper')}>
      <TimeBar />
      <MessageItem
        contents={[
          'nhãn này cho biết rằng một cuộc tấn công từ chối dịch vụ phân tán đang được thực hiện bởi thiết bị bị nhiễm. Các luồng lưu lượng này được phát hiện như một phần của cuộc tấn công DDoS do lượng luồng lưu lượng hướng đến cùng một địa chỉ IP. ',
          'Tin nhắn 2',
          'Tin nhắn 3',
        ]}
      />
      <TimeBar />
      <MessageItem
        myself
        contents={[
          'nhãn này cho biết rằng một cuộc tấn công từ chối dịch vụ phân tán đang được thực hiện bởi thiết bị bị nhiễm. Các luồng lưu lượng này được phát hiện như một phần của cuộc tấn công DDoS do lượng luồng lưu lượng hướng đến cùng một địa chỉ IP. nhãn này cho biết rằng một cuộc tấn công từ chối dịch vụ phân tán đang được thực hiện bởi thiết bị bị nhiễm. Các luồng lưu lượng này được phát hiện như một phần của cuộc tấn công DDoS do lượng luồng lưu lượng hướng đến cùng một địa chỉ IP. ',
          'Tin nhắn 2',
          'Tin nhắn 3',
        ]}
      />
    </div>
  );
}
