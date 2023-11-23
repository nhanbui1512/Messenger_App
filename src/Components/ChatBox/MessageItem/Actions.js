import classNames from 'classnames/bind';
import styles from './MessageItem.module.scss';
import CircleButton from '../../CircleButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical, faFaceSmile, faReply } from '@fortawesome/free-solid-svg-icons';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const cx = classNames.bind(styles);

export default function Actions() {
  return (
    <div className={cx('action_wrapper')}>
      <Tippy content="Bày tỏ cảm xúc">
        <div>
          <CircleButton
            transparent
            className={cx('action-btn')}
            icon={<FontAwesomeIcon icon={faFaceSmile} />}
          />
        </div>
      </Tippy>
      <Tippy content="Trả lời">
        <div>
          <CircleButton
            transparent
            className={cx('action-btn')}
            icon={<FontAwesomeIcon icon={faReply} />}
          />
        </div>
      </Tippy>
      <Tippy content="Xem thêm">
        <div>
          <CircleButton
            transparent
            className={cx('action-btn')}
            icon={<FontAwesomeIcon icon={faEllipsisVertical} />}
          />
        </div>
      </Tippy>
    </div>
  );
}
