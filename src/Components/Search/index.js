import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import globalStyles from '../GlobalStyles/GlobalStyles.module.scss';
import { SearchIcon } from '../Icons';
import CircleButton from '../CircleButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const cx = classNames.bind(styles);

export default function Search() {
  const [backInput, setBackInput] = useState(false);

  return (
    <div className={cx('wrapper')}>
      <div className={cx('container', globalStyles.pd_0_16)}>
        {backInput && (
          <CircleButton
            onClick={() => {
              setBackInput(false);
            }}
            className={cx('back-btn')}
            icon={<FontAwesomeIcon className={cx('back-icon')} icon={faArrowLeft} />}
          />
        )}
        <label className={cx('', globalStyles.row)}>
          <span className={cx('search-btn')}>
            <SearchIcon className={cx('search-icon')} />
          </span>
          <input
            onFocus={() => {
              setBackInput(true);
            }}
            placeholder="Tìm kiếm trên Messenger"
            className={cx('search-input')}
          ></input>
        </label>
      </div>
    </div>
  );
}
