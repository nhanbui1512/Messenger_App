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
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJOYW1lIjoibmhhbmJ1aTE1MTIiLCJlbWFpbCI6Im5oYW5iMTlAZ21haWwuY29tIiwiaWF0IjoxNzAxMjI3NDIxLCJleHAiOjE3MDM4MTk0MjF9.MX1kxk7CiNB8nki-GMB1oSJTY0YzX0KTUqYHUhRA4N4`,
        },
      },
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};
