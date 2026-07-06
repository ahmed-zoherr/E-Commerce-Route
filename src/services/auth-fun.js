// import axios from "axios";
// import { baseURL } from "../config";
import { apiClient } from "./api-client";

export async function sendDataToSignUp(values) {
  try {
    const option = {
      method: "POST",
      url: `/auth/signup`,
      //? لان هنا هو عارف مسار الاي بي اي ...قصدي علي الاي بي اي كلاينت
      data: {
        name: values.name,
        email: values.email,
        phone: values.phone,
        password: values.password,
        rePassword: values.rePassword,
      },
    };
    const response = await apiClient.request(option);
    // console.log(data);
    return response;
  } catch (error) {
    console.dir(error);
    throw error;
    //? الفكرة ان هنا لو حصل الايرور في الكود التاني بقا الكود مش هيكمل قراية وهترمي في بلوك الكاتش علطول
  }
}
export async function sendDataToLogin(values) {
  try {
    const option = {
      method: "POST",
      url: `/auth/signin`,
      data: {
        email: values.email,
        password: values.password,
      },
    };
    const response = await apiClient.request(option);
    // الريسبونس دا هو اللي احنا مقسمينه في api client
    //* عشان كدا لو رجع سليم هيبقا اسمه ريسبونس ولو رجع غلط هيترمي في الايرور تحت
    return response;
    console.log(data);
  } catch (error) {
    console.log(error);
    throw error;
  }
}
export async function verifyToken() {
  try {
    const options = {
      method: "GET",
      url: "/auth/verifyToken",
    };
    const response = await apiClient.request(options);
    return response;
  } catch (error) {
    throw error;
  }
}
