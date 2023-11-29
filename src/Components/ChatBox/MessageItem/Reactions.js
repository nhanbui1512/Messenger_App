import classNames from 'classnames/bind';
import styles from './MessageItem.module.scss';
import Image from '../../Image';

const cx = classNames.bind(styles);

export default function Reactions({ reactions }) {
  if (reactions.countReact !== 0)
    return (
      <div className={cx('reacts-wrapper')}>
        <div className={cx('reacts-group')}>
          {reactions.data.map((react, index) => {
            return (
              <div key={index} className={cx('react-btn')}>
                <Image src={react.icon}></Image>
              </div>
            );
          })}
          <div className={cx('count')}>
            <span>{reactions.countReact}</span>
          </div>
        </div>
      </div>
    );
}
