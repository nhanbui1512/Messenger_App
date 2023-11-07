import classNames from 'classnames/bind';
import styles from './CircleButton.module.scss';
const cx = classNames.bind(styles);

export default function CircleButton({ icon, onClick, className = {} }) {
    return (
        <button onClick={onClick} className={cx('wrapper', { [className]: className })}>
            {icon}
        </button>
    );
}
