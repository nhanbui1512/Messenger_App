import classNames from 'classnames/bind';
import styles from './Navigation.module.scss';
import NavButton from '../NavButton';
import { MarketIcon, MessageDotsIcon, MessageIcon, StorageIcon, UsersIcon } from '../Icons';
import GlobalStyles from '../GlobalStyles/GlobalStyles.module.scss';
import DropBar from '../DropBar';
const cx = classNames.bind(styles);

function Navigation() {
    const navButtons = [
        {
            icon: <MessageIcon />,
            title: 'Chat',
            isActive: true,
        },

        {
            icon: <UsersIcon />,
            title: 'Mọi người',
            isActive: false,
        },

        {
            icon: <MarketIcon />,
            title: 'Matketplace',
            isActive: true,
        },

        {
            icon: <MessageDotsIcon />,
            title: 'Tin nhắn đang chờ',
            isActive: true,
        },
        {
            icon: <StorageIcon />,
            title: 'Kho lưu trữ',
            isActive: true,
        },
    ];

    return (
        <div className={cx('wrapper')}>
            <div className={cx('nav-container')}>
                <div className={cx('nav-top')}>
                    <div className={cx('nav-btn-group')}>
                        {navButtons.map((item, index) => {
                            return <NavButton key={index} icon={item.icon} title={item.title} />;
                        })}

                        <DropBar />
                    </div>

                    <div className={GlobalStyles.pd_0_8}>
                        <NavButton
                            title={
                                'Tuyển dụng Front-end/Back-end (Nodejs, ReactJs, Python, Java, Html, Css)'
                            }
                        />
                    </div>
                </div>

                <div>bottom</div>
            </div>
        </div>
    );
}

export default Navigation;
