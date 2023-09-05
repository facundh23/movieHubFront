import { GetTokenSilentlyVerboseResponse } from "@auth0/auth0-spa-js";
interface Movie {
  title: string;
  year: string;
  score: string;
  genres: string;
  poster_image: string;
}

export const getAllMovies = async (url: string) => {
  try {
    const movies = await fetch(url);
    const data = await movies.json();
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

export const getMoviesByEmail = async (url: string, getToken: any) => {
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

export const createMovie = async (url: string, data: Movie, getToken: any) => {
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

export const updateMovie = async (
  url: string,
  data: Movie,
  getToken: () => Promise<GetTokenSilentlyVerboseResponse | undefined>
) => {
  try {
    const token = await getToken();

    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("score", data.score);
    formData.append("year", data.year);

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
