import classNames from 'classnames/bind';
import styles from './MessageItem.module.scss';
import CircleImage from '../../CircleImage';
import Actions from './Actions';
// import Reactions from './Reactions';
import Tippy from '@tippyjs/react/headless';

const cx = classNames.bind(styles);

export default function MessageItem({ myself = false, contents = [] }) {
  const renderContent = () => {
    return contents.map((item, index) => {
      const first = index === 0;
      const last = index === contents.length - 1;

      return (
        <div key={index} className={cx('mess-wrap')}>
          <Tippy
            hideOnClick
            placement="right"
            interactive
            delay={[0, 300]}
            appendTo={'parent'}
            render={(atrs) => {
              return <Actions />;
            }}
          >
            <div className={cx('mess-container', { first, last })}>
              <span className={cx('mess-content')}>{item}</span>
            </div>
          </Tippy>

          {/* <div> // reactions of users
            <Reactions />
          </div> */}
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
          <CircleImage className={cx('avatar')} />
        </div>
      )}
      <div className={cx('list-content')}>{renderContent()}</div>
    </div>
  );
}
