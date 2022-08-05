import axios from "axios";
import { BASE_API } from "src/common/constants";

const BASE_URL = BASE_API + '/api/authentication/';

class AuthenticationService{
    login(user){
        return axios.post(BASE_URL + '/sign-in', user);
    }

    register(user){
        return axios.post(BASE_URL + '/sign-up',user);
    }

}

export default new AuthenticationService();