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

  const handleReact = (emotion) => {
    var prevState = [...emotionItems];

    for (let i = 0; i < prevState.length; i++) {
      if (prevState[i].id !== emotion.id && prevState[i].isActive) {
        prevState[i].isActive = false;
      }

      if (prevState[i].id === emotion.id) {
        if (prevState[i].isActive) {
          prevState[i].isActive = false;
        } else {
          prevState[i].isActive = true;
          createNewReact(emotion);
        }
      }
    }
    setemotionItems(prevState);
  };

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

  // create new react if not existed
  const createNewReact = (emotion) => {
    setMessages((prev) => {
      var prevState = [...prev];
      prevState.map((group) => {
        if (group.id === message.messagegroupId) {
          for (let i = 0; i < group.messages.length; i++) {
            if (group.messages[i].messageId === message.messageId) {
              if (group.messages[i].reactions.data) {
                group.messages[i].reactions.data.push(emotion);
                group.messages[i].reactions.countReact++;
              } else {
                group.messages[i].reactions.data = [emotion];
                group.messages[i].reactions.countReact = 1;
              }
            }
          }
        }
        return group;
      });
      return prevState;
    });
  };

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
