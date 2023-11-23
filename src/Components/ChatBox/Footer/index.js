import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import CircleButton from '../../CircleButton';
import { FileIcon, GifIcon, ImageIcon, LikeIcon, PlusIcon, Send } from '../../Icons';
import { useState } from 'react';

const cx = classNames.bind(styles);

export default function Footer({ setMessages }) {
  const [valueChat, setValueChat] = useState('');
  const [scale, setScale] = useState(false);

  const handleInput = (e) => {
    setValueChat(e.target.value);

    // change height for textarea tag
    const textarea = e.target;
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';

    if (e.target.value === '') {
      setScale(false);
    } else {
      setScale(true);
    }
  };

  const handleSendMessage = () => {
    // mount message into DOM
    setMessages((prevState) => {
      const result = [
        ...prevState,
        {
          time: '11:03',
          contents: [valueChat],
          myself: true,
        },
      ];
      return result;
    });

    // visible menu buttons
    setScale(false);
  };

  return (
    <div className={cx('wrapper')}>
      <div className={cx('group-btn')}>
        <CircleButton className={cx('menu-btn')} transparent icon={<PlusIcon />} />
      </div>
      <div className={cx('center')}>
        <CircleButton
          className={cx('menu-btn', { scale: scale })}
          transparent
          icon={<ImageIcon />}
        />
        <CircleButton
          className={cx('menu-btn', { scale: scale })}
          transparent
          icon={<FileIcon />}
        />
        <CircleButton className={cx('menu-btn', { scale: scale })} transparent icon={<GifIcon />} />
        <div className={cx('chat-input')}>
          <div className={cx('input-container')}>
            <textarea
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  handleSendMessage();
                  setValueChat('');
                }
              }}
              placeholder="Aa"
              value={valueChat}
              onInput={handleInput}
              rows="1"
            ></textarea>
          </div>
        </div>
      </div>

      <div>
        {valueChat === '' ? (
          <CircleButton
            onClick={() => {
              setScale(false);
            }}
            className={cx('like-btn')}
            transparent
            icon={<LikeIcon />}
          />
        ) : (
          <CircleButton
            onClick={() => {
              handleSendMessage();
            }}
            transparent
            icon={<Send />}
          />
        )}
      </div>
    </div>
  );
}
