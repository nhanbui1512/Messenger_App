import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { SearchIcon } from '../Icons';
import CircleButton from '../CircleButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { searchUser } from '../../Services/user';
import { getCookie } from '../../Services/local/cookie';
import { useDebounce } from '../../hooks';

const cx = classNames.bind(styles);

export default function Search({ setIsSearch, setSearchResult = () => {} }) {
  const [cancle, setCancle] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const debounceValue = useDebounce(searchValue, 600);

  const handleCancle = (e) => {
    e.preventDefault();
    setIsSearch(false);
    setCancle(false);
    setSearchValue('');
  };

  useEffect(() => {
    if (!debounceValue.trim()) {
      setSearchResult([]);
      return;
    }

    const fetchApi = async () => {
      try {
        const token = getCookie('authToken') || '';
        const result = await searchUser(token, debounceValue);
        if (result.isSuccess) {
          setSearchResult(result.data);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchApi();
  }, [debounceValue, setSearchResult]);

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
              setIsSearch(true);
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
