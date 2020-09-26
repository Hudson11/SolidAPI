import { Request, Response } from "express";
import LoginUserUseCase from "./LoginUserUseCase";

class LoginUserController {

  constructor(
    private loginUserUseCase: LoginUserUseCase
  ){ }

  async handle(request: Request, response: Response): Promise<Response> {
    
    const { email, password } = request.body

    const error = []

    if(!email) {
      error.push({ message: 'Email is Not Defined' })
    }
    if(!password) {
      error.push({ message: 'Password is Not Defined' })
    }

    if(error.length > 0) {
      return response.status(400).json(error)
    }

    try {
      const loginResponse = await this.loginUserUseCase.execute({
        email: email,
        password: password
      })
      return response.status(200).json(loginResponse)
    } catch (err) {
      return response.status(400).json({ err: err.message })
    }

  }

}

export default LoginUserController
