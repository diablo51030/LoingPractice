import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    profile: {
      id: null,
      email: null
    }
  }),
  actions: {
    async refreshUserProfile() {
      const { data } = await useFetch('/api/user/profile', { initialCache: false })
      if (data.value) {
        this.profile = data.value
      } else {
        alert('未知錯誤')
      }
    }
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'user',
        storage: process.client ? localStorage : null
      }
    ]
  }
})