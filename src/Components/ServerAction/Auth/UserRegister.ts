"use server";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";

export const UserRegister = async (pre: FormData, formData: FormData) => {
  try {
    const newFormData = JSON.stringify(Object.fromEntries(formData));
    const res = await fetch("http://localhost:5000/api/v1/auth/register", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: newFormData,
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("An error occurred during registration:", error);
    throw error;
  }
};
export const UserLogin = async (pre: FormData, formData: FormData) => {
  try {
    const newFormData = JSON.stringify(Object.fromEntries(formData));
    console.log(newFormData);
    const res = await fetch("http://localhost:5000/api/v1/auth/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: newFormData,
    });
    const data = await res.json();
    if (data?.success) {
      cookies().set("accessToken", data?.data?.accessToken);
      cookies().set("refreshToken", data?.data?.refreshToken);
    }
    return data;
  } catch (error) {
    console.error("An error occurred during registration:", error);
    throw error;
  }
};
export const UserInformation = async () => {
  try {
    const accessToken = cookies().get("accessToken")?.value;
    let decodedData = null;
    if (accessToken) {
      decodedData = jwtDecode(accessToken) as any;
    }
    return decodedData;
  } catch (error) {
    console.error("An error occurred during registration:", error);
    throw error;
  }
};
