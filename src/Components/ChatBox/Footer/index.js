import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import CircleButton from '../../CircleButton';
import { Emoji, FileIcon, GifIcon, ImageIcon, LikeIcon, PlusIcon, Send } from '../../Icons';
import { useState } from 'react';

import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale-subtle.css';
import Tippy from '@tippyjs/react';
import EmojiPicker from 'emoji-picker-react';
const cx = classNames.bind(styles);

export default function Footer({ setMessages }) {
  const [valueChat, setValueChat] = useState('');
  const [scale, setScale] = useState(false);
  const [emoji, setEmoji] = useState(false);

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
    if (valueChat.trim() !== '') {
      const moment = new Date();
      const hours = moment.getHours();
      const minutes = String(moment.getMinutes()).padStart(2, '0');
      const timeStr = `${hours}:${minutes} ${moment.getDate()}/${
        moment.getMonth() + 1
      }/${moment.getFullYear()}`;

      setMessages((prevState) => {
        const lastMessage = prevState[prevState.length - 1];
        const createAt = new Date(lastMessage.createAt);
        const minutesSpace = Math.floor((moment - createAt) / (60 * 1000));

        // nếu nhóm tin nhắn cuối cùng là ko phải là mình gửi hoặc k/cách thời gian là trên 1 phút
        if (!lastMessage.myself || minutesSpace > 1) {
          // tạo ra 1 nhóm tin nhắn và thêm 1 tin nhắn vào trong
          const newgroupMessage = {
            createAtStr: '23:52 29/11/2023',
            id: 23, // fixed data, cần phải sửa khi call API
            createAt: moment.toISOString(),
            userUserId: 3,
            roomchatRoomId: 1,
            messages: [
              {
                createTimeStr: timeStr,
                last: '1 ngày',
                messageId: 54,
                content: valueChat,
                createAt: moment.toISOString(),
                deleteAt: null,
                userUserId: 1,
                roomchatRoomId: 1,
                messagegroupId: 23,
                reactions: [],
              },
            ],
            myself: true,
          };

          return [...prevState, newgroupMessage]; // thêm nhóm tin nhắn vào cuối cùng của state
        } else if (lastMessage.myself) {
          // nếu nhóm tin nhắn là do mình gửi
          const newState = [...prevState];

          const newMessage = {
            createTimeStr: timeStr,
            last: '1 ngày',
            messageId: 54,
            content: valueChat,
            createAt: moment.toISOString(),
            deleteAt: null,
            userUserId: 1,
            roomchatRoomId: 1,
            messagegroupId: 23,
            reactions: [],
          };
          newState[newState.length - 1].messages.push(newMessage); // thêm tin nhắn vào nhóm tin nhắn cuối cùng
          return newState;
        }
      });
    }

    // visible menu buttons
    setScale(false);
    setValueChat('');
  };

  return (
    <div className={cx('wrapper')}>
      <Tippy animation={'scale-subtle'} content="Mở hành động khác">
        <div className={cx('group-btn')}>
          <CircleButton className={cx('menu-btn')} transparent icon={<PlusIcon />} />
        </div>
      </Tippy>
      <div className={cx('center')}>
        <Tippy animation={'scale-subtle'} content={'Đính kèm file'}>
          <div>
            <CircleButton
              className={cx('menu-btn', { scale: scale })}
              transparent
              icon={<ImageIcon />}
            />
          </div>
        </Tippy>
        <Tippy animation={'scale-subtle'} content={'Chọn nhãn dán'}>
          <div>
            <CircleButton
              className={cx('menu-btn', { scale: scale })}
              transparent
              icon={<FileIcon />}
            />
          </div>
        </Tippy>
        <Tippy animation={'scale-subtle'} content={'Chọn file gif'}>
          <div>
            <CircleButton
              className={cx('menu-btn', { scale: scale })}
              transparent
              icon={<GifIcon />}
            />
          </div>
        </Tippy>
        <div className={cx('chat-input')}>
          <div className={cx('input-container')}>
            <textarea
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  handleSendMessage();
                }
              }}
              placeholder="Aa"
              value={valueChat}
              onInput={handleInput}
              rows="1"
            />

            <div
              onClick={() => {
                setEmoji(!emoji);
              }}
              className={cx('emoji-btn')}
            >
              <div style={{ display: 'flex' }}>
                <Emoji />
              </div>
            </div>

            {emoji && (
              <div className={cx('emoji-wrapper')}>
                <EmojiPicker
                  previewConfig={{
                    showPreview: false,
                  }}
                  onEmojiClick={(emojiData) => {
                    setValueChat(valueChat + emojiData.emoji);
                    setEmoji(!emoji);
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </div>

      <div>
        {valueChat === '' ? (
          <Tippy animation="scale-subtle" content="Gửi lượt thích">
            <div>
              <CircleButton
                onClick={() => {
                  setScale(false);
                }}
                className={cx('like-btn')}
                transparent
                icon={<LikeIcon />}
              />
            </div>
          </Tippy>
        ) : (
          <Tippy animation="scale-subtle" content="Nhấn Enter để gửi">
            <div>
              <CircleButton
                onClick={() => {
                  handleSendMessage();
                }}
                transparent
                icon={<Send />}
              />
            </div>
          </Tippy>
        )}
      </div>
    </div>
  );
}
