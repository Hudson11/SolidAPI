import { Router } from 'express'
import AuthHelper from '../Helpers/AuthHelper'
import { createUserController } from '../useCases/UserUseCases/CreateUser'
import { deleteUserController } from '../useCases/UserUseCases/DeleteUser'
import { listUserController } from '../useCases/UserUseCases/ListUser'
import { loginUserController } from '../useCases/UserUseCases/LoginUser'
import { updateUserController } from '../useCases/UserUseCases/UpdateUser'

const router = Router()

router.post('/user', AuthHelper.tokenVerify, (request, response) => {
    return createUserController.handle(request, response)
})

router.get('/user/:id', AuthHelper.tokenVerify, (request, response) => {
    return listUserController.handle(request, response)
})

router.delete('/user/:id', AuthHelper.tokenVerify, (request, response) => {
    return deleteUserController.handle(request, response)
})

router.put('/user/:id', AuthHelper.tokenVerify, (request, response) => {
    return updateUserController.handle(request, response)
})

router.post('/user/auth', (request, response) => {
    return loginUserController.handle(request, response)
})

export default router