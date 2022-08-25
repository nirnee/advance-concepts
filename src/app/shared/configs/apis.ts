let baseAPI = 'https://ai-lab-backend.herokuapp.com/api/';
export default{
    auth: {
        login: baseAPI + 'v1/auth/login',
        signup: baseAPI+ 'v1/auth/signup'
    },
    admin: {  
        faq: baseAPI + 'v1/admin/faq',
        bots: baseAPI + 'v1/admin/bot'
    }
}

let userData: any = localStorage.getItem("userData");
let token = 'Bearer ' + JSON.parse(userData)?.['access_token'];
export const header = {
            'accept': '*/*',
            'Authorization': token,
            'Content-Type': 'application/json'
        } 