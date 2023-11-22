import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import CircleButton from '../../CircleButton';
import { FileIcon, GifIcon, ImageIcon, LikeIcon, PlusIcon, Send } from '../../Icons';
import { useState } from 'react';

const cx = classNames.bind(styles);

export default function Footer() {
  const [valueChat, setValueChat] = useState('');

  const [scale, setScale] = useState(false);

  const handleInput = (e) => {
    const textarea = e.target;
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
    setValueChat(e.target.value);

    if (e.target.value === '') {
      setScale(false);
    } else {
      setScale(true);
    }
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
            <textarea placeholder="Aa" value={valueChat} onInput={handleInput} rows="1"></textarea>
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
          <CircleButton transparent icon={<Send />} />
        )}
      </div>
    </div>
  );
}
