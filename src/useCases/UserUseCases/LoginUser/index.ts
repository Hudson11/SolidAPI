import PostgreUserRepository from "../../../repository/implementations/PostgreUserRepository";
import LoginUserController from "./LoginUserController";
import LoginUserUseCase from "./LoginUserUseCase";

const userRepository = new PostgreUserRepository()

const loginUserUseCase = new LoginUserUseCase(
  userRepository
)

const loginUserController = new LoginUserController(
  loginUserUseCase
)

export { loginUserUseCase, loginUserController }