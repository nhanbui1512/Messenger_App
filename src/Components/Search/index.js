import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { SearchIcon } from '../Icons';
import CircleButton from '../CircleButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const cx = classNames.bind(styles);

export default function Search() {
  const [cancle, setCancle] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const handleCancle = (e) => {
    e.preventDefault();
    setCancle(false);
    setSearchValue('');
  };

  return (
    <div className={cx('wrapper')}>
      <div className={cx('container', 'pd_0_16')}>
        {cancle && (
          <CircleButton
            onClick={handleCancle}
            className={cx('back-btn')}
            icon={<FontAwesomeIcon className={cx('back-icon')} icon={faArrowLeft} />}
          />
        )}
        <label style={{ flex: 1 }} className={cx('search-box', ['row'])}>
          <span className={cx('search-btn')}>
            <SearchIcon className={cx('search-icon')} />
          </span>
          <input
            value={searchValue}
            onFocus={() => {
              setCancle(true);
            }}
            onInput={(e) => {
              setSearchValue(e.target.value);
            }}
            placeholder="Tìm kiếm trên Messenger"
            className={cx('search-input')}
          ></input>
          {cancle && (
            <button onClick={handleCancle} className={cx('cancle-btn')}>
              <FontAwesomeIcon className={cx('cancle-icon')} icon={faXmark} />
            </button>
          )}
        </label>
      </div>
    </div>
  );
}
