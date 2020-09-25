import UserEntitie from "../../../entities/UserEntitie";
import IUsersRepository from "../../../repository/IUsersRepository";

class ListUserUseCase {

  constructor(
    private userRepository: IUsersRepository
  ) { }

  async execute(id: number): Promise<UserEntitie> {

    if(!id) {
      throw new Error('Id is Not Defined')
    }

    return await this.userRepository.findById(id)

  }
}

export default ListUserUseCase