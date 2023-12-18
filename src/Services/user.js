import request from './request';

export const getMyProfile = async (token) => {
  try {
    const res = await request.get(`/user/get-my-info`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res.data;
  } catch (error) {
    throw error;
  }
};
