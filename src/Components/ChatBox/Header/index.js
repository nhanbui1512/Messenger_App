import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import CircleImage from '../../CircleImage';
import { ElipseIcon, PhoneIcon, RecordIcon } from '../../Icons';
import CircleButton from '../../CircleButton';
import { GreenDot } from '../../GreenDot';
import Tippy from '@tippyjs/react';

const cx = classNames.bind(styles);

export default function Header({ room }) {
  return (
    <div className={cx('container')}>
      <div className={cx('information')}>
        <div className={cx('user')}>
          <div className={cx('avatar-container')}>
            <CircleImage className={cx('avatar')} />
            <GreenDot className={cx('avatar_greendot')} />
          </div>
          <div className={cx('content')}>
            <span className={cx('user-name')}>{room.roomName || 'User Name'}</span>
            <span className={cx('status')}>Đang hoạt động</span>
          </div>
        </div>
      </div>
      <div className={cx('contact')}>
        <Tippy content="Bắt đầu gọi thoại">
          <div>
            <CircleButton
              transparent
              className={cx('cont-btn')}
              icon={<PhoneIcon className={cx('icon')} />}
            />
          </div>
        </Tippy>

        <Tippy content="Bắt đầu gọi video">
          <div>
            <CircleButton
              transparent
              className={cx('cont-btn')}
              icon={<RecordIcon className={cx('icon')} />}
            >
              <GreenDot className={cx('green_dot')} />
            </CircleButton>
          </div>
        </Tippy>

        <Tippy content="Thông tin về cuộc trò chuyện">
          <div>
            <CircleButton
              transparent
              className={cx('cont-btn')}
              icon={<ElipseIcon width={20} height={20} className={cx('icon')} />}
            />
          </div>
        </Tippy>
      </div>
    </div>
  );
}
