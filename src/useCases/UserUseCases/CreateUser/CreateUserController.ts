import { Request, Response } from "express";
import CreateUserUseCase from "./CreateUserUseCase";
import bcrypt from 'bcrypt'

class CreateUserController {

	constructor(
		private createUserUseCase: CreateUserUseCase
	) { }

	public salt = 10

	async handle(request: Request, response: Response): Promise<Response> {
		const { name, email, password } = request.body
		try {
			const bPass = await bcrypt.hash(password, this.salt)
			await this.createUserUseCase.execute({
				name: name,
				email: email,
				password: bPass
			})
		} catch (err) {
			return response.status(400).json({ message: err.message })
		}
		return response.status(201).send()
	}

}

export default CreateUserController