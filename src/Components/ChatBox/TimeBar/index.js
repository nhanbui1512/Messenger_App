import classNames from 'classnames/bind';
import styles from './TimeBar.module.scss';
const cx = classNames.bind(styles);

export default function TimeBar({ children }) {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <span className={cx('time')}>{children}</span>
      </div>
    </div>
  );
}
