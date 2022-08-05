import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const logout = () => {
    //remove the user from the localstroge
    localStorage.removeItem("user");

    //dispatch
    dispatch({ type: "LOGOUT" });
  };

  return {logout};
};
