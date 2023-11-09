import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import CircleButton from '../../CircleButton';
import { FileIcon, GifIcon, ImageIcon, LikeIcon, PlusIcon } from '../../Icons';

const cx = classNames.bind(styles);

export default function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('group-btn')}>
                <CircleButton transparent icon={<PlusIcon />} />
                <CircleButton transparent icon={<ImageIcon />} />
                <CircleButton transparent icon={<FileIcon />} />
                <CircleButton transparent icon={<GifIcon />} />
            </div>
            <div className={cx('input-container')}>
                <input placeholder="Aa" />
            </div>
            <div>
                <CircleButton className={cx('like-btn')} transparent icon={<LikeIcon />} />
            </div>
        </div>
    );
}
