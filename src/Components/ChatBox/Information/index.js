import classNames from 'classnames/bind';
import styles from './information.module.scss';
// import Image from '../../Image';
import CircleImage from '../../CircleImage';
import { Link } from 'react-router-dom';
import CircleButton from '../../CircleButton';
import {
  Bell,
  Block,
  Facebook,
  ImageIcon,
  LikeIcon,
  MuteMessageIcon,
  Pen,
  SearchIcon,
  Text,
  Warning,
} from '../../Icons';
import DropdownMenu from '../../DropdownMenu';
import MenuItem from '../../MenuItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBellSlash, faFile, faImages, faLink } from '@fortawesome/free-solid-svg-icons';
import MemberItem from '../../MemberItem';
import { useEffect, useState } from 'react';
import { getUsersInRoom } from '../../../Services/user';
import { getCookie } from '../../../Services/local/cookie';
const cx = classNames.bind(styles);

export default function Information({ roomid, data }) {
  const [users, setUsers] = useState([
    {
      avatar: 'http://localhost:3000/images/9970508.png',
      createAtStr: '2023-11-27T04:23:12.000Z',
      updateAtStr: null,
      userId: 1,
      userName: 'nhanbui1512',
      email: 'nhanb19@gmail.com',
      phoneNumber: '09139023424',
      createAt: '2023-11-27T04:23:12.000Z',
      updateAt: null,
    },
    {
      avatar:
        'http://localhost:3000/images/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png',
      createAtStr: '2023-11-27T04:23:30.000Z',
      updateAtStr: null,
      userId: 2,
      userName: 'Nhân Bùi',
      email: 'buithiennhan0345@gmail.com',
      phoneNumber: '09139023424',
      createAt: '2023-11-27T04:23:30.000Z',
      updateAt: null,
    },
    {
      avatar: 'http://localhost:3000/images/female-avatar-girl-face-woman-user-7.svg',
      createAtStr: '2023-11-27T04:23:47.000Z',
      updateAtStr: null,
      userId: 3,
      userName: 'avannguyen12',
      email: 'nguyenvana@gmail.com',
      phoneNumber: '09139023424',
      createAt: '2023-11-27T04:23:47.000Z',
      updateAt: null,
    },
    {
      avatar:
        'http://localhost:3000/images/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png',
      createAtStr: '2023-11-27T04:24:10.000Z',
      updateAtStr: null,
      userId: 4,
      userName: 'theanh23',
      email: 'phantheanh2312@gmail.com',
      phoneNumber: '09139023424',
      createAt: '2023-11-27T04:24:10.000Z',
      updateAt: null,
    },
    {
      avatar: 'http://localhost:3000/images/default_avatar.png',
      createAtStr: '2023-12-21T09:47:10.000Z',
      updateAtStr: null,
      userId: 14,
      userName: 'Đoàn Nguyễn',
      email: 'doannguyenviet@gmail.com',
      phoneNumber: '0933457444',
      createAt: '2023-12-21T09:47:10.000Z',
      updateAt: null,
    },
  ]);
  useEffect(() => {
    const token = getCookie('authToken') || '';

    getUsersInRoom(token, roomid)
      .then((res) => {
        if (res.data) {
          setUsers(res.data.users);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [roomid]);

  return (
    <div className={cx('wrapper')}>
      <div>
        <div className={cx('user-container')}>
          <div className={cx('avatar-wrapper')}>
            <CircleImage className={cx('avatar')} src={data.avatar} />
          </div>
          <div className={cx('user-name')}>
            <Link to={'#'}>{data.roomName || 'User Name'}</Link>
          </div>
          <div className={cx('status')}>
            <p>Đang hoạt động</p>
          </div>
        </div>
        <div className={cx('buttons-wrapper')}>
          <div className={cx('func-button-wrap')}>
            <CircleButton className={cx('func-btn')} icon={<Facebook />} />
            <div className={cx('desc-btn')}>
              <span>Trang cá nhân</span>
            </div>
          </div>
          <div className={cx('func-button-wrap')}>
            <CircleButton className={cx('func-btn')} icon={<Bell width={20} height={20} />} />
            <div className={cx('desc-btn')}>
              <span>Tắt thông báo</span>
            </div>
          </div>
          <div className={cx('func-button-wrap')}>
            <CircleButton className={cx('func-btn')} icon={<SearchIcon width={20} height={20} />} />
            <div className={cx('desc-btn')}>
              <span>Tìm kiếm</span>
            </div>
          </div>
        </div>
      </div>
      <div className={cx('menu-wrapper')}>
        <div className={'pd_20_0 col'}>
          <div className="pd_0_8">
            <DropdownMenu title="Thông tin về đoạn chat">
              <MenuItem />
            </DropdownMenu>
          </div>
          <div className="pd_0_8">
            <DropdownMenu title="Tùy chỉnh đoạn chat">
              <MenuItem title="Đổi tên đoạn chat" icon={<Pen />} />
              <MenuItem title="Thay đổi ảnh" icon={<ImageIcon fill="#000" />} />
              <MenuItem
                title="Thay đổi biểu tượng cảm xúc"
                icon={<LikeIcon width={16} height={16} />}
              />
              <MenuItem title="Chỉnh sửa biệt danh" icon={<Text />} />
              <MenuItem
                title="Tìm kiếm trong cuộc trò chuyện"
                icon={<SearchIcon width={16} height={16} />}
              />
            </DropdownMenu>
          </div>
          <div className="pd_0_8">
            <DropdownMenu title="Thành viên trong đoạn chat">
              {users.map((user) => (
                <MemberItem key={user.userId} data={user} />
              ))}
            </DropdownMenu>
          </div>
          <div className="pd_0_8">
            <DropdownMenu title="File phương tiện, file và liên kết">
              <MenuItem title="File phương tiện" icon={<FontAwesomeIcon icon={faImages} />} />
              <MenuItem title="File" icon={<FontAwesomeIcon icon={faFile} />} />
              <MenuItem title="Liên kết" icon={<FontAwesomeIcon icon={faLink} />} />
            </DropdownMenu>
          </div>
          <div className="pd_0_8">
            <DropdownMenu title="Quyền riêng tư & hỗ trợ">
              <MenuItem title="Tắt thông báo" icon={<FontAwesomeIcon icon={faBellSlash} />} />
              <MenuItem title="Hạn chế" icon={<MuteMessageIcon />} />
              <MenuItem title="Chặn" icon={<Block />} />
              <MenuItem title="Báo cáo" icon={<Warning />} />
            </DropdownMenu>
          </div>
        </div>
      </div>
    </div>
  );
}
