import request from './request';
import TOKEN from '../Constants/token';

export const getProfile = async () => {
  try {
    const res = await request.get(`/user/get-my-info`, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });

    return res.data;
  } catch (error) {
    throw error;
  }
};
