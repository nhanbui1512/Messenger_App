import axios from 'axios';
import request from './request';
import TOKEN from '../Constants/token';

export const createNewMessage = async ({ content, roomId }) => {
  try {
    var response = await axios.post(
      `http://localhost:3000/message/send-message`,
      {
        content: content,
        roomId: roomId,
      },
      {
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          Authorization: `Bearer ${TOKEN}`,
        },
      },
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getMessages = async ({ roomid, page, perPage }) => {
  const res = await request.get(
    `/message/get-by-room?roomid=${roomid}&page=${page}&per_page=${perPage}`,
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    },
  );
  return res.data;
};
