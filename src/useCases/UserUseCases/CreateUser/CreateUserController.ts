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

		const erros = []

		if(!name) {
			erros.push({ message: 'Name is Not Defined' })
		}
		if(!email) {
			erros.push({ message: 'Email is Not Defined' })
		}
		if(!password) {
			erros.push({ message: 'Password is Not Defined' })
		}

		if(erros.length > 0){
			return response.status(400).json(erros)
		}

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