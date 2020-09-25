import { Request, Response } from "express";
import ListUserUseCase from "./ListUserUseCase";

class ListUserController {

  constructor(
    private listUseCase: ListUserUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params

    if(!id) {
      return response.status(400).json({ message: 'Id is Not Defined' })
    }

    try {
      const user = await this.listUseCase.execute(parseInt(id))
      return response.status(200).json(user)
    } catch (err) {
      return response.status(400).json({err: err.message })
    }
  }

}

export default ListUserController