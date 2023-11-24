import classNames from 'classnames/bind';
import styles from './MessageItem.module.scss';
import Image from '../../Image';
import reactsImage from '../../../assests/images/reactions';

const cx = classNames.bind(styles);

export default function Reactions() {
  return (
    <div className={cx('reacts-wrapper')}>
      <div className={cx('reacts-group')}>
        <div className={cx('react-btn')}>
          <Image src={reactsImage.heart}></Image>
        </div>
        <div className={cx('react-btn')}>
          <Image src={reactsImage.laugh}></Image>
        </div>
        <div className={cx('count')}>
          <span>2</span>
        </div>
      </div>
    </div>
  );
}
