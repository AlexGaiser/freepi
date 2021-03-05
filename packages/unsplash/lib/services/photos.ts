export const photos = (request) => {
  const getRandom = () => {
    return request.get('/photos/random');
  };
  return {
    getRandom,
  };
};
