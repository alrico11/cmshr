import axios from "axios";

const Satellite = axios.create({
    baseURL: "https://be-rmy.dev.berijalan.co.id/rest/v1/",
    timeout:10000,
    headers:{
        "Access-Control-Allow-Origin":"*",
        "Content-Type":"Application/Json",
    }
})

Satellite.interceptors.response.use(
    (res) => {
        // console.log("SUCCESS SATELLITE", JSON.stringify(res,null,2));
        return res
    },
    (error)=>{
         console.log(("ERROR SATELLITE", JSON.stringify(error,null,2)));
        return error
    }
)

export default Satellite