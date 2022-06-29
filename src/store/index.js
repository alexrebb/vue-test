import { createStore } from "vuex";

export default createStore({
  state: {
    isAuthError: false,
  },

  mutations: {
    setError(state, bool) {
      state.isAuthError = bool;
    },
  },
});
