import PostgreUserRepository from "../../../repository/implementations/PostgreUserRepository";
import PostgreRepository from "../../../repository/implementations/PostgreUserRepository";
import ListUserController from "./ListUserController";
import ListUserUseCase from "./ListUserUseCase";

const userRepository = new PostgreUserRepository()

const listUserUsecase = new ListUserUseCase(
  userRepository
)

const listUserController = new ListUserController(
  listUserUsecase
)

export { listUserUsecase, listUserController }