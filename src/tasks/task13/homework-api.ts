import axios from 'axios'

export const requestAPI = {
    postData(success:boolean) {
        const promise = axios.post( 'https://neko-cafe-back.herokuapp.com/auth/test',{success: success});
        return promise;
    },
}
