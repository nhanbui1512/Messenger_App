import classNames from 'classnames/bind';
import styles from './PopperWrapper.module.scss';
const cx = classNames.bind(styles);

export default function PopperWrapper({ children, className, styles, arrow = true }) {
  return (
    <div style={styles} className={cx('wrapper', { [className]: className })}>
      <div className={cx('children')}>{children}</div>

      {arrow && (
        <svg className={cx('arrow')} height="12" viewBox="0 0 25 12" width="25">
          <path
            clipRule="evenodd"
            d="M9.67157 9.17157C11.2337 10.7337 13.7663 10.7337 15.3284 9.17157L24.5 0L0.5 0L9.67157 9.17157Z"
          ></path>
        </svg>
      )}
    </div>
  );
}
