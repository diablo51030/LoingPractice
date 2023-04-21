import bcrypt from 'bcrypt'
import db from '@/server/db'

//處理 HTTP 請求中的 Body
export default defineEventHandler( async(event) => {
    const body = await readBody(event)

    let userRecord = await db.user.getUserByEmail({
        email: body.email
    })

    if(userRecord){
        throw createError({
            statusCode: 400,
            statusMessage: 'A user with that email address already exists'
        })
    }

    userRecord = await db.user.createUser({
        email: body.email,
        password: bcrypt.hashSync( body.password, 10),
        emailVerified: false
    })

    return {
        id: userRecord.id,
        email: userRecord.email
      }
})