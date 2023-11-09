import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Image from '../../Image';
import { ElipseIcon, PhoneIcon, RecordIcon } from '../../Icons';
import CircleButton from '../../CircleButton';

const cx = classNames.bind(styles);

export default function Header() {
    return (
        <div className={cx('container')}>
            <div className={cx('information')}>
                <div className={cx('user')}>
                    <Image className={cx('avatar')} />
                    <div className={cx('content')}>
                        <span className={cx('user-name')}>Nhân Bùi</span>
                        <span className={cx('status')}>Đang hoạt động</span>
                    </div>
                </div>
            </div>
            <div className={cx('contact')}>
                <CircleButton
                    transparent
                    className={cx('cont-btn')}
                    icon={<PhoneIcon className={cx('icon')} />}
                />
                <CircleButton
                    transparent
                    className={cx('cont-btn')}
                    icon={<RecordIcon className={cx('icon')} />}
                />
                <CircleButton
                    transparent
                    className={cx('cont-btn')}
                    icon={<ElipseIcon width={20} height={20} className={cx('icon')} />}
                />
            </div>
        </div>
    );
}
