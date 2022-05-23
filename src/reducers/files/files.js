import { ADD_FILE } from '../../actions/types';

const intialState={
  uplodedFiles:null,
};

export default (state = intialState, action) => {
  switch (action.type) {
    case ADD_FILE:
      return {
        uplodedFiles: [...state.uplodedFiles,action.data],
      };
    default:
      return {...state};
  }
};
