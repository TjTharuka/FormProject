import { LOAD_PAPERS} from '../../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case LOAD_PAPERS:
      return {
        papers: action.data,
      };
    default:
      return state;
  }
};
