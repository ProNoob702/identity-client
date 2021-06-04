import { LocationDescriptorObject } from "history";
import React from "react";
import { Redirect } from "react-router-dom";

export const RouteGuard =
  (Component: any, isAuthOk: boolean) =>
  ({ match }: any) => {
    if (isAuthOk) {
      return <Component match={match} />;
    } else {
      const params = new URLSearchParams();
      params.append("ReturnUrl", match.url);
      const to: LocationDescriptorObject<void> = {
        pathname: "/login",
        search: params.toString(),
      };
      return <Redirect to={to} />;
    }
  };
