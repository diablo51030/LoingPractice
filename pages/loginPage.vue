<template>
    <div class="flex flex-col items-center">
        <form class="space-y-6" @submit.prevent="handleEmailLogin">
            <img src="https://www.bestyield.com/static/media/logo.079023c7.svg" alt="" class="w-[150px] mt-8">
            <div class="mt-8 ">
                <label for="email" class="mr-2">信箱</label>
                <input 
                    type="mail" 
                    name="email"
                    autocomplete="email"
                    class="rounded border 
                    border-black"
                    v-model="loginData.email"
                />
            </div>
            <div class="mt-8 ">
                <label for="password" class="mr-2">密碼</label>
                <input 
                    type="password" 
                    name="password"
                    autocomplete="current-password"
                    class="rounded border 
                    border-black"
                    v-model="loginData.password"
                >
            </div>
            <button class="mt-3 font-bold text-1xl ">登入</button>
            <br>
            <button @click="navigateTo('/register')" class="mt-3 font-bold text-1xl ">註冊</button>
        </form>
    </div>
</template>

<script setup>

const loginData =  reactive ({
    email: '',
    password: ''
})

const handleEmailLogin = async () => {

    const data = await useFetch('/api/auth/login', {
        //發送 HTTP 請求的方法 GET,POST,DELETE
        method:'POST',
        //請求的 body，可以傳入一個物件，它將自動被轉化為字串
        //toRaw將一個reactive生成的響應式物件轉回普通物件
        body: toRaw(loginData),
        //當第一次請求資料時，將會把有效的 payload 快取，之後的請求只要是相同的 key，都會直接回傳快取的結果
        initialCahe:false
    })
 
    console.log(data)
    
    if(data.data._value){
        navigateTo('/memberCenter')
    }else{
        alert('登入失敗')
    }
}

</script>