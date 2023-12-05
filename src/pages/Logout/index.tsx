import { Navigate } from "react-router-dom";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {sessionActions} from "../../store/session.ts";

const Logout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(sessionActions.logout());
  }, []);

  return (
    <Navigate
      to= "/"
    />
  )
}

export default Logout;