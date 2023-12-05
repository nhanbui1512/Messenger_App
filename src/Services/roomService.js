import request from './request';

export const getAllRoom = async () => {
  const res = await request.get('/room/get-room', {
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJOYW1lIjoibmhhbmJ1aTE1MTIiLCJlbWFpbCI6Im5oYW5iMTlAZ21haWwuY29tIiwiaWF0IjoxNzAxNzcxODM2LCJleHAiOjE3MDQzNjM4MzZ9.ZpRkIIAbYMvZurdOSPiw33r6UjJEZhZXW3lRL_m17rY`,
    },
  });
  return res.data;
};
