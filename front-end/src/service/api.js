import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

const contentType = 'application/json';

const login = async (email, password) => {
  const response = await api({
    method: 'POST',
    url: '/login',
    data: {
      email,
      password,
    },
  });
  return response.data;
};

export const register = async (name, email, password) => {
  const response = await api({
    method: 'POST',
    url: '/register',
    data: {
      name,
      email,
      password,
    },
  });
  return response.data;
};

export const getProducts = async () => {
  const response = await api({
    method: 'GET',
    url: '/products',
    headers: {
      'Content-Type': contentType,
    },
  });
  return response.data;
};

export const getOrdersId = async (id) => {
  const response = await api({
    method: 'GET',
    url: `/orders/${id}`,
  });

  return response.data;
};

export const getSellers = async () => {
  const response = await api({
    method: 'GET',
    url: '/seller',
    headers: {
      'Content-Type': contentType,
    },
  });
  return response.data;
};

export const saleRegister = async (sale, token) => {
  const response = await api({
    method: 'POST',
    url: '/orders',
    headers: {
      Authorization: token,
    },
    data: sale,
  });
  return response.data;
};

export const getOrders = async () => {
  const response = await api({
    method: 'GET',
    url: '/orders',
    headers: {
      'Content-Type': contentType,
    },
  });
  return response.data;
};

export const updateState = async (id, status) => {
  const result = await api({
    method: 'PUT',
    url: `/orders/${id}?status=${status}`,
  });
  return result;
};

export const getOrdersSeller = async (id) => {
  const response = await api({
    method: 'GET',
    url: `seller/${id}/orders`,
  });

  return response.data;
};

export default login;
