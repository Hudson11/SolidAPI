import UserEntitie from "../../entities/UserEntitie";
import IUsersRepository from "../IUsersRepository";
import { getRepository, Repository } from 'typeorm'

class PostgreUserRepository implements IUsersRepository {

	private repository: Repository<UserEntitie>

	async findById(id: number): Promise<UserEntitie> {
		this.repository = getRepository(UserEntitie)

		return await this.repository.findOne(id)
	}

	async create(user: UserEntitie): Promise<void> {
		this.repository = getRepository(UserEntitie)

		await this.repository.save(user)
	}

	async findByEmail(email: string): Promise<UserEntitie> {
		this.repository = getRepository(UserEntitie)

		return await this.repository.findOne({ email: email })
	}

	async removeById(id: number): Promise<void> {
		this.repository = getRepository(UserEntitie)
		
		await this.repository.delete({ id: id })
	}

	async updateUser(user: UserEntitie, id: number): Promise<void> {
		this.repository = getRepository(UserEntitie)

		await this.repository.update({ id: id }, user)
	}

}

export default PostgreUserRepository