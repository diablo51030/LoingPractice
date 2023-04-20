<template>
    <div class="flex flex-col items-center">
        <img src="https://www.bestyield.com/static/media/logo.079023c7.svg" alt="" class="w-[150px] mt-8">
        <div class="mt-8 ">
            <label for="email" class="mr-2">信箱</label>
            <input type="mail" class="rounded border border-black"/>
        </div>
        <div class="mt-8 ">
            <label for="password" class="mr-2">密碼</label>
            <input type="password" class="rounded border border-black">
        </div>
        <button class="mt-3 font-bold text-1xl ">登入</button>
        <NuxtLink to="/register" class="mt-3 font-bold text-1xl ">註冊</NuxtLink>
    </div>
</template>