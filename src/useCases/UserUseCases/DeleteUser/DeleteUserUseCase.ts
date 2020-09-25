import IUsersRepository from "../../../repository/IUsersRepository";

class DeleteUserUseCase {

  constructor(
    private userRepository: IUsersRepository
  ) { }

  async execute(id: number): Promise<void> {

    if(!id) {
      throw new Error('Id is not Defined')
    }

    await this.userRepository.removeById(id)

  }

}

export default DeleteUserUseCase