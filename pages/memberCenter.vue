<template>
    <div class="bg-white py-24">
      <form class="space-y-6">
        <div class="flex flex-col items-center">
          <h1 class="text-6xl font-semibold text-blue-600">這是會員中心</h1>
          <button class="mt-4 text-4xl font-bold text-gray-900" @click="logout" >登出</button>
        </div>
      </form>
    </div>
</template>

<script setup>

function logout () {
  //獲取cookie
  useFetch('/api/cookie')
  navigateTo('/')
}









// definePageMeta({
//   middleware: 'auth'
// })

</script>