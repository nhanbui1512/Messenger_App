import Cookies from 'js-cookie';

export const setToken = ({ token }) => {
  // Thay thế "your_auth_token" bằng mã thông báo của bạn
  const authToken = token;
  var maxAge = 7 * 24 * 60 * 60;
  // Tạo cookie với tên "authToken" và giá trị là mã thông báo của bạn
  document.cookie = `authToken=${authToken};max-age=${maxAge}; path=/; Secure`;
};

export const removeToken = () => {
  Cookies.remove('authToken');
};

export const getCookie = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
};

export function deleteCookie(name) {
  document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}
