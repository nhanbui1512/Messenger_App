import classNames from 'classnames/bind';
import styles from './Dropdown.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
// import MenuItem from '../MenuItem';

const cx = classNames.bind(styles);

function DropdownMenu({ children, title }) {
  const [isDrop, setIsDrop] = useState(false);

  return (
    <>
      <div
        onClick={() => {
          setIsDrop(!isDrop);
        }}
        className={cx('wrapper')}
      >
        <div className={cx('title')}>
          <span>{title || 'Thông tin về đoạn chat'}</span>
        </div>
        <div className={cx('icon-wrap')}>
          <FontAwesomeIcon
            className={cx('right-icon')}
            icon={isDrop ? faAngleDown : faAngleRight}
          />
        </div>
      </div>
      {isDrop && <div className="col"> {children}</div>}
    </>
  );
}

export default DropdownMenu;
