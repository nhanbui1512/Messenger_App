import classNames from 'classnames/bind';
import styles from './MemberItem.module.scss';
import CircleImage from '../CircleImage';
import CircleButton from '../CircleButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import PopperWrapper from '../Popper/PopperWrapper';
import PopperItem from '../Popper/PopperItem';
import { useState } from 'react';
import { MessageIcon, TrashCan, UserIcon } from '../Icons';

const cx = classNames.bind(styles);
const menuItems = [
  {
    title: 'Nhắn tin',
    icon: <MessageIcon width={24} height={24} />,
  },
  {
    title: 'Xem trang cá nhân',
    icon: <UserIcon width={24} height={24} />,
  },
  {
    title: 'Xóa khỏi nhóm',
    icon: <TrashCan width={24} height={24} />,
  },
];
function MemberItem({ data }) {
  const [moreMenu, setMoreMenu] = useState(false);

  return (
    <div className={cx('wrapper')}>
      <div className={cx('avatar-container')}>
        <Tippy content={`Nhắn tin cho ${data.userName}`}>
          <div>
            <CircleImage src={data.avatar} className={cx('avatar')} />
          </div>
        </Tippy>
      </div>
      <div className={cx('infor-container')}>
        <div className={cx('user-name')}>
          <span>{data.userName}</span>
        </div>
        <div className={cx('add-by')}>
          <span>Người tạo nhóm</span>
        </div>
      </div>
      <HeadlessTippy
        interactive
        offset={[0, 10]}
        visible={moreMenu}
        render={() => (
          <PopperWrapper className={cx('menu-wrapper')} arrow={false}>
            {menuItems.map((item, index) => (
              <PopperItem key={index} data={item} />
            ))}
          </PopperWrapper>
        )}
      >
        <div>
          <CircleButton
            onOutsideClick={() => {
              setMoreMenu(false);
            }}
            onClick={(e) => {
              setMoreMenu(!moreMenu);
            }}
            className={cx('more-btn')}
            icon={<FontAwesomeIcon className={cx('more-icon')} icon={faEllipsis} />}
          />
        </div>
      </HeadlessTippy>
    </div>
  );
}

export default MemberItem;
