import PostgreUserRepository from "../../../repository/implementations/PostgreUserRepository";
import PostgreRepository from "../../../repository/implementations/PostgreUserRepository";
import CreateUserController from "./CreateUserController";
import CreateUserUseCase from "./CreateUserUseCase";

const usersRepository = new PostgreUserRepository()

const createUserUseCase = new CreateUserUseCase(
    usersRepository
)

const createUserController = new CreateUserController(
    createUserUseCase
)

export { createUserController, createUserUseCase }