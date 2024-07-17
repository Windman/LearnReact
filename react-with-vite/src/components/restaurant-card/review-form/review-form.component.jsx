import { useReviewForm } from "./review-form.hook";
import { CounterContainer } from "../../counter/counter.container";

export const ReviewForm = () => {
  const { form, updateField, resetForm } = useReviewForm();
  const { name, text, rating } = form;

  return (
    <div>
      <div className="df">
        <span className="form__label">Name</span>
        <input
          value={name}
          onChange={(event) => {
            updateField("setName", event.target.value);
          }}
        />
      </div>
      <div className="df">
        <span className="form__label">Text</span>
        <input
          value={text}
          onChange={(event) => {
            updateField("setText", event.target.value);
          }}
        />
      </div>
      <div className="df">
        <span className="form__label">Rating</span>
        {
          <CounterContainer
            value={rating}
            min={1}
            max={5}
            onChanges={(counterValue) => {
              updateField("setRating", counterValue);
            }}
          />
        }
      </div>
      <div>
        <button
          type="submit"
          onClick={() => {
            console.log("review form", form);
            resetForm();
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};
