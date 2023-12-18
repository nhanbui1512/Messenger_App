import request from './request';

async function CheckLogin(email, password) {
  try {
    const res = await request.post(
      '/login',
      {
        email: email,
        password: password,
      },
      {},
    );
    return res.data;
  } catch (error) {
    throw error;
  }
}

export default CheckLogin;
