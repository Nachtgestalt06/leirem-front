import {createAction, props} from '@ngrx/store';
import {IUser} from '../../core/models/user.interface';

export enum EAuthActions {
  LOGIN = '[Auth] Login',
  LOGIN_SUCCESS = '[Auth] Login Success',
  SET_USER_DATA = '[Auth] Set user data',
  LOGIN_FAILURE = '[Auth] Login Failure',
  LOGOUT = '[Auth] Logout',
  CHANGE_ERROR_MESSAGE = '[Auth] Change error message'
}


export const Login = createAction(EAuthActions.LOGIN, props<{ user: IUser }>());
export const LoginSuccess = createAction(EAuthActions.LOGIN_SUCCESS, props<{ user: IUser }>());
export const SetUserData = createAction(EAuthActions.SET_USER_DATA, props<{ user: IUser }>());
export const LoginFailure = createAction(EAuthActions.LOGIN_FAILURE, props<{ payload?: any, hasError?: boolean, status?: number }>());
export const Logout = createAction(EAuthActions.LOGOUT);
export const ChangeErrorMessage = createAction(EAuthActions.CHANGE_ERROR_MESSAGE, props<{ hasError: boolean }>());
