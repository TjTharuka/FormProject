import jwt_decode from 'jwt-decode';
import { post, postFormData } from '../../api/main.api';
import { history } from '../../routers/AppRouter';
import { loadingState } from '../loading/loading';
import {  ADD_FILE, TOAST_MESSAGE } from '../types';

export const addFile = (data) => ({
  type: ADD_FILE,
  data,
});

export const fileUpload = (quactionArray=[]) => (dispatch) => {
  dispatch(loadingState(true));


  quactionArray.map(quaction=>{
    // if quaction type image
    if(quaction.fileId){
      postFormData(`/files`, quaction.fileId)
          // upload image file
          .then(({ data }) => {
            if (data && data.status) {
              // set original file uploaded
              quaction.fileId=data.data._id;
              dispatch(addFile(quaction));
              dispatch(loadingState(false));
              // history.push('/');
            } else {
              throw new Error(data.msg || 'file upload failed');
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
    }else{ // if quaction type text

      // set state to quaction
      dispatch(addFile(quaction));
      // set state loading state false
      dispatch(loadingState(false));

    }
  })







};

