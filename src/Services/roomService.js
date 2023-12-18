import request from './request';
export const getAllRoom = async ({ token }) => {
  const res = await request.get('/room/get-room', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};
