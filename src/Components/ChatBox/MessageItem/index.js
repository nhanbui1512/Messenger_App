import classNames from 'classnames/bind';
import styles from './MessageItem.module.scss';
import Image from '../../Image';

const cx = classNames.bind(styles);

export default function MessageItem() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('avatar-container')}>
        <Image className={cx('avatar')} />
      </div>
      <div className={cx('mess-container')}>
        <span className={cx('mess-content')}>
          Nhãn này cho biết rằng một cuộc tấn công từ chối dịch vụ phân tán đang được thực hiện bởi
          thiết bị bị nhiễm. Các luồng lưu lượng này được phát hiện như một phần của cuộc tấn công
          DDoS do lượng luồng lưu lượng hướng đến cùng một địa chỉ IP.
        </span>
      </div>
    </div>
  );
}
