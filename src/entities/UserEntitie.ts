import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'user', schema: 'public' })
class UserEntitie {

	@PrimaryGeneratedColumn()
	public readonly id: number

	@Column({ length: 80 })
	public name: string

	@Column({ unique: true })
	public email: string

	@Column({ length: 80, update: true })
	public password: string

	constructor(props: Omit<UserEntitie, 'id'>, id?: number) {
		Object.assign(this, props)
	}
}

export default UserEntitie