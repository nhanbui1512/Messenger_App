import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import CircleButton from '../../CircleButton';
import { Emoji, FileIcon, GifIcon, ImageIcon, LikeIcon, PlusIcon, Send } from '../../Icons';
import { useState, useContext } from 'react';

import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale-subtle.css';
import Tippy from '@tippyjs/react';
import EmojiPicker from 'emoji-picker-react';

import { createNewMessage } from '../../../Services/message';
import { useParams } from 'react-router-dom';
import { StoreContext } from '../../../store';

const cx = classNames.bind(styles);

export default function Footer({ setMessages }) {
  const context = useContext(StoreContext);
  const socket = context.socket;

  const [valueChat, setValueChat] = useState('');
  const [scale, setScale] = useState(false);
  const [emoji, setEmoji] = useState(false);
  const { roomid } = useParams();

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

  const changeDOM = (result) => {
    const moment = new Date();
    setMessages((prevState) => {
      const lastMessage = prevState[prevState.length - 1];
      const createAt = new Date(lastMessage.createAt);
      const minutesSpace = Math.floor((moment - createAt) / (60 * 1000));
      // nếu nhóm tin nhắn cuối cùng là ko phải là mình gửi hoặc k/cách thời gian là trên 1 phút
      if (!lastMessage.myself || minutesSpace > 2) {
        // tạo ra 1 nhóm tin nhắn và thêm 1 tin nhắn vào trong
        const newgroupMessage = result;
        return [...prevState, newgroupMessage]; // thêm nhóm tin nhắn vào cuối cùng của state
      } else if (lastMessage.myself) {
        // nếu nhóm tin nhắn là do mình gửi
        const newState = [...prevState];
        const newMessage = result.messages[result.messages.length - 1];
        newState[newState.length - 1].messages.push(newMessage); // thêm tin nhắn vào nhóm tin nhắn cuối cùng
        return newState;
      }
    });
  };

  const handleSendMessage = () => {
    // mount message into DOM
    if (valueChat.trim() !== '') {
      createNewMessage({ content: valueChat, roomId: roomid })
        .then((res) => {
          return res.data;
        })
        .then((data) => {
          changeDOM(data);
          socket.emit('message', data);
        })
        .catch((err) => {
          console.log(err);
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
              <CircleButton onClick={handleSendMessage} transparent icon={<Send />} />
            </div>
          </Tippy>
        )}
      </div>
    </div>
  );
}
