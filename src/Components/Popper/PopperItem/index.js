import classNames from 'classnames/bind';
import styles from './PopperItem.module.scss';
const cx = classNames.bind(styles);

export default function PopperItem({ icon, title, separate }) {
    return (
        <>
            <div className={cx('wrapper')}>
                <div className={cx('icon-container')}>{icon}</div>
                <div className={cx('title-container')}>
                    <div className={cx('title')}>
                        <span>{title}</span>
                    </div>
                </div>
            </div>
            {separate && <hr className={cx('separator')} />}
        </>
    );
}
