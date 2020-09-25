import { Router } from 'express'
import { createUserController } from '../useCases/UserUseCases/CreateUser'
import { deleteUserController } from '../useCases/UserUseCases/DeleteUser'
import { listUserController } from '../useCases/UserUseCases/ListUser'
import { updateUserController } from '../useCases/UserUseCases/UpdateUser'

const router = Router()

router.post('/user', (request, response) => {
    return createUserController.handle(request, response)
})

router.get('/user/:id', (request, response) => {
    return listUserController.handle(request, response)
})

router.delete('/user/:id', (request, response) => {
    return deleteUserController.handle(request, response)
})

router.put('/user/:id', (request, response) => {
    return updateUserController.handle(request, response)
})


export default router