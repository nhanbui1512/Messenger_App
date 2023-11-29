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

export default function Actions() {
  const [emotions, setEmotions] = useState(false);
  const [menu, setMenu] = useState(false);

  const items = [
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
                <div className={cx('emotion-btn')}>
                  <Image src={reactsImage.heart} />
                </div>

                <div className={cx('emotion-btn')}>
                  <Image src={reactsImage.laugh} />
                </div>

                <div className={cx('emotion-btn', { active: true })}>
                  <Image src={reactsImage.wow} />
                </div>

                <div className={cx('emotion-btn')}>
                  <Image src={reactsImage.sad} />
                </div>
                <div className={cx('emotion-btn')}>
                  <Image src={reactsImage.angry} />
                </div>
                <div className={cx('emotion-btn')}>
                  <Image src={reactsImage.like} />
                </div>
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
                {items.map((item, index) => {
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
