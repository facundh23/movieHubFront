/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line @typescript-eslint/no-explicit-any

import { GetTokenSilentlyOptions } from "@auth0/auth0-react";
import { GetTokenSilentlyVerboseResponse } from "@auth0/auth0-spa-js";

export const postUser = async (data: any, getToken: any): Promise<void> => {
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

export const getGenres = async (url: string) => {
  try {
    const genres = await fetch(url);
    const data = await genres.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const createMovie = async (url: string, data: any, getToken: any) => {
  try {
    const token = await getToken();
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("year", data.year);
    formData.append("score", data.score);
    formData.append("genres", data.genres);
    formData.append("poster_image", data.poster_image);

    await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getUserId = async (data: any, currentUser: any) => {
  const user = data.filter((user: any) => user.email === currentUser);
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
export const getAllMovies = async (url: string) => {
  try {
    const movies = await fetch(url);
    const data = await movies.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getMoviesByEmail = async (
  url: string,
  getToken: {
    (
      options: GetTokenSilentlyOptions & { detailedResponse: true }
    ): Promise<GetTokenSilentlyVerboseResponse>;
    (options?: GetTokenSilentlyOptions | undefined): Promise<string>;
    (options: GetTokenSilentlyOptions): Promise<
      string | GetTokenSilentlyVerboseResponse
    >;
    (): any;
  }
) => {
  try {
    const token = await getToken();

    const moviesID = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await moviesID.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const deleteMovie = async (url: string, getToken: any) => {
  const token = await getToken();
  try {
    await fetch(url, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateMovie = async (url: string, data: any, getToken: any) => {
  try {
    const token = await getToken();

    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("year", data.year);
    formData.append("score", data.score);
    formData.append("genres", data.genres);
    formData.append("poster_image", data.poster_image);

    await fetch(url, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });
  } catch (error) {
    console.log(error);
  }
};
