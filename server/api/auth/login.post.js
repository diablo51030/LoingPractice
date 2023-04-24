import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import db from '@/server/db'

const runtimeConfig = useRuntimeConfig()

export default defineEventHandler(async (event) => {
    //來解析登入時傳來請求中的Body
    const body = await readBody(event)
    console.log(body)

    //DB拿出來的資料
    const userRecord = await db.user.getUserByEmail({
        email: body.email
    })

    if(!userRecord){
        throw createError ({
            statusCode: 400,
            statusMessage: 'Email or password is incorrect'
        })
    }
    //比較body.password & userRecord.passowrd是否相同
    //bcrypt.compare(text, hashedText) text放你要認證的字串 (未加密) 通常登入時是 Client 傳來的密碼
    //hashedText 放已加密字串，通常是 Server 從 Database 拿出來的資料
    if((await bcrypt.compare(body.password, userRecord.password)) !== true) {
        console.log('密碼比對錯誤')
        throw createError({
            statusCode: 400,
            statusMessage: 'Email or password is incorrect'
        })
    }else{
        console.log('密碼比對正確')
    }

    const jwtTokenPayload = {
        id: userRecord.id
    }

    const maxAge = 60 * 60 * 24 * 7
    const expires = Math.floor(Date.now() / 1000) + maxAge
    
    const jwtToken = jwt.sign(
        //payload
        {
          exp: expires,
          data: jwtTokenPayload
        },
        //secretOrPrivateKey
        runtimeConfig.jwtSignSecret
    )

    setCookie( event, 'access_token', jwtToken, {
        httpOnly: true,
        maxAge,
        expires: new Date(expires * 1000),
        secure: process.env.NODE_ENV === 'production',
        path: '/'
    })

    return {
        id: userRecord.id,
        email: userRecord.email
    } 

})
