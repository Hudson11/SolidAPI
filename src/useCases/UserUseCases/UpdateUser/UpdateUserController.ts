import { Request, Response } from "express";
import UpdateUserUseCase from "./UpdateUserUseCase";

class UpdateUserController {

  constructor(
    private updateUserUseCase: UpdateUserUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { email, name, password } = request.body
    const { id } = request.params

    if(!id){
      return response.status(400).json({ message: 'Id is Not Defined' })
    }

    const erros = []

    if(!email) {
      erros.push({ message: 'Email is Not Defined' })
    }
    if(!name) {
      erros.push({ message: 'Name is Not Defined' })
    }
    if(!password) {
      erros.push({ message: 'Password is Not Defined' })
    }

    if(erros.length > 0){
      return response.status(200).json({ erros })
    }

    try {
      await this.updateUserUseCase.execute({
        email: email,
        name: name,
        password: password
      }, parseInt(id))
      return response.status(204).send()
    } catch (err) {
      return response.status(400).json({ err: err.message })
    }
  }

}

export default UpdateUserController