interface RequestLib {
  get: (path: string, config?) => any;
  post: (path: string, config?) => any;
  request: (config) => any;
}

export const photos = (request: RequestLib) => {
  const getRandom = () => {
    return request.get('/photos/random');
  };

  return {
    getRandom,
  };
};
