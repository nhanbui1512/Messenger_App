import classNames from 'classnames/bind';
import styles from './MessageItem.module.scss';
import Image from '../../Image';
import Actions from './Actions';

const cx = classNames.bind(styles);

export default function MessageItem({ myself = false, contents = [] }) {
  const renderContent = () => {
    return contents.map((item, index) => {
      return (
        <div key={index} className={cx('mess-wrap')}>
          {myself && <Actions />}

          <div className={cx('mess-container')}>
            <span className={cx('mess-content')}>{item}</span>
          </div>
          {myself || <Actions />}
        </div>
      );
    });
  };

  const multi = contents.length > 0;

  return (
    <div
      className={cx('wrapper', {
        multi,
        myself,
      })}
    >
      {myself || (
        <div className={cx('avatar-container')}>
          <Image className={cx('avatar')} />
        </div>
      )}
      <div className={cx('list-content')}>{renderContent()}</div>
    </div>
  );
}
