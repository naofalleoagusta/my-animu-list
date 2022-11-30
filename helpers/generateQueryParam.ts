const generateQueryParam = (param?: Record<string, string>) => {
  if (param) {
    const queryParam = new URLSearchParams(param);
    return `?${queryParam}`;
  }
  return "";
};

export default generateQueryParam;
