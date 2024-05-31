"use server";

import { cookies } from "next/headers";

export const userLogOut = async () => {
  try {
    cookies().delete("accessToken");
    cookies().delete("refreshToken");
  } catch (error) {
    throw error;
  }
};
