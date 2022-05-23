import jwt_decode from 'jwt-decode';
import { post } from '../../api/main.api';
import { history } from '../../routers/AppRouter';
import { loadingState } from '../loading/loading';
import { LOGIN, LOGOUT, TOAST_MESSAGE,ADD_PAPER } from '../types';

export const addPapare = (data) => ({
  type: ADD_PAPER,
  data,
});

export const createPaper = (data) => (dispatch) => {
  dispatch(loadingState(true));
  post(`/quactions`, data)
    .then(({ data }) => {
      if (data && data.status) {
        // localStorage.setItem('user_accessToken', data.data);
        dispatch(addPapare(data));
        // history.push('/');
        dispatch(loadingState(false));
      } else {
        throw new Error(data.msg || 'quaction paper submition failed');
      }
    })
    .catch((error) => {
      dispatch({
        type: TOAST_MESSAGE,
        status: false,
        message: error.response ? error.response.data.msg : error.message,
      });
      dispatch(loadingState(false));
    });
};


