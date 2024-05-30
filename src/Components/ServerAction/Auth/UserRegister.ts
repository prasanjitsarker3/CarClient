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
