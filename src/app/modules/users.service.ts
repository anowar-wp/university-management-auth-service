import config from '../../config/index'
import { IUser } from './users.interface'
import { User } from './users.model'
import { generatedUserId } from './users.utils'

export const createUser = async (user: IUser): Promise<IUser | null> => {
  // auto generate incremental id
  const id = await generatedUserId()

  user.id = id
  // Default Password
  if (!user.password) {
    user.password = config.default_user_pass as string
  }

  const createdUser = await User.create(user)

  if (!createUser) {
    throw new Error('Fail to create user !')
  }
  return createdUser
}

export default {
  createUser,
}
