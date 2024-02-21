import axios from "axios";

class UserService {
    
    getUsers(){
        return axios.get("http://localhost:8080/api/users")
    }

    createUser(user){
      return axios.post("http://localhost:8080/api/users",user);
    }
}

const userService = new UserService();
export default userService;