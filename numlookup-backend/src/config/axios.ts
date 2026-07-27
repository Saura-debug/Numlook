import axios from "axios";

export const abstractApi = axios.create({
    baseURL: "https://phonevalidation.abstractapi.com/v1/",
    timeout: 10000,
});