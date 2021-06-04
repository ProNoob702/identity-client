import { User } from "oidc-client";
import React from "react";
import { useHistory } from "react-router-dom";
import { CallbackComponent } from "redux-oidc";
import { userManager } from "../config/userManager";

// At this time the /callback is not used because signIn use ajax request
export const CallbackHandlerComponent = () => {
  const history = useHistory();
  return (
    <CallbackComponent
      userManager={userManager}
      successCallback={(user: User) => {
        // TO DO: get ReturnUrl fro user.state
        history.push("/");
      }}
      errorCallback={(error) => {
        console.error("Login error", error);
        // TO DO: notification
      }}
    >
      <div>Redirecting...</div>
    </CallbackComponent>
  );
};
