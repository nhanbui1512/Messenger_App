import classNames from 'classnames/bind';
import styles from './ChatContent.module.scss';
import TimeBar from '../TimeBar';
import MessagesGroup from '../MessagesGroup';
import { useEffect, useRef } from 'react';

const cx = classNames.bind(styles);

export default function ChatContent({ data, setMessages }) {
  const wrapperRef = useRef(null);

  const renderMessages = () => {
    return data?.map((item, index) => {
      return (
        <div key={index}>
          <TimeBar>{item.createAtStr}</TimeBar>
          <MessagesGroup messages={item.messages} myself={item.myself} setMessages={setMessages} />
        </div>
      );
    });
  };

  useEffect(() => {
    const contentHeight = wrapperRef.current.scrollHeight;
    wrapperRef.current.scrollTop = contentHeight;
  }, []);

  return (
    <div ref={wrapperRef} className={cx('wrapper')}>
      {renderMessages()}
    </div>
  );
}
