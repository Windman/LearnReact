import { useReviewForm } from "./review-form.hook";

export const ReviewForm = () => {
  const { form, updateField, resetForm } = useReviewForm();
  const { name, text, rating } = form;

  const handleSubmit = (form) => {
    console.log("handle submit", form);
    resetForm();
  };

  return (
    <div>
      <div>
        <span>Name</span>
        <input
          value={name}
          onChange={(event) => {
            updateField("setName", event.target.value);
          }}
        />
      </div>
      <div>
        <span>Text</span>
        <input
          value={text}
          onChange={(event) => {
            updateField("setText", event.target.value);
          }}
        />
      </div>
      <div>
        <span>Rating</span>
        <input
          value={rating}
          onChange={(event) => {
            updateField("setRating", event.target.value);
          }}
        />
      </div>
      <div>
        <button
          type="submit"
          onClick={() => {
            handleSubmit(form);
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};
