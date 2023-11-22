import classNames from 'classnames/bind';
import styles from './NavButton.module.scss';
import Tippy from '@tippyjs/react/headless';
import NavPopper from '../Popper/NavPopper';
import { NavLink } from 'react-router-dom';

const cx = classNames.bind(styles);

function NavButton({ icon, className = {}, src = '', title, to, isExpand }) {
  const classes = cx('wrapper', { [className]: className, title });
  return (
    <Tippy interactive placement="right" delay={300} render={() => <NavPopper title={title} />}>
      <NavLink
        to={to}
        className={(nav) => cx(classes, { active: nav.isActive, isExpand: isExpand })}
      >
        {icon ? (
          <div className={cx('icon')}>{icon}</div>
        ) : (
          <div className={cx('img-mask')}>
            <div className={cx('img-container')}>
              <img alt="" src={src}></img>
            </div>
          </div>
        )}
        {isExpand && (
          <div className={cx('title-container')}>
            <p className={cx('title')}>{title}</p>
          </div>
        )}
      </NavLink>
    </Tippy>
  );
}
export default NavButton;
