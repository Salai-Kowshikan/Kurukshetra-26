import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useReducer,
} from "react";

import type { ReactNode } from "react";

import { useApp } from "./AppContext";
import Cookies from "js-cookie"
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

import { apiKUserEvents } from "../api/user";
import {
  apiForgotPassword,
  apiGSignin,
  apiKLogin,
  apiKRegister,
} from "../api/auth"

/* ================= TYPES ================= */

interface User {
  [key: string]: any; // Replace with real user fields if known
}

interface AuthState {
  user: User;
  isAuthenticated: boolean;
  userEvents: any[];
}

type AuthAction =
  | {
      type: "token/loaded";
      payload: { user: User; userEvents: any[] };
    }
  | { type: "reset" };

interface AuthContextType extends AuthState {
  handleKLogin: (data: { email: string; pwd: string }) => void;
  handleKRegister: (data: any) => void;
  handleGoogleOAuth: (data: any) => void;
  handleForgotPassword: (data: any) => void;
  handleLogout: () => void;
  refreshAuth: () => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

/* ================= INITIAL STATE ================= */

const initialState: AuthState = {
  user: {},
  isAuthenticated: false,
  userEvents: [],
};

/* ================= REDUCER ================= */

function reducer(state: AuthState, action: AuthAction): AuthState {
  switch (action.type) {
    case "token/loaded":
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        userEvents: action.payload.userEvents,
      };
    case "reset":
      return initialState;
    default:
      return state;
  }
}

/* ================= CONTEXT ================= */

const AuthContext = createContext<AuthContextType | undefined>(undefined);

/* ================= PROVIDER ================= */

export function AuthProvider({ children }: AuthProviderProps) {
  const [{ user, isAuthenticated, userEvents }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const { refreshCaptcha, toggleCaptchaBadge, captchaToken } = useApp();
  const navigate = useNavigate();
  const DEFAULT_REDIRECT_PATH = "/";

  const refreshAuth = useCallback(() => {
    const token = Cookies.get("token");

    if (token) {
      apiKUserEvents()
        .then((data: any) => {
          dispatch({
            type: "token/loaded",
            payload: {
              user: data.user,
              userEvents: data.registrations,
            },
          });
        })
        .catch(console.error);
    } else {
      dispatch({ type: "reset" });
    }
  }, []);

  const handleKRegister = (data: any) => {
    refreshCaptcha();

    toast.promise(
      apiKRegister({
        ...data,
        captcha: captchaToken,
      }),
      {
        loading: "Sailing into unknown...",
        success: (data: any) => {
          dispatch({
            type: "token/loaded",
            payload: { user: data.user, userEvents: [] },
          });

          navigate(DEFAULT_REDIRECT_PATH);
          return data.message;
        },
        error: (err: any) => {
          dispatch({ type: "reset" });
          return typeof err === "object" ? err.message : err;
        },
      }
    );
  };

  const handleKLogin = (data: { email: string; pwd: string }) => {
    refreshCaptcha();

    toast.promise(
      apiKLogin({
        ...data,
        captcha: captchaToken,
      }),
      {
        loading: "Sailing into unknown...",
        success: (data: any) => {
          dispatch({
            type: "token/loaded",
            payload: { user: data.user, userEvents: [] },
          });

          navigate(DEFAULT_REDIRECT_PATH);
          return data.message;
        },
        error: (err: any) => {
          dispatch({ type: "reset" });
          return typeof err === "object" ? err.message : err;
        },
      }
    );
  };

  const handleGoogleOAuth = (data: any) => {
    refreshCaptcha();

    toast.promise(
      apiGSignin({
        ...data,
        captcha: captchaToken,
      }),
      {
        loading: "Sailing into unknown...",
        success: (data: any) => {
          if (data.redirect) {
            navigate(data.redirect.path, {
              replace: true,
              state: data.redirect.state,
            });
          } else {
            dispatch({
              type: "token/loaded",
              payload: { user: data.user, userEvents: [] },
            });
            navigate(DEFAULT_REDIRECT_PATH);
          }

          return data.message;
        },
        error: (err: any) =>
          typeof err === "object" ? err.message : err,
      }
    );
  };

  const handleForgotPassword = (data: any) => {
    refreshCaptcha();

    toast.promise(
      apiForgotPassword({
        ...data,
        captcha: captchaToken,
      }),
      {
        loading: "Sending verification link...",
        success: (data: any) => {
          navigate("/");
          return data.message;
        },
        error: (err: any) =>
          typeof err === "object" ? err.message : err,
      }
    );
  };

  const handleLogout = () => {
    refreshCaptcha();
    Cookies.remove("token");
    dispatch({ type: "reset" });
    toast.success("Adios, Voyager!");
    navigate(DEFAULT_REDIRECT_PATH);
  };

  useEffect(() => {
    toggleCaptchaBadge(false);
  }, [toggleCaptchaBadge]);

  useEffect(() => {
    refreshAuth();
  }, [refreshAuth, isAuthenticated]);

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        userEvents,
        handleKLogin,
        handleKRegister,
        handleGoogleOAuth,
        handleForgotPassword,
        handleLogout,
        refreshAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

/* ================= HOOK ================= */

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context)
    throw new Error("useAuth must be used inside AuthProvider");
  return context;
}
