import classNames from 'classnames/bind';
import styles from './CircleButton.module.scss';
const cx = classNames.bind(styles);

export default function CircleButton({
  children,
  icon,
  onClick,
  className = {},
  transparent = false,
}) {
  const classes = cx('wrapper', { [className]: className, transparent });

  return (
    <button onClick={onClick} className={classes}>
      {icon}
      {children}
    </button>
  );
}
