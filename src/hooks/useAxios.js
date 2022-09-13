import { useEffect, useReducer } from 'react';
import axios from 'axios';

const query = axios.create({
  baseURL: 'https://pcfy.redberryinternship.ge/api',
});

const initialState = {
  data: undefined,
  error: false,
  message: '',
  loading: false,
};

function axiosReducer(state, action) {
  switch (action.type) {
    case 'PENDING':
      return { ...state, error: false, message: '', loading: true };
    case 'SUCCESS':
      return { ...state, error: false, message: '', loading: false, data: action.data };
    case 'ERROR':
      return { ...state, error: true, message: action.message, loading: false, data: null };
    default:
      return state;
  }
}

function useAxios(handler, options = { path: '', paths: [''], withToken: true || false, id: '' }) {
  const [{ data, error, message, loading }, dispatch] = useReducer(axiosReducer, initialState);
  const TOKEN = process.env.REACT_APP_JWT_TOKEN;

  const handlers = {
    async getQuery({ path, withToken = false, id }) {
      try {
        dispatch({ type: 'PENDING' });

        const {
          data: { data: response },
        } = await query(`/${path}${id ? `/${id}` : ''}${withToken ? `?token=${TOKEN}` : ''}`);

        dispatch({ type: 'SUCCESS', data: response });
      } catch (error) {
        dispatch({ type: 'ERROR', message: error.response.data?.message || error.message });
      }
    },

    async getAllQuery({ paths }) {
      try {
        dispatch({ type: 'PENDING' });
        const data = await Promise.all(
          paths.map(async (path) => {
            const res = await query(`/${path}`);
            return { key: path, data: res.data.data };
          })
        );

        const output = {};

        data.forEach((response) => (output[response.key] = response.data));

        dispatch({ type: 'SUCCESS', data: output });
      } catch (error) {
        dispatch({ type: 'ERROR', message: error.response.data?.message || error.message });
      }
    },

    async sendQuery(body) {
      try {
        dispatch({ type: 'PENDING' });

        const { data } = await query.post(
          '/laptop/create',
          { ...body },
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        );

        dispatch({ type: 'SUCCESS', data });
      } catch (error) {
        dispatch({ type: 'ERROR', message: error.response.data?.message || error.message });
        throw error;
      }
    },
  };

  useEffect(() => {
    if (!handler) return;
    handlers[handler](options);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    data,
    error,
    message,
    loading,
    getQuery: handlers.getQuery,
    getAllQuery: handlers.getAllQuery,
    sendQuery: handlers.sendQuery,
  };
}

export default useAxios;
