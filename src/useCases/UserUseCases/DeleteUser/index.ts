import PostgreUserRepository from "../../../repository/implementations/PostgreUserRepository";
import PostgreRepository from "../../../repository/implementations/PostgreUserRepository";
import DeleteUserController from "./DeleteUserController";
import DeleteUserUseCase from "./DeleteUserUseCase";

const userRespository = new PostgreUserRepository()

const deleteUserUseCase = new DeleteUserUseCase(
  userRespository
)

const deleteUserController = new DeleteUserController(
  deleteUserUseCase
)

export { deleteUserUseCase, deleteUserController }