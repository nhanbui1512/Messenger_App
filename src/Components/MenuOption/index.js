import PopperItem from '../Popper/PopperItem';
import PopperWrapper from '../Popper/PopperWrapper';
import classNames from 'classnames/bind';
import styles from './MenuOption.module.scss';
import {
  BarSort,
  ExclamationMark,
  HomeLock,
  LogoutIcon,
  MessengerIcon,
  MuteMessageIcon,
  Question,
  SettingIcon,
  Warning,
} from '../Icons';
import Header from './Header';
import { useState } from 'react';
import { removeToken } from '../../Services/local/cookie';

const cx = classNames.bind(styles);

export default function MenuOption() {
  const items = [
    {
      title: 'Tùy chọn',
      icon: <SettingIcon />,
      separate: true,
    },
    {
      title: 'Tài khoản đã bị hạn chế',
      icon: <MuteMessageIcon />,
      separate: true,
    },
    {
      title: 'Quyền riêng tư & an toàn',
      icon: <HomeLock />,
      children: {
        title: 'Quyền riêng tư & an toàn',
        data: [
          {
            title: 'Đoạn chat được mã hóa đầu cuối',
            icon: <Question />,
            children: {
              title: 'Đoạn chat được mã hóa đầu cuối',
              data: [
                {
                  title: 'Cảnh báo bảo mật',
                  icon: <Question />,
                },
              ],
            },
          },
        ],
      },
      separate: true,
    },
    {
      title: 'Trợ giúp',
      icon: <Question />,
    },
    {
      title: 'Báo cáo sự cố',
      icon: <Warning />,
      separate: true,
    },

    {
      title: 'Giới thiệu',
      icon: <ExclamationMark />,
    },

    {
      title: 'Điều khoản',
      icon: <BarSort />,
    },

    {
      title: 'Chính sách quyền riêng tư',
      icon: <BarSort />,
    },
    {
      title: 'Chính sách về cookie',
      icon: <BarSort />,
      separate: true,
    },
    {
      title: 'Dùng thử Messenger dành cho Windows',
      icon: <MessengerIcon />,
    },
    {
      title: 'Đăng xuất',
      icon: <LogoutIcon />,
      handleClick: () => {
        removeToken();
        window.location.reload();
      },
    },
  ];

  const [history, setHistory] = useState([{ data: items }]);

  return (
    <PopperWrapper arrow={true} className={cx('ops_popper')}>
      {history.length > 1 && (
        <Header
          onBack={() => {
            if (history.length > 1) setHistory(history.splice(0, history.length - 1));
          }}
          title={history[history.length - 1].title}
        />
      )}
      {history[history.length - 1].data.map((item, index) => {
        return (
          <PopperItem
            onClick={() => {
              if (item.children) {
                setHistory((prev) => [...prev, item.children]);
              }
              if (item.handleClick) {
                item.handleClick();
              }
            }}
            key={index}
            data={item}
          />
        );
      })}
    </PopperWrapper>
  );
}
