import classNames from 'classnames/bind';
import styles from './ChatContent.module.scss';
import TimeBar from '../TimeBar';
import MessagesGroup from '../MessagesGroup';
import AutoScrollDown from '../../AutoSrcollDown';

const cx = classNames.bind(styles);

export default function ChatContent({ data, setMessages }) {
  const renderMessages = () => {
    return (
      <div>
        {data?.map((item, index) => {
          return (
            <div key={index}>
              <TimeBar>{item.createAtStr}</TimeBar>
              <MessagesGroup
                messages={item.messages}
                myself={item.myself}
                setMessages={setMessages}
              />
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className={cx('wrapper')}>
      <AutoScrollDown>{renderMessages()}</AutoScrollDown>
    </div>
  );
}
