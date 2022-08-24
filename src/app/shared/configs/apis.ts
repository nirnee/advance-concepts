let baseAPI = 'https://ai-lab-backend.herokuapp.com/api/';
export default{
    auth: {
        login: baseAPI + 'v1/auth/login',
        signup: baseAPI+ 'v1/auth/signup'
    }
}