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
import GlobalStyles from '../GlobalStyles/GlobalStyles.module.scss';
import DropBar from '../DropBar';
import { useState } from 'react';
import MenuOption from '../MenuOption';
const cx = classNames.bind(styles);

function Navigation() {
    const [isExpand, setIsExpand] = useState(false);

    const navButtons = [
        {
            icon: <MessageIcon />,
            title: 'Chat',
            to: '/',
        },

        {
            icon: <UsersIcon />,
            title: 'Mọi người',
            isActive: false,
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
            title: 'Tuyển dụng Front-end/Back-end (Nodejs, ReactJs, Python, Java, Html, Css)',
            src: 'https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-6/329549658_2468318956672524_6427325944667607830_n.png?stp=c46.0.100.100a_dst-png_p100x100&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=0wc9VkInm4UAX_5-yCV&_nc_ad=z-m&_nc_cid=1229&_nc_ht=scontent.fdad3-5.fna&oh=00_AfAq3k2kovmHcxsmNPQ9Z8qEOjBnPqLkdJNNkxmS3t1mCw&oe=65483EA2',
        },
        {
            to: '/group',
            title: 'Hội những người từng đi tù',
            src: 'https://scontent.fdad3-6.fna.fbcdn.net/v/t39.30808-6/391653861_6764534890290420_2403395200867876972_n.jpg?stp=c17.0.100.100a_cp6_dst-jpg_p100x100&_nc_cat=1&ccb=1-7&_nc_sid=5f2048&_nc_ohc=4mkexEnqJrkAX943bS1&_nc_ad=z-m&_nc_cid=1229&_nc_ht=scontent.fdad3-6.fna&oh=00_AfDSDyjtUXybAPekUPfCCKo9RCkI7ST3m1iZX3rdoLmxIw&oe=6548A92C',
        },
        {
            to: '/group',
            title: 'IT TUYỂN DỤNG - TÌM VIỆC LÀM',
            src: 'https://scontent.fdad3-6.fna.fbcdn.net/v/t39.30808-6/373742063_6306890222745275_6953131451643331470_n.png?stp=c85.0.100.100a_dst-png_p100x100&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=kbEK6xJ_YfoAX8dqzG7&_nc_ad=z-m&_nc_cid=1229&_nc_ht=scontent.fdad3-6.fna&oh=00_AfAwoYwsFQbPRniaf3tj37V22RMGG2XyJePVXIUZOVMrkw&oe=65488203',
        },
        {
            to: '/group',
            title: 'Nghiện Setups ✅',
            src: 'https://scontent.fdad3-6.fna.fbcdn.net/v/t39.30808-6/279643390_2562631983871116_3834027747983213686_n.jpg?stp=c81.0.100.100a_dst-jpg_p100x100&_nc_cat=1&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ijmb0wXnRo8AX_KkdAL&_nc_ad=z-m&_nc_cid=1229&_nc_ht=scontent.fdad3-6.fna&oh=00_AfAHdczPkM87d0s7TMCg5Wyw4skrfvinSK7nWy5guLv0Bg&oe=6548922D',
        },
        {
            to: '/group',
            title: 'NHÀ KHOA HỌC',
            src: 'https://scontent.fdad3-6.fna.fbcdn.net/v/t39.30808-6/279643390_2562631983871116_3834027747983213686_n.jpg?stp=c81.0.100.100a_dst-jpg_p100x100&_nc_cat=1&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ijmb0wXnRo8AX_KkdAL&_nc_ad=z-m&_nc_cid=1229&_nc_ht=scontent.fdad3-6.fna&oh=00_AfAHdczPkM87d0s7TMCg5Wyw4skrfvinSK7nWy5guLv0Bg&oe=6548922D',
        },
        {
            to: '/group',
            title: 'Nhã Nam reading club',
            src: 'https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-6/329549658_2468318956672524_6427325944667607830_n.png?stp=c46.0.100.100a_dst-png_p100x100&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=0wc9VkInm4UAX_5-yCV&_nc_ad=z-m&_nc_cid=1229&_nc_ht=scontent.fdad3-5.fna&oh=00_AfAq3k2kovmHcxsmNPQ9Z8qEOjBnPqLkdJNNkxmS3t1mCw&oe=65483EA2',
        },
        {
            to: '/group',
            title: 'Tiếng Anh nâng cao 9 - 2023',
            src: 'https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/340400129_1867644683610640_3869551829741544212_n.jpg?stp=c85.0.100.100a_dst-jpg_p100x100&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=L6flMOnmtDMAX8-0hkc&_nc_ad=z-m&_nc_cid=1229&_nc_ht=scontent.fdad3-1.fna&oh=00_AfCVAqh7Tv_c5S70_mdHMux_eGYHZXoUCa8VI6JIqsO2VQ&oe=654795AF',
        },
        {
            to: '/group',
            title: 'Tuyển dụng thực tập sinh IT',
            src: 'https://scontent.fdad3-6.fna.fbcdn.net/v/t1.30497-1/116687302_959241714549285_318408173653384421_n.jpg?stp=dst-jpg_p100x100&_nc_cat=1&ccb=1-7&_nc_sid=0be577&_nc_ohc=Lan1rURmaIYAX9WUT7F&_nc_ad=z-m&_nc_cid=1229&_nc_ht=scontent.fdad3-6.fna&oh=00_AfALk7mrBJMkQSQSAUsnbtw2TQbl29T7piyHhNnQTqxVnw&oe=656ACF03',
        },
    ];

    const [opsPopper, setOpsPopper] = useState(false);

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

                    <div className={GlobalStyles.pd_0_8}>
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

                <div>
                    <div className={cx('footer', GlobalStyles.pd_12_0)}>
                        <div className={cx('ops-container')}>
                            <div
                                className={cx('ops-wrap')}
                                onClick={() => {
                                    setOpsPopper(!opsPopper);
                                }}
                            >
                                <button className={cx('ops-btn')}>
                                    <img
                                        src="https://scontent.fdad3-6.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=dst-png_p100x100&_nc_cat=1&ccb=1-7&_nc_sid=2b6aad&_nc_ohc=SOxyIlWQiIYAX8ntx9h&_nc_ad=z-m&_nc_cid=1229&_nc_ht=scontent.fdad3-6.fna&oh=00_AfAO0Ka_NNxYc3zDQlea0Mguzu5ytXVOuqnoI7sCKOMNFg&oe=656AD4F8"
                                        alt=""
                                    />
                                </button>
                                {isExpand && <span className={cx('my-name')}>Nhân</span>}
                            </div>

                            {opsPopper && <MenuOption />}
                        </div>
                        <div>
                            <button
                                onClick={() => {
                                    setIsExpand(!isExpand);
                                }}
                                className={cx('expand-btn')}
                            >
                                <ExpandNavIcon />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navigation;
