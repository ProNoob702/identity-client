import axios from "axios";
import React, { useEffect, useState } from "react";
import { useStore } from "react-redux";
import { Redirect, useLocation } from "react-router-dom";
import { userManager } from "../config/userManager";

export const LogoutComponent = () => {
  const store = useStore();
  const oidc = store.getState().oidc;
  const [busy, setBusy] = useState(false);
  const location = useLocation();
  const logoutId = new URLSearchParams(location.search).get("logoutId");
  useEffect(() => {
    if (!logoutId || busy) {
      return;
    }
    setBusy(true);
    axios
      .get("api/Account/SignOut", {
        params: { logoutId: logoutId },
      })
      .then(async () => {})
      .catch((e) => {})
      .finally(() => {
        setBusy(false);
      });
  }, [oidc.user, logoutId, busy]);
  const logout = async () => {
    await userManager.signoutRedirect();
  };
  if (!oidc.user && !busy) {
    return <Redirect to="/" />;
  }
  if (busy) {
    return <div>Wait server response...</div>;
  }
  return (
    <div>
      <h1>Logout</h1>
      <p>
        <button
          onClick={logout}
          style={{
            border: "1px solid black",
          }}
        >
          Logout
        </button>
      </p>
    </div>
  );
};
