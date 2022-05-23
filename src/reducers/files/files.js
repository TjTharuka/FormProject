import { ADD_FILE } from '../../actions/types';

const intialState={
  uplodedFiles:[],
};

export default (state = intialState, action) => {
  console.log(action.data);
  switch (action.type) {
    case ADD_FILE:
      return {
        uplodedFiles: [...state.uplodedFiles,action.data],
      };
    default:
      return {...state};
  }
};
