// action - account reducer
export const LOGIN = "@auth/LOGIN";
export const LOGOUT = "@auth/LOGOUT";
export const REGISTER = "@auth/REGISTER";

// action - tabs
export const TAB_CLICKED = "TAB_CLICKED";

// Sign In
export const LoginAction = (user) => ({
  type: LOGIN,
  payload: user,
});

// Sign In
export const LogoutAction = (user) => ({
  type: LOGOUT,
  payload: user,
});
