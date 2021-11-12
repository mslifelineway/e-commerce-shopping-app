import axios from "axios";
import { baseUrl } from "../utils/constants";

const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOGE4MzNmMTBlYWUwZTU5NjFiMDA0NiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNjcxNDU4OSwiZXhwIjoxNjM2OTczNzg5fQ._5ZqfIodmew6ziPPFoGMXaK-v_u0uT5_Nbh4mqTKCuc`;

const AxiosInstance = axios.create({
  baseURL: baseUrl,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export default AxiosInstance;
