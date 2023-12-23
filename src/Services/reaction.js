import request from './request';

export async function createReaction({ token, idMsg, emotion }) {
  try {
    const result = await request.post(
      `/reaction/create?idmsg=${idMsg}&emotion=${emotion}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return result.data;
  } catch (error) {
    throw error;
  }
}

export async function deleteReaction({ token, idMsg }) {
  try {
    const result = await request.delete(`/reaction/delete?msg_id=${idMsg}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return result.data;
  } catch (error) {
    throw error;
  }
}
