<template>
  <div class="container">
    <form @submit.prevent="handleSubmit">
      <h1 class="title">LeadHit</h1>
      <div class="search-bar">
        <input
          type="text"
          class="search-bar__input"
          placeholder="Введите ID сайта"
          v-bind:value="searchValue"
          @input="setInputValue"
        />
        <button class="search-bar__btn">Войти</button>
      </div>
      <p v-if="error">id сайта должен содержать 24 символа</p>
      <p v-if="isAuthError">Ошибка авторизации</p>
    </form>
  </div>
</template>

<script>
import { auth } from "@/utils/auth";
import { mapState } from "vuex";

export default {
  data() {
    return {
      searchValue: "",
      error: false,
    };
  },
  methods: {
    setInputValue(e) {
      this.searchValue = e.target.value;
      this.error = false;
    },

    handleSubmit() {
      if (this.searchValue.length !== 24) {
        this.error = true;
        return;
      }
      auth(this.searchValue);
    },
  },
  computed: {
    ...mapState({
      isAuthError: (state) => state.isAuthError,
    }),
  },
};
</script>

<style scoped>
.container {
  height: 100vh;
  display: flex;
  align-items: center;
}

form {
  background-color: rgb(116, 101, 101);
  background-size: cover;
  padding: 2rem 1.5rem 17.5rem;
  text-align: center;
  position: relative;
  width: 100%;
  height: 200px;
}
@media (min-width: 1024px) {
  form {
    padding: 2rem 1.5rem;
  }
}

.title {
  color: white;
  margin-bottom: 1.5rem;
  font-weight: 500;
  font-size: 3rem;
}

.search-bar {
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
}
.search-bar__input {
  width: 100%;
  max-width: 500px;
  font-size: 1.8rem;
  font-weight: 700;
  color: hsl(0, 0%, 17%);
  border: none;
  outline: none;
  padding: 1.5rem 2rem;
  border-radius: 10px 0 0 10px;
  cursor: pointer;
}
input:invalid {
  box-shadow: 0 0 5px 1px red;
}

input:focus:invalid {
  box-shadow: none;
}
.search-bar__btn {
  background-color: black;
  border: none;
  outline: none;
  color: white;
  padding: 0 1.5rem;
  border-radius: 0 10px 10px 0;
  position: relative;
  cursor: pointer;
}
.search-bar__btn:hover {
  background-color: rgb(77, 77, 77);
}
p {
  color: red;
  font-size: 20px;
}
</style>
