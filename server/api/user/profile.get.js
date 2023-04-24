import jwt from 'jsonwebtoken'
import db from '@/server/db'
//未完成

const runtimeConfig = useRuntimeConfig()

export default defineEventHandler(async (event) => {
  const user = event.context?.auth?.user

  if (!user?.id) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Unauthorized'
    })
  }

  const userRecord = await db.user.getUserById({
    id: user.id
  })

  if (!userRecord) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Could not find user.'
    })
  }
  console.log('userRecord.id' + userRecord.id)
  console.log('userRecord.email' + userRecord.email)

  return {
    id: userRecord.id,
    email: userRecord.email
  }
})