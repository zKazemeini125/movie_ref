import axios from "axios";

const apiClient= axios.create({
    baseURL:"https://moviesapi.ir/api/v1",
})

export default apiClient;