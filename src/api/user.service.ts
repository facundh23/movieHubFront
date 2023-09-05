import { GetTokenSilentlyVerboseResponse } from "@auth0/auth0-spa-js";
interface User {
  id: string;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  movies: Movie[];
}

interface Movie {
  filter(arg0: (user: User) => boolean): undefined;
  title: string;
  year: string;
  score: string;
  genres: string;
  poster_image: string;
}

export const getUserId = async (data: Movie, currentUser: undefined) => {
  const user = data.filter((user: User) => user.email === currentUser);
  const userId = user[0]?.id;
  return userId;
};

export const getAllUsers = async (url: string) => {
  try {
    const userId = await fetch(url);
    const data = await userId.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const postUser = async (data: User, getToken: any) => {
  const { VITE_API_URL: url } = import.meta.env;
  const token = await getToken();

  await fetch(`${url}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
};
