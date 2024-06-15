import { useContext } from "react";
import { AuthContext } from "app/context/AuthContext";
import { UserType } from "shared/types";

export const useUser = () => {
  const { user, setUser } = useContext(AuthContext);

  const addUser = (user: UserType) => {
    setUser(user);
  };

  const removeUser = () => {
    setUser(null);
  };

  return { user, addUser, removeUser };
};
