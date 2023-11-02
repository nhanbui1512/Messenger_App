import classNames from 'classnames/bind';
import styles from './NavButton.module.scss';
import Tippy from '@tippyjs/react/headless';
import NavPopper from '../Popper/NavPopper';

const cx = classNames.bind(styles);

function NavButton({ icon, active = false, className = {}, src = '', title }) {
    const classes = cx('wrapper', { [className]: className, active: active, title });
    return (
        <Tippy interactive placement="right" delay={300} render={() => <NavPopper title={title} />}>
            <div className={classes}>
                {icon ? (
                    <div className={cx('icon')}>{icon}</div>
                ) : (
                    <div className={cx('img-mask')}>
                        <img
                            alt=""
                            src="https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-6/329549658_2468318956672524_6427325944667607830_n.png?stp=c46.0.100.100a_dst-png_p100x100&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=0wc9VkInm4UAX_5-yCV&_nc_ad=z-m&_nc_cid=1229&_nc_ht=scontent.fdad3-5.fna&oh=00_AfAq3k2kovmHcxsmNPQ9Z8qEOjBnPqLkdJNNkxmS3t1mCw&oe=65483EA2"
                        ></img>{' '}
                    </div>
                )}
            </div>
        </Tippy>
    );
}
export default NavButton;
