import { FILTERED_BREAD, SELECTED_BREAD } from "../actions/bread.action";

import { PANES } from "../../data/bread";

const initialState = {
  breads: PANES,
  filteredBread: [],
  selected: null,
};

const BreadReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECTED_BREAD:
      return {
        ...state,
        selected: state.breads.find((bread) => bread.id === action.breadId),
      };
    case FILTERED_BREAD:
      return {
        ...state,
        filteredBread: state.breads.filter(
          (bread) => bread.category === action.categoryID
        ),
      };

    default:
      return state;
  }
};

export default BreadReducer;
