import { API_URL, API_KEY } from "../services/constants";
import handleHttpError from "@/utils/handleHttpError";

class AuthProvider {
  static auth = async (value) => {
    return await fetch(`${API_URL}`, {
      method: "GET",
      headers: {
        "Api-Key": API_KEY,
        "Leadhit-Site-Id": value,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(handleHttpError)
      .then((res) => res.json());
  };
}

export default AuthProvider;
