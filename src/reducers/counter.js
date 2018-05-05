import * as TYPES from '../actions/types'

export default (state = 0, action) => {
  switch (action.type) {
    case TYPES.ADD_COUNTER: {

        return state*0+action.payload*(action.tax/100)
    }

    default: {
      return state;
    }
  }
}
