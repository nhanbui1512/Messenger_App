import classNames from 'classnames/bind';
import styles from './ChatItem.module.scss';
import globalStyles from '../../GlobalStyles/GlobalStyles.module.scss';
import { Link } from 'react-router-dom';
import Image from '../../Image';
import CircleButton from '../../CircleButton';
import {
  Bell,
  Block,
  ElipseIcon,
  ExclamationMark,
  PhoneIcon,
  RecordIcon,
  StorageIcon,
  TickIcon,
  TrashCan,
  UserIcon,
} from '../../Icons';
import PopperWrapper from '../../Popper/PopperWrapper';
import Tippy from '@tippyjs/react/headless';
import PopperItem from '../../Popper/PopperItem';

const cx = classNames.bind(styles);
export default function ChatItem() {
  const items = [
    {
      title: 'Đánh dấu là chưa đọc',
      icon: <TickIcon width={24} height={24} />,
    },
    {
      title: 'Tắt thông báo',
      icon: <Bell className={cx('menu-item-icon')} />,
    },
    {
      title: 'Xem trang cá nhân',
      icon: <UserIcon />,
      separate: true,
    },
    {
      title: 'Gọi thoại',
      icon: <PhoneIcon className={cx('menu-item-icon')} />,
    },
    {
      title: 'Chat video',
      icon: <RecordIcon className={cx('menu-item-icon')} />,
      separate: true,
    },
    {
      title: 'Chặn',
      icon: <Block width={24} height={24} />,
    },
    {
      title: 'Lưu trữ đoạn chat',
      icon: <StorageIcon width={24} height={24} />,
    },
    {
      title: 'Xóa đoạn chat',
      icon: <TrashCan width={24} height={24} />,
    },
    {
      title: 'Báo cáo',
      icon: <ExclamationMark width={24} height={24} />,
    },
  ];
  return (
    <div className={cx('div-box', globalStyles.pd_0_6)}>
      <Link className={cx('wrapper')}>
        <div style={{ width: '100%' }} className={[globalStyles.pd_10]}>
          <div style={{ width: '100%' }} className={cx('container')}>
            <div className={cx('avatar')}>
              <Image />
            </div>
            <div className={cx('info-container')}>
              <span className={cx('chat-name')}>Nhân Bùi</span>
              <div></div>
              <div className={cx('info')}>
                <span className={cx('message')}>Bạn : Ời ời</span>
                <span className={cx('time')}>. 2 giờ</span>
              </div>
            </div>
            <div className={cx('status-container')}>
              <div className={cx('seen')}>
                <img
                  className={cx('avatar-seen')}
                  alt=""
                  src="https://scontent.fdad3-6.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=dst-png_p100x100&_nc_cat=1&ccb=1-7&_nc_sid=2b6aad&_nc_ohc=M5xBkqsrW0IAX8B7Q47&_nc_ad=z-m&_nc_cid=1229&_nc_ht=scontent.fdad3-6.fna&oh=00_AfCER-NLrjGTjrrNnaCICl2bC8FHJs1ci9cEk0sV4roDoQ&oe=65716C78"
                />
              </div>
            </div>
          </div>
        </div>
      </Link>

      <Tippy
        appendTo={document.body}
        interactive
        placement="right"
        delay={200}
        offset={[0, -200]}
        render={(atrs) => (
          <PopperWrapper arrow={false}>
            {items.map((item, index) => {
              return <PopperItem key={index} data={item} />;
            })}
          </PopperWrapper>
        )}
      >
        <div>
          <CircleButton className={cx('more-btn')} icon={<ElipseIcon />} />
        </div>
      </Tippy>
    </div>
  );
}
