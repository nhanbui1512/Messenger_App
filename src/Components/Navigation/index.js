import classNames from 'classnames/bind';
import styles from './Navigation.module.scss';
import NavButton from '../NavButton';
import {
  ExpandNavIcon,
  MarketIcon,
  MessageDotsIcon,
  MessageIcon,
  StorageIcon,
  UsersIcon,
} from '../Icons';
import DropBar from '../DropBar';
import { useState } from 'react';
import MenuOption from '../MenuOption';
import CircleButton from '../CircleButton';
import images from '../../assests/images';

const cx = classNames.bind(styles);

function Navigation() {
  const [isExpand, setIsExpand] = useState(false);
  const [opsPopper, setOpsPopper] = useState(false);

  const navButtons = [
    {
      icon: <MessageIcon />,
      title: 'Chat',
      to: '/',
    },

    {
      icon: <UsersIcon />,
      title: 'Mọi người',
      to: '/active',
    },

    {
      icon: <MarketIcon />,
      title: 'Matketplace',
      to: '/global',
    },

    {
      icon: <MessageDotsIcon />,
      title: 'Tin nhắn đang chờ',
      to: '/global',
    },
    {
      icon: <StorageIcon />,
      title: 'Kho lưu trữ',
      to: '/global',
    },
  ];

  const groupBtns = [
    {
      to: '/group',
      title: 'Tuyển dụng thực tập sinh IT',
      src: images.user,
    },
    {
      to: '/group',
      title: 'Tuyển dụng thực tập sinh IT',
      src: images.user,
    },
    {
      to: '/group',
      title: 'Tuyển dụng thực tập sinh IT',
      src: images.user,
    },
    {
      to: '/group',
      title: 'Tuyển dụng thực tập sinh IT',
      src: images.user,
    },
    {
      to: '/group',
      title: 'Tuyển dụng thực tập sinh IT',
      src: images.user,
    },
    {
      to: '/group',
      title: 'Tuyển dụng thực tập sinh IT',
      src: images.user,
    },
  ];

  return (
    <div className={cx('wrapper', { isExpand: isExpand })}>
      <div className={cx('nav-container')}>
        <div className={cx('nav-top')}>
          <div className={cx('nav-btn-group')}>
            {navButtons.map((item, index) => {
              return (
                <NavButton
                  isExpand={isExpand}
                  to={item.to}
                  key={index}
                  icon={item.icon}
                  title={item.title}
                />
              );
            })}

            <DropBar />
          </div>

          <div className={cx('groups')}>
            <div className={['pd_0_8']}>
              {groupBtns.map((item, index) => {
                return (
                  <NavButton
                    isExpand={isExpand}
                    key={index}
                    to={item.to}
                    title={item.title}
                    src={item.src}
                  />
                );
              })}
            </div>
          </div>
        </div>

        <div>
          <div className={cx('footer', 'pd_12_0')}>
            <div className={cx('ops-container')}>
              <div
                className={cx('ops-wrap')}
                onClick={() => {
                  setOpsPopper(!opsPopper);
                }}
              >
                <button className={cx('ops-btn')}>
                  <img src={images.user} alt="user" />
                </button>
                {isExpand && <span className={cx('my-name')}>Nhân</span>}
              </div>

              {opsPopper && <MenuOption />}
            </div>
            <div className={cx('expand-btn')}>
              <CircleButton
                onClick={() => {
                  setIsExpand(!isExpand);
                }}
                icon={<ExpandNavIcon />}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
