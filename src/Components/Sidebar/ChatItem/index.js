import classNames from 'classnames/bind';
import styles from './ChatItem.module.scss';
import globalStyles from '../../GlobalStyles/GlobalStyles.module.scss';
import { Link } from 'react-router-dom';
import Image from '../../Image';
import CircleButton from '../../CircleButton';
import { ElipseIcon } from '../../Icons';

const cx = classNames.bind(styles);
export default function ChatItem() {
    return (
        <div className={cx('div-box', globalStyles.pd_0_6)}>
            <Link className={cx('wrapper')}>
                <div style={{ width: '100%' }} className={[globalStyles.pd_10]}>
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
                        <div className={cx('status-container')}>
                            <div className={cx('seen')}>
                                <img
                                    className={cx('avatar-seen')}
                                    alt=""
                                    src="https://scontent.fdad3-6.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=dst-png_p100x100&_nc_cat=1&ccb=1-7&_nc_sid=2b6aad&_nc_ohc=M5xBkqsrW0IAX8B7Q47&_nc_ad=z-m&_nc_cid=1229&_nc_ht=scontent.fdad3-6.fna&oh=00_AfCER-NLrjGTjrrNnaCICl2bC8FHJs1ci9cEk0sV4roDoQ&oe=65716C78"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
            <CircleButton className={cx('more-btn')} icon={<ElipseIcon />} />
        </div>
    );
}
