import store from "@/store";

const handleHttpError = (res) => {
  if (!res.ok) {
    store.commit("setError", true);
    setTimeout(() => {
      store.commit("setError", false);
    }, 2000);
    return;
  } else {
    return res;
  }
};

export default handleHttpError;
