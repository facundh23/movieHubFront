/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line @typescript-eslint/no-explicit-any

export const getGenres = async (url: string) => {
  try {
    const genres = await fetch(url);
    const data = await genres.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
