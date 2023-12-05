import classNames from 'classnames/bind';
import styles from './NavPopper.module.scss';

const cx = classNames.bind(styles);

export default function NavPopper({ title }) {
  return (
    title && (
      <div className={cx('wrapper')}>
        <span className={cx('title')}>{title}</span>
      </div>
    )
  );
}
