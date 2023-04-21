<template>
    <div class="flex flex-col items-center">
        <form class="space-y-6" @submit.prevent="handleRegister">
            <img src="https://www.bestyield.com/static/media/logo.079023c7.svg" alt="" class="w-[150px] mt-8">
            <div class="mt-8 ">
                <label for="email" class="mr-2">註冊信箱</label>
                <input 
                    type="mail" 
                    class="rounded border border-black"
                    v-model="registerData.email"
                    name="email"
                    autocomplete="email"
                />
            </div>
            <div class="mt-8 ">
                <label for="password" class="mr-2">註冊密碼</label>
                <input 
                    type="password" 
                    class="rounded border border-black"
                    v-model="registerData.password"
                    name="password"
                    autocomplete="current-password"
                >
            </div>
            <button class="mt-5 font-bold text-1xl ">註冊</button>
        </form>
    </div>
</template>

<script setup>

    const registerData = reactive({
        email: '',
        password: ''
    })

    const handleRegister = async () => {
        const{data} = await useFetch('/api/auth/register',{
            method: 'POST',
            body: toRaw(registerData),
            initialCache: false
        })
    
        if (data.value) {
            alert('註冊成功')
            navigateTo('/')
        } else {
            alert('註冊失敗')
        }
    }
</script>