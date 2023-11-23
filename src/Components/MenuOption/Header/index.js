import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from '../MenuOption.module.scss';
const cx = classNames.bind(styles);

function Header({ title, onBack }) {
  return (
    <>
      <div className={cx(['header-wrap', 'pd_0_8'])}>
        <div className={cx('header')}>
          <div onClick={onBack} className={cx('back-btn')}>
            <FontAwesomeIcon className={cx('back-icon')} icon={faArrowLeft} />
          </div>
          <div className={cx('header-title')}>
            <span>{title}</span>
          </div>
        </div>
      </div>
      <hr className={cx('separator')} />
    </>
  );
}
export default Header;
