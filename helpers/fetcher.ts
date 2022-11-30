const fetcher = (url: string) =>
  fetch(url).then(async (res) => {
    if (!res.ok) {
      const error = new Error("Bad Request");
      error.cause = await res.json();
      throw error;
    }
    return res.json();
  });

export default fetcher;
