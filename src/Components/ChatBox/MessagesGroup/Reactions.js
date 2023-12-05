import classNames from 'classnames/bind';
import styles from './MessageItem.module.scss';
import Image from '../../Image';
import reactionsConst from '../../../Constants/reactions';

const cx = classNames.bind(styles);

export default function Reactions({ reactions = [] }) {
  let count = 0;
  for (let react of reactions) {
    count += react.users.length;
  }

  if (reactions.length !== 0)
    return (
      <div className={cx('reacts-wrapper')}>
        <div className={cx('reacts-group')}>
          {reactions.map((react, index) => {
            return (
              <div key={index} className={cx('react-btn')}>
                <Image src={reactionsConst.get(react.title).icon}></Image>
              </div>
            );
          })}
          <div className={cx('count')}>
            <span>{count}</span>
          </div>
        </div>
      </div>
    );
}
