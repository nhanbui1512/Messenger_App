import axios from 'axios';

export const createNewMessage = async ({ content, roomId }) => {
  try {
    const response = await axios.post(
      `http://localhost:3000/message/send-message`,
      {
        content: content,
        roomId: roomId,
      },
      {
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJOYW1lIjoibmhhbmJ1aTE1MTIiLCJlbWFpbCI6Im5oYW5iMTlAZ21haWwuY29tIiwiaWF0IjoxNzAxNzcxODM2LCJleHAiOjE3MDQzNjM4MzZ9.ZpRkIIAbYMvZurdOSPiw33r6UjJEZhZXW3lRL_m17rY`,
        },
      },
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};
