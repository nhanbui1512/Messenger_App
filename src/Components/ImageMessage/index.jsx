import classNames from 'classnames/bind';
import styles from './ImageMessage.module.scss';
import images from '../../assests/images';
const cx = classNames.bind(styles);

function ImageMessage({ data }) {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('cover')}></div>
      <img className={cx('image')} src={data.fileUrl || images.noImage} alt=""></img>
    </div>
  );
}
export default ImageMessage;
