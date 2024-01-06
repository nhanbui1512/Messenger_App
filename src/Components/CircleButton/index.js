import classNames from 'classnames/bind';
import styles from './CircleButton.module.scss';
import { useEffect, useRef } from 'react';
const cx = classNames.bind(styles);

export default function CircleButton({
  children,
  icon,
  onClick,
  className = {},
  onOutsideClick = undefined,
  transparent = false,
}) {
  const btnRef = useRef();
  const classes = cx('wrapper', { [className]: className, transparent });

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Kiểm tra xem sự kiện click có xảy ra ngoài nút button không
      if (btnRef.current && !btnRef.current.contains(event.target)) {
        // Thực hiện hành động khi click ra ngoài
        onOutsideClick();
      }
    };

    // Lắng nghe sự kiện click ở mức độ component gốc
    if (onOutsideClick) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    // Clean up sự kiện khi component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onOutsideClick]);

  return (
    <button ref={btnRef} onClick={onClick} className={classes}>
      {icon}
      {children}
    </button>
  );
}
