import classNames from 'classnames/bind';
import styles from './CircleImage.module.scss';
import images from '../../assests/images';

const cx = classNames.bind(styles);
export default function CircleImage({ className, src }) {
  return (
    <div className={cx('wrapper', { [className]: className })}>
      <img alt="img" src={src || images.user} />
    </div>
  );
}
