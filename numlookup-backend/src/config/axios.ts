import axios from "axios";

export const abstractApi = axios.create({
    baseURL: "https://phoneintelligence.abstractapi.com/v1/",
    timeout: 10000,
});