import api from './api';

interface SignUp {
  email: string;
  password: string;
  confirmPassword: string;
}

export async function signUp(payload: SignUp) {
  const response = await api.post("/api/sign-up", payload);
  return response.data;
}

export async function signIn(payload: Omit<SignUp, "confirmPassword">) {
  const response = await api.post("/api/sign-in", payload);
  return response.data;
}

export async function signOut(token: string) {
  const response = await api.delete("/api/sign-out", {
    headers: {
      Authentication: "Bearer " + token
    }
  });
  return response.data;
}

export async function getProfile(token: string) {
  const response = await api.get("/profile", {
    headers: {
      Authentication: "Bearer " + token
    }
  });
  return response.data;
}
