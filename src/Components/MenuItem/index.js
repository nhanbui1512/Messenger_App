import classNames from 'classnames/bind';
import styles from './MenuItem.module.scss';
import CircleButton from '../CircleButton';
import { Pin } from '../Icons';
const cx = classNames.bind(styles);

function MenuItem({ title, icon }) {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('icon-wrap')}>
        <CircleButton className={cx('icon')} icon={icon || <Pin />} />
      </div>
      <div className={cx('title')}>
        <span>{title || 'Xem tin nhắn đã ghim'}</span>
      </div>
    </div>
  );
}
export default MenuItem;
