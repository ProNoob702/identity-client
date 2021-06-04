import axios from "axios";
import React, { FormEvent, useState } from "react";
import { useStore } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { userManager } from "../config/userManager";

export const LoginComponent = () => {
  const [busy, setBusy] = useState(false);
  const [username, setUsername] = useState("aaa@bbb.com");
  const [password, setPassword] = useState("password");
  const history = useHistory();
  const returnUrl =
    new URLSearchParams(history.location.search).get("ReturnUrl") || "/";
  const store = useStore();
  const oidc = store.getState().oidc;

  if (oidc.user && !busy) {
    return <Redirect to={returnUrl} />;
  }

  if (oidc.isLoadingUser || busy) {
    return <div>Wait server response...</div>;
  }

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setBusy(true);
    axios
      .post("https://localhost:5001/api/Account/SignIn", {
        Username: username,
        Password: password,
      })
      .then(async () => {
        await userManager.signinSilent();
      })
      .catch(() => {})
      .finally(() => {
        setBusy(false);
      });
  };
  return (
    <React.Fragment>
      <form onSubmit={submit}>
        <input
          defaultValue={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Sign in</button>
      </form>
    </React.Fragment>
  );
};
