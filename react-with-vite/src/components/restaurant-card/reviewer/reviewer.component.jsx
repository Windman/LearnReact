import { useSelector } from "react-redux";
import { selectUserById } from "../../../redux/entities/users";
import { useRequest } from "../../../hooks/use-request";
import { getUsers } from "../../../redux/entities/users/get-users";

export const Reviewer = ({ id }) => {
  const requestStatus = useRequest(getUsers);
  const user = useSelector((state) => selectUserById(state, id));

  if (requestStatus === "pending") {
    return <div>...loading</div>;
  }

  if (requestStatus === "rejected") {
    return <div>error</div>;
  }

  if (!user) {
    return null;
  }

  return (
    <>
      {user.name}
    </>
  );
};
