import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import CircleImage from '../../CircleImage';
const cx = classNames.bind(styles);

function AccountItem({ data }) {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('avatar-wrapper')}>
        <CircleImage src={data.avatar || ''} className={cx('avatar')} />
      </div>
      <div className={cx('content')}>
        <div className={cx('username-wrap')}>
          <span className={cx('username')}>{data.userName}</span>
        </div>
      </div>
    </div>
  );
}

export default AccountItem;
