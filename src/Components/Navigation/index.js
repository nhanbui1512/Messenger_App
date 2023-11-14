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
import CircleButton from '../CircleButton';
import Tippy from '@tippyjs/react/headless';
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
            title: 'Tuyển dụng thực tập sinh IT',
            src: 'https://scontent.fdad3-6.fna.fbcdn.net/v/t1.30497-1/116687302_959241714549285_318408173653384421_n.jpg?stp=dst-jpg_p100x100&_nc_cat=1&ccb=1-7&_nc_sid=0be577&_nc_ohc=Lan1rURmaIYAX9WUT7F&_nc_ad=z-m&_nc_cid=1229&_nc_ht=scontent.fdad3-6.fna&oh=00_AfALk7mrBJMkQSQSAUsnbtw2TQbl29T7piyHhNnQTqxVnw&oe=656ACF03',
        },
        {
            to: '/group',
            title: 'Tuyển dụng thực tập sinh IT',
            src: 'https://scontent.fdad3-6.fna.fbcdn.net/v/t1.30497-1/116687302_959241714549285_318408173653384421_n.jpg?stp=dst-jpg_p100x100&_nc_cat=1&ccb=1-7&_nc_sid=0be577&_nc_ohc=Lan1rURmaIYAX9WUT7F&_nc_ad=z-m&_nc_cid=1229&_nc_ht=scontent.fdad3-6.fna&oh=00_AfALk7mrBJMkQSQSAUsnbtw2TQbl29T7piyHhNnQTqxVnw&oe=656ACF03',
        },
        {
            to: '/group',
            title: 'Tuyển dụng thực tập sinh IT',
            src: 'https://scontent.fdad3-6.fna.fbcdn.net/v/t1.30497-1/116687302_959241714549285_318408173653384421_n.jpg?stp=dst-jpg_p100x100&_nc_cat=1&ccb=1-7&_nc_sid=0be577&_nc_ohc=Lan1rURmaIYAX9WUT7F&_nc_ad=z-m&_nc_cid=1229&_nc_ht=scontent.fdad3-6.fna&oh=00_AfALk7mrBJMkQSQSAUsnbtw2TQbl29T7piyHhNnQTqxVnw&oe=656ACF03',
        },
        {
            to: '/group',
            title: 'Tuyển dụng thực tập sinh IT',
            src: 'https://scontent.fdad3-6.fna.fbcdn.net/v/t1.30497-1/116687302_959241714549285_318408173653384421_n.jpg?stp=dst-jpg_p100x100&_nc_cat=1&ccb=1-7&_nc_sid=0be577&_nc_ohc=Lan1rURmaIYAX9WUT7F&_nc_ad=z-m&_nc_cid=1229&_nc_ht=scontent.fdad3-6.fna&oh=00_AfALk7mrBJMkQSQSAUsnbtw2TQbl29T7piyHhNnQTqxVnw&oe=656ACF03',
        },
        {
            to: '/group',
            title: 'Tuyển dụng thực tập sinh IT',
            src: 'https://scontent.fdad3-6.fna.fbcdn.net/v/t1.30497-1/116687302_959241714549285_318408173653384421_n.jpg?stp=dst-jpg_p100x100&_nc_cat=1&ccb=1-7&_nc_sid=0be577&_nc_ohc=Lan1rURmaIYAX9WUT7F&_nc_ad=z-m&_nc_cid=1229&_nc_ht=scontent.fdad3-6.fna&oh=00_AfALk7mrBJMkQSQSAUsnbtw2TQbl29T7piyHhNnQTqxVnw&oe=656ACF03',
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

                    <div className={cx('groups')}>
                        <div className={[GlobalStyles.pd_0_8]}>
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
                    <div className={cx('footer', GlobalStyles.pd_12_0)}>
                        <div className={cx('ops-container')}>
                            <Tippy
                                placement="top"
                                visible={opsPopper}
                                appendTo={document.body}
                                interactive
                                render={(atrs) => <MenuOption />}
                            >
                                <div
                                    className={cx('ops-wrap')}
                                    onClick={() => {
                                        setOpsPopper(!opsPopper);
                                        console.log(opsPopper);
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
                            </Tippy>

                            {/* {opsPopper && <MenuOption />} */}
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
