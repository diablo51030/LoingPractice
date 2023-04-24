export default defineEventHandler((event) => {
    const jwtToken = getCookie(event, 'access_token')
    setCookie( event, 'access_token',  jwtToken,{
        maxAge:-1
    })
})