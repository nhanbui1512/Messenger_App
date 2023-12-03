import request from './request';

export const getAllRoom = async () => {
  const res = await request.get('/room/get-room', {
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJOYW1lIjoibmhhbmJ1aTE1MTIiLCJlbWFpbCI6Im5oYW5iMTlAZ21haWwuY29tIiwiaWF0IjoxNzAxMjI3NDIxLCJleHAiOjE3MDM4MTk0MjF9.MX1kxk7CiNB8nki-GMB1oSJTY0YzX0KTUqYHUhRA4N4`,
    },
  });
  return res.data;
};
