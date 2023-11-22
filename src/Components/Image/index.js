import classNames from 'classnames/bind';
import styles from './Image.module.scss';

const cx = classNames.bind(styles);
export default function Image({ className }) {
  return (
    <div className={cx('wrapper', { [className]: className })}>
      <img
        alt=""
        src="https://scontent.fdad3-6.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=dst-png_p100x100&_nc_cat=1&ccb=1-7&_nc_sid=2b6aad&_nc_ohc=M5xBkqsrW0IAX8B7Q47&_nc_ad=z-m&_nc_cid=1229&_nc_ht=scontent.fdad3-6.fna&oh=00_AfCER-NLrjGTjrrNnaCICl2bC8FHJs1ci9cEk0sV4roDoQ&oe=65716C78"
      />
    </div>
  );
}
