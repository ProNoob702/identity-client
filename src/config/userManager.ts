import Oidc from "oidc-client";
import { createUserManager } from "redux-oidc";

Oidc.Log.logger = console;

const settings = {
  authority: `https://localhost:5001`,
  client_id: "statsh_frontend",
  redirect_uri: `http://localhost:3000/callback`,
  response_type: "code",
  scope: "testing_api",
  silent_redirect_uri: `http://localhost:3000/silent_renew`,
  automaticSilentRenew: true,
  filterProtocolClaims: true,
  loadUserInfo: true,
};

export const userManager = createUserManager(settings);
