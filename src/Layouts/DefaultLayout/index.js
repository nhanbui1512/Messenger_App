import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('side-bar')}>sidebar</div>
            <div className={cx('chat-box')}>chat box</div>
        </div>
    );
}

export default DefaultLayout;
