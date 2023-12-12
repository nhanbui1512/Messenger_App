import request from './request';
import env from 'react-dotenv';

export const getAllRoom = async () => {
  const res = await request.get('/room/get-room', {
    headers: {
      Authorization: `Bearer ${env.TOKEN}`,
    },
  });
  return res.data;
};
