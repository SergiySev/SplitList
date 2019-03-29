import {Customer} from '@app/models';
import {CustomerActions, SELECT_CUSTOMER, CREATE_CUSTOMER, CREATE_FEEDBACK} from '../actions';

export const STATE_ID = 'Customer';

export interface State {
  ids: string[];
  entities: { [id: string]: Customer };
  selected: string | null;
}

export const initialState: State = {
  ids: [],
  entities: {},
  selected: null
};

export function reducer(state = initialState, action: CustomerActions): State {
  switch (action.type) {
    case CREATE_CUSTOMER: {
      return {
        ids: [action.payload.id, ...state.ids],
        entities: {[action.payload.id]: action.payload, ...state.entities},
        selected: state.selected
      };
    }

    case CREATE_FEEDBACK: {
      if (state.entities[action.payload.parentId]) {
        state.entities[action.payload.parentId].feedback.unshift(action.payload.feedback);
      }

      return {...state};
    }

    case SELECT_CUSTOMER: {
      return {
        ...state,
        selected: action.payload.id
      };
    }

    default: {
      return state;
    }
  }
}
