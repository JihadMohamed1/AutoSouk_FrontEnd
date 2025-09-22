import axios from "./http_common"
async function AuthUser(credentials)
{
    
    const res =  await axios.post("/api/auth/signin",credentials, {
    withCredentials: true, // IMPORTANT: allows browser to accept cookie
  })
    
    return res;
}

export default {AuthUser}