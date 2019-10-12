import { toast } from 'react-toastify';

export const TOKEN_KEY = '@Mados:token';

export const isAuthenticated = () => {
  if (localStorage.getItem(TOKEN_KEY) !== null) {
    return true;
  }
  toast.info('Nope');
  return false;
};
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const login = token => {
  localStorage.setItem(TOKEN_KEY, token);
  return true;
};
export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};
