import classNames from 'classnames/bind';
import styles from './Navigation.module.scss';
import NavButton from '../NavButton';
import { MarketIcon, MessageIcon, StorageIcon, UsersIcon } from '../Icons';
import DropBar from '../DropBar';
const cx = classNames.bind(styles);

function Navigation() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('nav-container')}>
                <div className={cx('nav-top')}>
                    <div className={cx('nav-btn-group')}>
                        <NavButton active icon={<MessageIcon />} />
                        <NavButton icon={<UsersIcon />} />
                        <NavButton icon={<MarketIcon />} />
                        <NavButton icon={<StorageIcon />} />
                        <DropBar />
                    </div>
                </div>
                <div>bottom</div>
            </div>
        </div>
    );
}

export default Navigation;
