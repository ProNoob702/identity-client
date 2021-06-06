import Oidc, { UserManagerSettings } from "oidc-client";
import { createUserManager } from "redux-oidc";

Oidc.Log.logger = console;

const settings: UserManagerSettings = {
  client_id: "statsh_frontend",
  redirect_uri: `http://localhost:3000/callback`,
  response_type: "token id_token",
  scope: "openid profile testing_api",
  authority: `https://localhost:44304`,
  silent_redirect_uri: "http://localhost:3000/silentRenew",
  automaticSilentRenew: false,
  filterProtocolClaims: true,
  loadUserInfo: true,
  monitorSession: true,
};

export const userManager = createUserManager(settings);
