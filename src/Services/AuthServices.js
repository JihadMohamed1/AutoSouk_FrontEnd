import axios from "./http_common"
async function AuthUser(data)
{
    console.log("send request=>",data);
    
    const res =  await axios.post("/api/auth/signin",data)
    console.log("respons=>",res.data);
    
    return res;
}

export default {AuthUser}