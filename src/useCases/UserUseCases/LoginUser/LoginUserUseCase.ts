import IUsersRepository from "../../../repository/IUsersRepository";
import LoginDTO from "./LoginDTO";
import bcrypt from 'bcrypt';
import jsonwebtoken from 'jsonwebtoken';
import 'dotenv/config';

class LoginUserUseCase {

  constructor(
    private userRepository: IUsersRepository
  ) { }

  async execute(loginDTO: LoginDTO): Promise<LoginResponse> {

    const user = await this.userRepository.findByEmail(loginDTO.email)

    if(!user) {
      throw new Error('User Not Found')
    }

    const passVerify = await bcrypt.compare(loginDTO.password, user.password)

    if(!passVerify) {
      throw new Error('Password Error')
    }
    
    const token = jsonwebtoken.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: 86400 })

    const response = {
      status: true,
      message: 'User Authenticated',
      token: token,
    }

    return response
  }

}

export default LoginUserUseCase
