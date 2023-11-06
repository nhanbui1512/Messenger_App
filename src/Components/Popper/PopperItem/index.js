import classNames from 'classnames/bind';
import styles from './PopperItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

export default function PopperItem({ data, onClick }) {
    return (
        <>
            <div onClick={onClick} className={cx('wrapper')}>
                <div className={cx('icon-container')}>{data.icon}</div>
                <div className={cx('title-container')}>
                    <div className={cx('title')}>
                        <span>{data.title}</span>
                    </div>
                </div>
                {data.children && (
                    <div className={cx('right-btn')}>
                        <FontAwesomeIcon className={cx('right-icon')} icon={faChevronRight} />
                    </div>
                )}
            </div>
            {data.separate && <hr className={cx('separator')} />}
        </>
    );
}
