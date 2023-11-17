import classNames from 'classnames/bind';
import styles from './GreenDot.module.scss';
const cx = classNames.bind(styles);

export function GreenDot({ className }) {
  return <div className={cx('wrapper', { [className]: className })}></div>;
}
