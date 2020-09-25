import UserEntitie from "../../../entities/UserEntitie";
import IUsersRepository from "../../../repository/IUsersRepository";
import IUpdateUserDTO from "./UpdateUserDTO";

class UpdateUserUseCase {

  constructor(
    private userRepository: IUsersRepository
  ) { }

  async execute(userDTO: IUpdateUserDTO, id: number): Promise<void> {

    const exist = await this.userRepository.findById(id)

    if(!exist) {
      throw new Error('User not Exist')
    }

    if(exist.email !== userDTO.email){
      const emailUser = await this.userRepository.findByEmail(userDTO.email)
      if(emailUser){
        throw new Error('Duplicate Email Field')
      }
    }

    const user = new UserEntitie(userDTO)

    await this.userRepository.updateUser(user, id)
  }

}

export default UpdateUserUseCase