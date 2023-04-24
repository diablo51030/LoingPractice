// import jwt from 'jsonwebtoken'

export default defineEventHandler((event) => {
    const jwtToken = getCookie(event, 'access_token')
    console.log('執行')
    setCookie( event, 'access_token',  jwtToken,{
        maxAge:-1
    })
})