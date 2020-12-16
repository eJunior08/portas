import { updateSignup } from '../slices/signup.slice';

const signupAction = {
  update: (payload: any) => async (dispatch: any) => {
    await dispatch(updateSignup(payload));
  },
};

export { signupAction };
