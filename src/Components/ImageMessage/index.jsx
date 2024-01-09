import classNames from 'classnames/bind';
import styles from './ImageMessage.module.scss';
const cx = classNames.bind(styles);

function ImageMessage() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('cover')}></div>
      <img
        className={cx('image')}
        src="https://logowik.com/content/uploads/images/csv-file-format8052.jpg"
        alt=""
      ></img>
    </div>
  );
}
export default ImageMessage;
