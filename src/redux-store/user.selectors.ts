import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface UserInfos {
  isAuthOk: boolean;
  isLoading: boolean;
}

const getUser = (state: RootState) => state.oidc.user;
const getLoadingUserInfo = (state: RootState) => state.oidc.isLoadingUser;
export const selectUserInfos = createSelector(
  (state: RootState) => getUser(state),
  (state) => getLoadingUserInfo(state),
  (user, loadingInfo): UserInfos => {
    return {
      isAuthOk: user && !user.expired ? true : false,
      isLoading: loadingInfo,
    };
  }
);

export const GetUserName = (state: RootState): string | undefined =>
  state.oidc.user?.profile?.sub;
