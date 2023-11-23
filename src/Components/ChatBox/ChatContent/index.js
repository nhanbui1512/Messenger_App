import classNames from 'classnames/bind';
import styles from './ChatContent.module.scss';
import TimeBar from '../TimeBar';
import MessageItem from '../MessageItem';
import { useEffect, useRef } from 'react';

const cx = classNames.bind(styles);

export default function ChatContent({ data }) {
  const wrapperRef = useRef(null);

  const renderMessages = () => {
    return data.map((item, index) => {
      return (
        <div key={index}>
          <TimeBar>{item.time}</TimeBar>
          <MessageItem key={index} contents={item.contents} myself={item.myself ? true : false} />
        </div>
      );
    });
  };

  useEffect(() => {
    const contentHeight = wrapperRef.current.scrollHeight;
    wrapperRef.current.scrollTop = contentHeight;
  });

  return (
    <div ref={wrapperRef} className={cx('wrapper')}>
      {renderMessages()}
    </div>
  );
}
