import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import Image from '../../Components/Image';
import images from '../../assests/images';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Login() {
  const [loginFail, setLoginFail] = useState(false);
  const handleLogin = () => {
    setLoginFail(!loginFail);
  };
  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <div className={cx('body')}>
          <div className={cx('logo')}>
            <Image className={cx('logo-img')} src={images.logo}></Image>
          </div>
          {loginFail && <h1>Messenger</h1>}
          {loginFail || (
            <div className={cx('slogan-container')}>
              <h2 className={cx('slogan-content')}>Kết nối với những người bạn yêu quý.</h2>
            </div>
          )}
          {loginFail && (
            <div className={cx('fail-container')}>
              <div>Vui lòng nhập lại mật khẩu của bạn</div>
              <div>
                Mật khẩu bạn đã nhập không chính xác. <Link>Quên mật khẩu?</Link>
              </div>
            </div>
          )}
          <div className={cx('login-form')}>
            <input placeholder="Email hoặc số điện thoại" className={cx('input')}></input>
            <input type="password" placeholder="Mật khẩu" className={cx('input')}></input>
            <div>
              <button onClick={handleLogin} className={cx('login-btn')}>
                Tiếp tục
              </button>
            </div>
            <div className={cx('remember')}>
              <div className={cx('remember-wrap')}>
                <input className={cx('check')} type="checkbox"></input>
                <p className={cx('label')}>Duy trì đăng nhập</p>
              </div>
            </div>
          </div>
        </div>
        <div className={cx('footer')}>
          <div className={cx('footer-wrap')}>
            <Link className={cx('footer-item')}>Chưa dùng Facebok ?</Link>
            <span className={cx('footer-space')}></span>
            <Link className={cx('footer-item')}>Quên mật khẩu</Link>
            <span className={cx('footer-space')}></span>
            <Link className={cx('footer-item')}>Chính sách quyền riêng tư</Link>
            <span className={cx('footer-space')}></span>
            <Link className={cx('footer-item')}>Điều khoản</Link>
            <span className={cx('footer-space')}></span>
            <Link className={cx('footer-item')}>Chính sách cookie</Link>
            <span className={cx('footer-space')}></span>
            <span className={cx(['footer-item', 'coppyright'])}>© Meta 2023</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
