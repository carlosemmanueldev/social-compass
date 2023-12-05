import api from "./main";

export async function login(username: string, password: string) {
    try {
      const response = await api.post('/auth/login', {
        username: username,
        password: password,
      });
      return response;
    } catch (error) {
      return error.response
    }
}

export async function register(name: string, username: string, email: string, password: string, confirmPassword: string, birthdate: string) {
    try {
      const response = await api.post('/auth/register', {
        name: name,
        username: username,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
        birthdate: birthdate,
      });
      return response;
    } catch (error) {
      console.error(error);
    }
}

export async function configBearerToken(token: string) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}