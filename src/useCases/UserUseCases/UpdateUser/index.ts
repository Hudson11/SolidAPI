import PostgreUserRepository from "../../../repository/implementations/PostgreUserRepository";
import UpdateUserController from "./UpdateUserController";
import UpdateUserUseCase from "./UpdateUserUseCase";

const userRespository = new PostgreUserRepository()

const updateUserUseCase = new UpdateUserUseCase(
  userRespository
)

const updateUserController = new UpdateUserController(
  updateUserUseCase
)

export { updateUserController, updateUserUseCase }