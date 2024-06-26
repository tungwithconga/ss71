import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../store/reducers/Bt8Reducer";
import { RootState, AppDispatch } from "../../store/store";

interface LoginProps {
  onLogout: () => void;
}

export default function Login({ onLogout }: LoginProps) {
  const { user, isAuthenticated } = useSelector((state: RootState) => state.loginReducer);
  const dispatch: AppDispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    onLogout();
  };

  if (!isAuthenticated) {
    return <div>You are not logged in!</div>;
  }

  return (
    <div>
      <div>User Name: {user.userName}</div>
      <div>Email: {user.email}</div>
      <button
        style={{ border: "1px solid #ccc", padding: "8px", cursor: "pointer" }}
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}
