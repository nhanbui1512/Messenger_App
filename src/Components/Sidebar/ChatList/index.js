import classNames from 'classnames/bind';
import styles from './ChatList.module.scss';
import CircleButton from '../../CircleButton';
import { EditIcon } from '../../Icons';

const cx = classNames.bind(styles);

export default function ChatList({ children }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className={cx('title-wrap')}>
                    <h1 className={cx('title')}>Chat</h1>
                </div>
                <div>
                    <CircleButton icon={<EditIcon />} />
                </div>
            </div>
            <div>Search</div>
            <div>List users</div>
        </div>
    );
}
