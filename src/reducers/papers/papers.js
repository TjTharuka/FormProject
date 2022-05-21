import { LOAD_PAPERS,ADD_PAPER } from '../../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case LOAD_PAPERS:
      return {
        papers: action.data,
      };
    case ADD_PAPER:
      return {
        papers: [...state,action.data],
      };
    default:
      return state;
  }
};
