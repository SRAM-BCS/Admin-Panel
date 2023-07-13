import * as axios from "axios";

const apiURL = process.env.BACKEND_URL;

interface ResponseData {
  data: any;
  status: Number;
  message: string;
}

function normalizeServerResponse(serverResponse: any) {
  let response: ResponseData = {
    data: serverResponse.data,
    status: serverResponse.status,
    message: serverResponse.message,
  };

  return response;
}

export async function APICALL(
  name: any,
  email: any,
  password: any,
  mobile: any
) {
  try {
    const axiosConfig: axios.AxiosRequestConfig = {
      method: "post",
      url: `${apiURL}/auth/register`,
      data: {
        name: name,
        email: email,
        password: password,
        mobile: mobile,
      },
    };
    const response = await axios.default.request(axiosConfig);
    console.log(response);
    const normalizedResponse = normalizeServerResponse(response);
    return [null, normalizedResponse];
  } catch (error) {
    // const errorObject = normalizeServerError(error);
    return [error, null];
  }
}
