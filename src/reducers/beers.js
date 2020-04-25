import { BeerActionTypes } from '../actions/index';

const beers = (state = { all: [], current: {}, filter: null}, action) => {
  switch (action.type) {
    case BeerActionTypes.GET_ALL:
      return Object.assign({}, state, {
        all: action.payload
      })
      case BeerActionTypes.GET_ONE:
        return Object.assign({}, state, {
          current: action.payload
        })
    case BeerActionTypes.FILTER_BY:
      return Object.assign({}, state, {
        filter: action.payload
      })
    default:
      return state
  }
}

export default beers;
