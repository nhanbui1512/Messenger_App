import classNames from 'classnames/bind';
import styles from './SearchItem.module.scss';
import CircleImage from '../../../Components/CircleImage';

const cx = classNames.bind(styles);

function SearchItem({ data }) {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('avatar-wrapper')}>
        <CircleImage src={data.avatar} className={cx('avatar')} />
      </div>

      <div className={cx('user-name')}>
        <span>{data.userName}</span>
      </div>
    </div>
  );
}

export default SearchItem;
