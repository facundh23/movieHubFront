/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line @typescript-eslint/no-explicit-any

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
