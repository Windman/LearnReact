import { useSelector } from "react-redux";
import { selectUserById } from "../../../redux/entities/users";

export const Reviewer = ({ id }) => {
  const user = useSelector((state) => selectUserById(state, id));

  return (
    <>
      {user.name}
    </>
  );
};
