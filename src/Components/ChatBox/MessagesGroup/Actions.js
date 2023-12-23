import classNames from 'classnames/bind';
import styles from './MessageItem.module.scss';
import CircleButton from '../../CircleButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical, faFaceSmile, faReply } from '@fortawesome/free-solid-svg-icons';
import reactsImage from '../../../assests/images/reactions';

import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import PopperWrapper from '../../Popper/PopperWrapper';
import PopperItem from '../../Popper/PopperItem';

import 'tippy.js/dist/tippy.css';
import Image from '../../Image';
import { useState } from 'react';
import { createReaction, deleteReaction } from '../../../Services/reaction';
import { getCookie } from '../../../Services/local/cookie';

const cx = classNames.bind(styles);

export default function Actions({ message, setMessages }) {
  const [emotions, setEmotions] = useState(false);
  const [menu, setMenu] = useState(false);

  const menuItems = [
    {
      title: 'Xóa, gỡ',
    },
    {
      title: 'Chuyển tiếp',
    },
    {
      title: 'Ghim',
    },
  ];

  const [emotionItems, setemotionItems] = useState([
    {
      id: 0,
      title: 'heart',
      icon: reactsImage.heart,
      isActive: false,
    },
    {
      id: 1,
      title: 'laugh',
      icon: reactsImage.laugh,
      isActive: false,
    },
    {
      id: 2,
      title: 'wow',
      icon: reactsImage.wow,
      isActive: false,
    },
    {
      id: 4,
      title: 'sad',
      icon: reactsImage.sad,
      isActive: false,
    },

    {
      id: 6,
      title: 'angry',
      icon: reactsImage.angry,
      isActive: false,
    },
    {
      id: 7,
      title: 'like',
      icon: reactsImage.like,
      isActive: false,
    },
  ]);

  const renderEmotions = () => {
    return (
      <>
        {emotionItems.map((emotion) => {
          return (
            <div
              onClick={() => {
                handleReact(emotion);
              }}
              key={emotion.id}
              className={cx('emotion-btn', { active: emotion.isActive })}
            >
              <Image src={emotion.icon} />
            </div>
          );
        })}
      </>
    );
  };

  const createNewReact = (emotion) => {
    const token = getCookie('authToken') || '';
    createReaction({ token, idMsg: message.messageId, emotion: emotion.title })
      .then((res) => {
        if (res.isSuccess) {
          const dataMessage = res.dataMessage;

          setMessages((prev) => {
            var groups = [...prev];
            const group = groups.find((group) => group.id === dataMessage.messagegroupId);
            const message = group.messages.find((msg) => msg.messageId === dataMessage.messageId);
            message.reactions = dataMessage.reactions;
            return groups;
          });
        }
      })
      .catch((err) => {
        console.log(err);

        // xử lý phía người dùng nhưng không dữ liệu phía Server không thay đổi
        setMessages((prev) => {
          var groups = [...prev];
          for (let group of groups) {
            if (group.id === message.messagegroupId) {
              for (let msg of group.messages) {
                if (msg.messageId === message.messageId) {
                  const isExist = msg.reactions.data.find((item) => item.title === emotion.title);
                  // nếu đã tồn tại react trùng với react mà người dùng thả
                  if (isExist) {
                    for (let react of msg.reactions.data) {
                      // xóa bỏ lịch sử react cũ của user đi
                      react.users = react.users.filter((user) => user !== 1);

                      // thêm userId vào react đã tồn tại
                      if (react.title === emotion.title) react.users.push(1);
                    }
                    // loại bỏ những react mà không có user
                    msg.reactions.data = msg.reactions.data.filter(
                      (react) => react.users.length > 0,
                    );
                  } else {
                    for (let react of msg.reactions.data) {
                      // xóa bỏ lịch sử react cũ của user đi
                      react.users = react.users.filter((user) => user !== 1);
                    }
                    // loại bỏ những react mà không có user
                    msg.reactions.data = msg.reactions.data.filter(
                      (react) => react.users.length > 0,
                    );

                    // thêm một react mới hoàn toàn vào data
                    msg.reactions.data.push({
                      title: emotion.title,
                      users: [1],
                    });
                  }
                  break;
                }
              }
              break;
            }
          }

          return groups;
        });
      });
  };

  const deleteReact = (emotion) => {
    const token = getCookie('authToken') || '';
    deleteReaction({ token, idMsg: message.messageId })
      .then((res) => {
        // console.log(res);
        if (res.isSuccess) {
          const dataMessage = res.dataMessage;
          setMessages((prev) => {
            var groups = [...prev];
            const group = groups.find((group) => group.id === message.messagegroupId);
            const msg = group.messages.find((msg) => msg.messageId === message.messageId);
            msg.reactions = dataMessage.reactions;
            return groups;
          });
        }
      })
      .catch((err) => {
        setMessages((prev) => {
          var groups = [...prev];
          const group = groups.find((group) => group.id === message.messagegroupId);
          const msg = group.messages.find((msg) => msg.messageId === message.messageId);
          const react = msg.reactions.data.find((react) => react.title === emotion.title);
          react.users = react.users.filter((user) => user !== 1);
          msg.reactions.data = msg.reactions.data.filter((react) => react.users.length > 0);

          return groups;
        });
        console.log(err);
      });
  };

  const handleReact = (emotion) => {
    var emotions = [...emotionItems];

    for (let i = 0; i < emotions.length; i++) {
      // tắt tât cả các active cũ của emotion btn
      if (emotions[i].id !== emotion.id && emotions[i].isActive) {
        emotions[i].isActive = false;
      }

      if (emotions[i].id === emotion.id) {
        if (emotions[i].isActive) {
          // nếu đang thả react
          emotions[i].isActive = false;
          deleteReact(emotion);
        } else {
          // nếu chưa thả react
          emotions[i].isActive = true;
          createNewReact(emotion);
        }
      }
    }
    setemotionItems(emotions);
  };

  // create new react if not existed

  return (
    <div className={cx('action_wrapper')}>
      <Tippy zIndex={98} content="Bày tỏ cảm xúc">
        <div className="relative">
          <HeadlessTippy
            appendTo={document.body}
            visible={emotions}
            interactive
            onHidden={() => {
              setEmotions(false);
            }}
            offset={[0, -14]}
            delay={400}
            placement="top"
            render={(atr) => (
              <div
                onMouseLeave={() => {
                  setEmotions(false);
                }}
                className={cx('emotion-wrapper')}
              >
                {renderEmotions()}
              </div>
            )}
          >
            <div>
              <CircleButton
                onClick={() => {
                  setEmotions(!emotions);
                }}
                transparent
                className={cx('action-btn')}
                icon={<FontAwesomeIcon icon={faFaceSmile} />}
              />
            </div>
          </HeadlessTippy>
        </div>
      </Tippy>
      <Tippy content="Trả lời">
        <div>
          <CircleButton
            transparent
            className={cx('action-btn')}
            icon={<FontAwesomeIcon icon={faReply} />}
          />
        </div>
      </Tippy>
      <Tippy content="Xem thêm">
        <div>
          <HeadlessTippy
            visible={menu}
            placement="top"
            interactive
            appendTo={document.body}
            render={() => (
              <PopperWrapper
                onMouseLeave={() => {
                  setMenu(false);
                }}
                arrow={false}
                className={cx('expand-menu')}
              >
                {menuItems.map((item, index) => {
                  return <PopperItem key={index} className={cx('menu-item')} data={item} />;
                })}
              </PopperWrapper>
            )}
          >
            <div>
              <CircleButton
                onClick={() => {
                  setMenu(!menu);
                }}
                transparent
                className={cx('action-btn')}
                icon={<FontAwesomeIcon icon={faEllipsisVertical} />}
              />
            </div>
          </HeadlessTippy>
        </div>
      </Tippy>
    </div>
  );
}
