import classNames from 'classnames/bind';
import styles from './ChatItem.module.scss';
import globalStyles from '../../GlobalStyles/GlobalStyles.module.scss';
import { Link } from 'react-router-dom';
import Image from '../../Image';

const cx = classNames.bind(styles);
export default function ChatItem() {
    return (
        <div className={globalStyles.pd_0_6}>
            <Link className={cx('wrapper')}>
                <div className={[globalStyles.pd_10]}>
                    <div style={{ width: '100%' }} className={cx('container')}>
                        <div className={cx('avatar')}>
                            <Image />
                        </div>
                        <div className={cx('info-container')}>
                            <span className={cx('chat-name')}>Nhân Bùi</span>
                            <div></div>
                            <div className={cx('info')}>
                                <span className={cx('message')}>Bạn : Ời ời</span>
                                <span className={cx('time')}>. 2 giờ</span>
                            </div>
                        </div>
                        <div>status</div>
                    </div>
                </div>
            </Link>
        </div>
    );
}
