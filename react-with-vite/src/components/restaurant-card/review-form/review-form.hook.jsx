import { useReducer } from "react";

const INITIAL_REVIEW_FORM = {
  name: "",
  text: "",
  rating: 0,
};

function reducer(state, { formField, payload }) {
  switch (formField) {
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
    case "reset":
      return {
        ...INITIAL_REVIEW_FORM,
      };
    default:
      return state;
  }
}

export const useReviewForm = () => {
  const [form, dispatch] = useReducer(reducer, INITIAL_REVIEW_FORM);
  const updateField = (formField, payload) => dispatch({ formField, payload });
  const resetForm = () => dispatch({formField: "reset"});
  return {
    form,
    updateField,
    resetForm,
  };
};
