import {
  createContext,
  useContext,
  useReducer,
  useState,
} from "react";

import type { ReactNode, Dispatch, SetStateAction } from "react";

import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

/* ================= TYPES ================= */

interface AppState {
  captchaToken: string | null;
}

type AppAction =
  | {
      type: "captcha/fetched";
      payload: string;
    };

interface AppContextType extends AppState {
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  refreshCaptcha: () => Promise<void>;
  toggleCaptchaBadge: (show: boolean) => void;
}

interface AppProviderProps {
  children: ReactNode;
}

/* ================= INITIAL STATE ================= */

const initialState: AppState = {
  captchaToken: null,
};

/* ================= REDUCER ================= */

function reducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case "captcha/fetched":
      return { ...state, captchaToken: action.payload };
    default:
      return state;
  }
}

/* ================= CONTEXT ================= */

const AppContext = createContext<AppContextType | undefined>(undefined);

/* ================= PROVIDER ================= */

export function AppProvider({ children }: AppProviderProps) {
  const [{ captchaToken }, dispatch] = useReducer(reducer, initialState);
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  async function refreshCaptcha(): Promise<void> {
    if (!executeRecaptcha) {
      console.log("Execute recaptcha not yet available");
      return;
    }

    const token = await executeRecaptcha("homepage");

    dispatch({
      type: "captcha/fetched",
      payload: token,
    });
  }

  const toggleCaptchaBadge = (show: boolean): void => {
    const badge = document.getElementsByClassName(
      "grecaptcha-badge"
    )[0] as HTMLElement | undefined;

    if (badge) {
      badge.style.visibility = show ? "visible" : "hidden";
    }
  };

  return (
    <AppContext.Provider
      value={{
        isLoading,
        setIsLoading,
        captchaToken,
        refreshCaptcha,
        toggleCaptchaBadge,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

/* ================= HOOK ================= */

export function useApp() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useApp must be used inside AppProvider");
  }

  return context;
}
