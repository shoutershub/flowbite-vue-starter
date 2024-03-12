import type { User, AuthStoreState, Token, Name, Avatar, Email } from './types';
import { useStorage } from '@vueuse/core';
import { defineStore } from 'pinia';

const storageName = import.meta.env.VITE_STORAGE_NAME;


export const UserAuthStore = defineStore({
  id: 'authStore',
  state: () =>
  ({
    user: useStorage(storageName, {
    } as AuthStoreState),
  }),
  getters: {
    getToken: (state) => state.user.token,
    getName: (state) => state.user.name,
    getEmail: (state) => state.user.email,
    getAvatar: (state) => state.user.avatar,
    getUserID: (state) => state.user.userId,
  },
  actions: {
    setAuthUser(user: AuthStoreState) {
      this.user.name = user.name;
      this.user.email = user.email;
      this.user.avatar = user.avatar;
      this.user.userId = user.userId;
      this.user.token = user.token
    },
    setToken(token: Token): void {
      this.user.token = token;
    },
    updateUserName(name: Name): void {
      this.user.name = name;
    },
    updateAvatar(avatar: Avatar): void {
      this.user.avatar = avatar;
    },
    deleteAuthUser(){
      this.user = {} as AuthStoreState
    },
    updateEmail(email: Email){
      this.user.email = email;
    },
    isLogged(): boolean {
      if (this.getToken !== undefined) {
        return true;
      } else {
        return false;
      }
    },
  },
});
