import { Request, Response } from "express";
import DeleteUserUseCase from "./DeleteUserUseCase";

class DeleteUserController {

  constructor(
    private deleteUserUseCase: DeleteUserUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {

    const { id } = request.params

    if(!id) {
      return response.status(400).json({ message: 'Id is Not Defined' })
    }

    try{
      await this.deleteUserUseCase.execute(parseInt(id))
      return response.status(204).send()
    } catch (err) {
      return response.status(400).json({ err: err.message })
    }

  }
}

export default DeleteUserController