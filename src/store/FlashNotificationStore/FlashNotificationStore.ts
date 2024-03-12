import { defineStore } from 'pinia';

export const flashNotification = defineStore({
  id: 'notification',
  state: () =>
  ({
    message: String("")
  }),
  getters: {
    getMessage: (state) => state.message,
  },
  actions: {
    setMessage(message: any) {
      this.message = message
    },
    removeMessage(){
      this.message = ""
    },
  },
});
