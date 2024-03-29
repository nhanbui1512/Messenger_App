import axios from 'axios';
import request from './request';

export const createNewMessage = async ({ content, roomId, token, data }) => {
  try {
    var response = await axios.post(`http://localhost:3000/message/send-message`, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getMessages = async ({ roomid, page, perPage, token }) => {
  const res = await request.get(
    `/message/get-by-room?roomid=${roomid}&page=${page}&per_page=${perPage}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return res.data;
};
