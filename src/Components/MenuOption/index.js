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
        },
    ];
    return (
        <PopperWrapper className={cx('ops_popper')}>
            {items.map((item, index) => {
                return (
                    <PopperItem
                        key={index}
                        title={item.title}
                        icon={item.icon}
                        separate={item.separate}
                    />
                );
            })}
        </PopperWrapper>
    );
}
