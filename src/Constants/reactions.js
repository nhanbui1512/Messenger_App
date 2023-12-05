import reactsImage from '../assests/images/reactions';

const laugh = {
  icon: reactsImage.laugh,
  title: 'laugh',
};

const heart = {
  icon: reactsImage.heart,
  title: 'heart',
};
const like = {
  icon: reactsImage.like,
  title: 'like',
};

const angry = {
  icon: reactsImage.angry,
  title: 'angry',
};

const wow = {
  icon: reactsImage.wow,
  title: 'wow',
};

const sad = {
  icon: reactsImage.sad,
  title: 'sad',
};

const reactions = new Map();
reactions.set('heart', heart);
reactions.set('laugh', laugh);
reactions.set('wow', wow);
reactions.set('sad', sad);
reactions.set('angry', angry);
reactions.set('like', like);

export default reactions;
