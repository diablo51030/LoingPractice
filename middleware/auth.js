import { useUserStore } from '@/stores/user'

export default defineNuxtRouteMiddleware(() => {
    if (process.client) {
    console.log(process)
    const userStore = useUserStore()
    
    console.log(userStore)
        if (!userStore.profile?.id) {
        return navigateTo('/loginPage')
        }
    } else {
      return navigateTo('/')
    }
  })


