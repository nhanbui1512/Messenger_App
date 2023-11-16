import classNames from 'classnames/bind';
import styles from './MessageItem.module.scss';
import CircleButton from '../../CircleButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical, faFaceSmile, faReply } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

export default function Actions() {
  return (
    <div className={cx('action_wrapper')}>
      <CircleButton
        transparent
        className={cx('action-btn')}
        icon={<FontAwesomeIcon icon={faFaceSmile} />}
      />
      <CircleButton
        transparent
        className={cx('action-btn')}
        icon={<FontAwesomeIcon icon={faReply} />}
      />
      <CircleButton
        transparent
        className={cx('action-btn')}
        icon={<FontAwesomeIcon icon={faEllipsisVertical} />}
      />
    </div>
  );
}
