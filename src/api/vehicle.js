import axios from "axios";

const getVehicle = id =>
    axios.get(`https://swapi.co/api/starships/${id}/`).then(({ data }) => data);

export { getVehicle };
