import request from './request';
import TOKEN from '../Constants/token';
export const getAllRoom = async () => {
  const res = await request.get('/room/get-room', {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  });
  return res.data;
};
