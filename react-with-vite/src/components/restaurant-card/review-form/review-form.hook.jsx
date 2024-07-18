import { useReducer } from "react";

const INITIAL_REVIEW_FORM = {
  name: "",
  text: "",
  rating: 1,
};

function reducer(state, { actionType, payload }) {
  switch (actionType) {
    case "setName":
      return {
        ...state,
        name: payload,
      };
    case "setText":
      return {
        ...state,
        text: payload,
      };
    case "setRating":
      return {
        ...state,
        rating: payload,
      };
    case "resetModel":
      return {
        ...INITIAL_REVIEW_FORM,
      };
    default:
      return state;
  }
}

export const useReviewForm = () => {
  const [form, dispatch] = useReducer(reducer, INITIAL_REVIEW_FORM);
  const updateName = (payload) => dispatch({ actionType: "setName", payload });
  const updateText = (payload) => dispatch({ actionType: "setText", payload });
  const updateRating = (payload) => dispatch({ actionType: "setRating", payload });
  const resetForm = () => dispatch({ actionType: "resetModel" });
  return {
    form,
    updateName,
    updateText,
    updateRating,
    resetForm,
  };
};
