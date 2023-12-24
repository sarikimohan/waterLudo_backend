import UsersDao from '../daos/usersDao.js';
import { CRUD } from '../../common/interfaces/crudInterfaces.js'
import { ManageCoins, UserLoginRequestDto, UserWinRequest } from '../dto/UserDto.js';


class UsersService {
    async userLogin(resource: UserLoginRequestDto) {
        return UsersDao.userLogin(resource);
    }

    async manageCoins(resource: ManageCoins){
        return UsersDao.manageCoins(resource)
    }

    async getUserProfile(resource: {userId:string}){
        return UsersDao.getUserProfile(resource)
    }

    async userWin(resource: UserWinRequest){
        return UsersDao.userWin(resource)
    }

    
}

export default new UsersService();