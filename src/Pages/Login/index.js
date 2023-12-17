import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import Image from '../../Components/Image';
import images from '../../assests/images';

const cx = classNames.bind(styles);

function Login() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <div className={cx('body')}>
          <div className={cx('logo')}>
            <Image className={cx('logo-img')} src={images.logo}></Image>
          </div>
          <div className={cx('slogan-container')}>
            <h2 className={cx('slogan-content')}>Kết nối với những người bạn yêu quý.</h2>
          </div>
          <div className={cx('login-form')}>
            <input placeholder="Email hoặc số điện thoại" className={cx('input')}></input>
            <input type="password" placeholder="Mật khẩu" className={cx('input')}></input>
            <div>
              <button className={cx('login-btn')}>Tiếp tục</button>
            </div>
            <div className={cx('remember')}>
              <div className={cx('remember-wrap')}>
                <input className={cx('check')} type="checkbox"></input>
                <p className={cx('label')}>Duy trì đăng nhập</p>
              </div>
            </div>
          </div>
        </div>
        <div className={cx('footer')}>footer</div>
      </div>
    </div>
  );
}
export default Login;
