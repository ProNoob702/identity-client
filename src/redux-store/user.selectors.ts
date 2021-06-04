import { createSelector } from "@reduxjs/toolkit";

interface UserInfos {
  isAuthOk: boolean;
  isLoading: boolean;
}

const getUser = (state: any) => state.oidc.user;
const getLoadingUserInfo = (state: any) => state.oidc.isLoadingUser;
export const selectUserInfos = createSelector(
  (state) => getUser(state),
  (state) => getLoadingUserInfo(state),
  (user, loadingInfo): UserInfos => {
    return {
      isAuthOk: user && !user.expired ? true : false,
      isLoading: loadingInfo,
    };
  }
);

export const GetUserName = (state: any): string =>
  state.oidc.user?.profile?.sub;
