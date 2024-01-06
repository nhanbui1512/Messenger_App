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
const cx = classNames.bind(styles);

export default function Information() {
  return (
    <div className={cx('wrapper')}>
      <div>
        <div className={cx('user-container')}>
          <div className={cx('avatar-wrapper')}>
            <CircleImage
              className={cx('avatar')}
              src="https://scontent.fdad3-6.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=dst-png_p100x100&_nc_cat=1&ccb=1-7&_nc_sid=2b6aad&_nc_eui2=AeF4S8iDyGTR0kN0tHuSRVwQso2H55p0AlGyjYfnmnQCUVugx4uMNoxt1ySMX2c7j0P0hFDCfmL5xSrZJ2mrbp42&_nc_ohc=WBNISUE6G2AAX-xfrC7&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fdad3-6.fna&oh=00_AfBoxkeuGVxJsNbik3UNpEkfjj0alpAvB3q7X2d9gXV-UQ&oe=65B23E38"
            />
          </div>
          <div className={cx('user-name')}>
            <Link to={'#'}>Nhân Bùi</Link>
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
              <MemberItem />
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
