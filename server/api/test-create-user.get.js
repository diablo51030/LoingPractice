import { PrismaClient } from '@prisma/client'

const prismaClient = new PrismaClient()

export default defineEventHandler(() => {
    const user = prismaClient.user.create({
        data:{
            email: 'ryanchien8125@gmail.com',
            password: '這裡要放密碼的雜湊值',
            emailVerified: true
        }
    })
    return user
})