import UserEntitie from "../entities/UserEntitie";

interface IUsersRepository{
    findById(id: number): Promise<UserEntitie>
    findByEmail(email: string): Promise<UserEntitie>
    create(user: UserEntitie): void
    removeById(id: number): Promise<void>
    updateUser(user: UserEntitie, id: number): Promise<void>
}

export default IUsersRepository