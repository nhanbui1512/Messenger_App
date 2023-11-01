import classNames from 'classnames/bind';
import styles from './NavButton.module.scss';

const cx = classNames.bind(styles);

function NavButton({ icon, active = false, className = {} }) {
    const classes = cx('wrapper', { [className]: className, active: active });
    return (
        <div className={classes}>
            <div className={cx('icon')}>{icon}</div>
        </div>
    );
}
export default NavButton;
