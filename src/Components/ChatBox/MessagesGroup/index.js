import classNames from 'classnames/bind';
import styles from './MessageItem.module.scss';
import CircleImage from '../../CircleImage';
import Actions from './Actions';
import Reactions from './Reactions';
import Tippy from '@tippyjs/react/headless';

const cx = classNames.bind(styles);

export default function MessagesGroup({ myself = false, messages = [], setMessages }) {
  const renderContent = () => {
    return messages.map((item, index) => {
      var first = index === 0 && messages.length !== 1;
      var last = index === messages.length - 1 && messages.length !== 1;
      var only = messages.length === 1;
      return (
        <div key={index} className={cx('mess-wrap')}>
          <Tippy
            hideOnClick
            placement="right"
            interactive
            delay={[0, 300]}
            appendTo={'parent'}
            render={(atrs) => {
              return <Actions message={item} setMessages={setMessages} />;
            }}
          >
            <div className={cx('mess-container', { first, last, only })}>
              <span className={cx('mess-content')}>{item.content}</span>
            </div>
          </Tippy>
          {/* // reactions of users */}
          <div>
            <Reactions reactions={item.reactions.data} count={item.reactions.countReact} />
          </div>
        </div>
      );
    });
  };

  const multi = messages.length > 0;

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
