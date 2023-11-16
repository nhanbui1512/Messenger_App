import classNames from 'classnames/bind';
import styles from './TimeBar.module.scss';
const cx = classNames.bind(styles);

export default function TimeBar() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <span className={cx('time')}>17:38</span>
      </div>
    </div>
  );
}
