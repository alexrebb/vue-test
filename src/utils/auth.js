import AuthProvider from "../services/AuthProvider";
import loggerErrors from "./logger";
import router from "@/router/router";

export const auth = (value) => {
  AuthProvider.auth(value)
    .then(() => {
      localStorage.setItem("leadhit-site-id", JSON.stringify(value));
      router.push("/analitics");
    })
    .catch(loggerErrors);
};
