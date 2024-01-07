import classNames from 'classnames/bind';
import styles from './NewMessage.module.scss';
import PopperWrapper from '../../Components/Popper/PopperWrapper';
import SearchItem from './SearchItem';
import { useEffect, useState } from 'react';
import { useDebounce } from '../../hooks';
import { searchUser } from '../../Services/user';
import { getCookie } from '../../Services/local/cookie';
const cx = classNames.bind(styles);

const token = getCookie('authToken') || '';

function NewMessage() {
  const [searchValue, setSearchValue] = useState('');
  const debounceValue = useDebounce(searchValue, 600);
  const [searchResult, setSearchResult] = useState([]);
  const [searchPopper, setSearchPopper] = useState(true);

  useEffect(() => {
    if (!debounceValue.trim()) {
      setSearchResult([]);
      return;
    }

    searchUser(token, debounceValue)
      .then((res) => {
        if (res.isSuccess) {
          setSearchResult(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [debounceValue, setSearchResult]);

  return (
    <div className={cx('wrapper')}>
      <div className={cx('header')}>
        <div className={cx('send-to')}>
          <span>Đến:</span>
          <input
            value={searchValue}
            onInput={(e) => {
              setSearchValue(e.target.value);
            }}
            onFocus={() => {
              if (!searchPopper) {
                setSearchPopper(true);
              }
            }}
            onBlur={() => {
              setSearchPopper(false);
            }}
            className={cx('search-input')}
          />
        </div>
        {searchPopper && (
          <PopperWrapper arrow={false} className={cx('search-wrapper')}>
            <div className={cx('scroller')}>
              {searchResult.map((user, index) => (
                <SearchItem key={index} data={user} />
              ))}
            </div>
          </PopperWrapper>
        )}
      </div>
    </div>
  );
}
export default NewMessage;
