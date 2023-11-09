import classNames from 'classnames/bind';
import styles from './ChatContent.module.scss';
const cx = classNames.bind(styles);

export default function ChatContent() {
    return <div className={cx('wrapper')}>Chat content</div>;
}
