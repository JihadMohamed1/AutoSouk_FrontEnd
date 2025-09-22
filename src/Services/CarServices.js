import axios from "./http_common";

async function getAllCars() {
    const res = await axios.get("/api/car", {
    withCredentials: true, // browser sends Authorization cookie automatically
  })
    return res.data.Cars;
}

export default { getAllCars}