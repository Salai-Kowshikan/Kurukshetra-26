import Cookies from "js-cookie";
import api from "./axios";
import type { AxiosError } from "axios";

const url = "/auth";

/* ================= TYPES ================= */

interface LoginPayload {
  email: string;
  pwd: string;
  captcha?: string | null;
}

interface RegisterPayload {
  [key: string]: any;
}

interface GooglePayload {
  accessId: string;
  captcha?: string | null;
}

interface ForgotPasswordPayload {
  email: string;
  captcha?: string | null;
}

interface ResetPasswordPayload {
  [key: string]: any;
}

interface AuthResponse {
  message: string;
  token?: string;
  user?: any;
  redirect?: {
    path: string;
    state?: any;
  };
}

/* ================= K! LOGIN ================= */

export const apiKLogin = async (
  data: LoginPayload
): Promise<AuthResponse> => {
  try {
    const response = await api.post(`${url}/login`, data);

    const { message, token, user } = response.data;

    if (token) Cookies.set("token", token);

    return { message, token, user };
  } catch (err) {
    const error = err as AxiosError<any>;
    if (error.response) throw error.response.data.message;
    throw err;
  }
};

/* ================= K! REGISTER ================= */

export const apiKRegister = async (
  data: RegisterPayload
): Promise<AuthResponse> => {
  try {
    const response = await api.post(`${url}/register`, data);

    const { message, token, user } = response.data;

    if (token) Cookies.set("token", token);

    return { message, token, user };
  } catch (err) {
    const error = err as AxiosError<any>;
    if (error.response) throw error.response.data;
    throw err;
  }
};

/* ================= GOOGLE SIGNIN ================= */

export const apiGSignin = async (
  data: GooglePayload
): Promise<AuthResponse> => {
  try {
    const response = await api.post(`${url}/gsignin`, data);

    const { message, redirect, user, token } = response.data;

    if (token) Cookies.set("token", token);

    return { message, redirect, user, token };
  } catch (err) {
    const error = err as AxiosError<any>;
    if (error.response) throw error.response.data.message;
    throw err;
  }
};

/* ================= FORGOT PASSWORD ================= */

export const apiForgotPassword = async (
  data: ForgotPasswordPayload
): Promise<{ message: string }> => {
  try {
    const response = await api.post(`${url}/forgotpassword`, data);

    const { message } = response.data;

    return { message };
  } catch (err) {
    const error = err as AxiosError<any>;
    if (error.response) throw error.response.data.message;
    throw err;
  }
};

/* ================= RESET PASSWORD ================= */

export const apiResetPassword = async (
  data: ResetPasswordPayload
): Promise<{ message: string }> => {
  try {
    const response = await api.post(`${url}/resetpassword`, data);

    const { message } = response.data;

    return { message };
  } catch (err) {
    const error = err as AxiosError<any>;
    if (error.response) throw error.response.data.message;
    throw err;
  }
};
