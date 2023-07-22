import axios from "axios";

const Satellite = axios.create({
    timeout: 10000,

})

// Satellite.interceptors.response.use(
//     (res) => {
//         console.log("Sukses Satellite", JSON.stringify(res, null,2));
//         return res
//     },
//     (err) => {
//         console.log("Gagal Satellite", JSON.stringify(err, null,2));
//     }
// )

export default Satellite