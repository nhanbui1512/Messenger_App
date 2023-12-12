import axios from 'axios';
import env from 'react-dotenv';

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
          Authorization: `Bearer ${env.TOKEN}`,
        },
      },
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};
