import { UserDatabase } from "../database/UserDatabase"
import { SignupInputDTO, SignupOutputDTO } from "../dtos/userDTO";
import { BadRequestError } from "../errors/BadRequestError";
import { User } from "../models/User";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import { TokenManager } from "../services/TokenManager";

export class UserBusiness {
    constructor(
        private userDatabase: UserDatabase,
        private idGenerator: IdGenerator,
        private tokenManager: TokenManager,
        private hashManager: HashManager
    ) {}

    public signup = async (input: SignupInputDTO): Promise<SignupOutputDTO>=>{
        const {name, email,password}= input
        
        if(typeof name !== "string"){
            throw new BadRequestError("'nome' deve ser uma string")
        }
        if(typeof email !== "string"){
            throw new BadRequestError("'email' deve ser uma string")
        }
        if(typeof password !== "string"){
            throw new BadRequestError("'password' deve ser uma string")
        }
        const newUser = new User()
    }
}