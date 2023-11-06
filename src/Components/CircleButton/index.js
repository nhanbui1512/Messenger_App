import classNames from 'classnames/bind';
import styles from './CircleButton.module.scss';
const cx = classNames.bind(styles);

export default function CircleButton({ icon, onClick }) {
    return (
        <div>
            <button onClick={onClick} className={cx('wrapper')}>
                {icon}
            </button>
        </div>
    );
}
