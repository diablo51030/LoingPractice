<template>
    <div class="bg-white py-24">
      <div class="flex flex-col items-center">
        <h1 class="text-6xl font-semibold text-blue-600">這是會員中心</h1>
        <button class="mt-4 text-4xl font-bold text-gray-900" @click="logout" >登出</button>
      </div>
    </div>
</template>

<script setup>
import { useCookie } from "nuxt/app"

function logout () {
   const authCookie = useCookie('access_token')
   authCookie.value = undefined
   console.log(authCookie)
   navigateTo('/')
}

// definePageMeta({
//   middleware: 'auth'
// })

</script>