import { GoogleLogin } from "@react-oauth/google";
import type { CredentialResponse } from "@react-oauth/google";
import { toast } from "react-hot-toast";
import { useAuth } from "@/context/AuthContext";

const GoogleOAuthLogin = () => {
  const { handleGoogleOAuth } = useAuth();

  const handleSuccess = (credentials: CredentialResponse) => {
    if (!credentials.credential) {
      toast.error("Invalid Google credential received");
      return;
    }

    handleGoogleOAuth({
      accessId: credentials.credential,
    });
  };

  return (
    <GoogleLogin
      onSuccess={handleSuccess}
      onError={() => {
        toast.error("Error authenticating through Google OAuth");
      }}
    />
  );
};

export default GoogleOAuthLogin;
