import axios from "axios";
import { loadingOff, loadingOn } from "../components/loading";

axios.interceptors.request.use(
  async (request) => {
    loadingOn();
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  async (response) => {
    loadingOff();
    return response;
  },
  (error) => {
    loadingOff();
    return Promise.reject(error);
  }
);
