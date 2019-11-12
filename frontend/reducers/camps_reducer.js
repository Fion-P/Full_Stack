import { RECEIVE_CAMPS, RECEIVE_CAMP } from "../actions/camp_actions";
import { RECEIVE_REVIEW, REMOVE_REVIEW } from '../actions/review_actions';

const campsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CAMPS:
      let nextState = {};
      for (let i = 0; i < action.camps.length; i++ ) {
        nextState[action.camps[i].id] = action.camps[i];
      }
      return nextState;
    case RECEIVE_CAMP:
      const newCamp = { [action.camp.id]: action.camp };
      return Object.assign({}, state, newCamp);
    case RECEIVE_REVIEW:
      const { review } = action;
      let newState = Object.assign({}, state);
      newState[review.camp_id].reviewIds.push(review.id);
      return newState;
    case REMOVE_REVIEW:
      // debugger;
      const {id} = action;
      let thisState = Object.assign({}, state)
      let idx = thisState[Object.keys(state)].reviewIds.indexOf(id);
      thisState[Object.keys(state)].reviewIds.splice(idx, 1);
      return thisState;
    default:
      return state;
  }
};

export default campsReducer;