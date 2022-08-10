import { useAuthContext } from "./useAuthContext";
import { useWorkoutsContext } from "./useWorkoutsContext";


export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const {dispatch : workoutsDispatch} = useWorkoutsContext();
  const logout = () => {
    //remove the user from the localstroge
    localStorage.removeItem("user");

    //dispatch
    dispatch({ type: "LOGOUT" });
    workoutsDispatch({type:'SET_WORKOUTS',payload : null});
  };

  return {logout};
};
