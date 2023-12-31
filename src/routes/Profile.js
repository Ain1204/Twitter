import { authService } from "fbase";
import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default () => {
  const history = useHistory();
  const onLogOutClick = () => {
    authService.signOut();
    history.push("/");
  };
  return (
    <>
      <button Link to="/" onClick={onLogOutClick}>
        Log Out
      </button>
    </>
  );
};
