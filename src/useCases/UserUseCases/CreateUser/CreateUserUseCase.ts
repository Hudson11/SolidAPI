import UserEntitie from '../../../entities/UserEntitie';
import IUsersRepository from '../../../repository/IUsersRepository'
import ICreateUserDTO from './CreateUserDTO';

class CreateUserUseCase {

    constructor(
        private userRepository: IUsersRepository
    ) { }

    async execute(userDTO: ICreateUserDTO): Promise<void> {

        const userExists = await this.userRepository.findByEmail(userDTO.email)

        if (userExists) {
            throw new Error('Duplicate Email field')
        }

        const user = new UserEntitie(userDTO)

        this.userRepository.create(user)
    }
}

export default CreateUserUseCase