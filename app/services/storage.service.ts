export const StorageService = () => {
  const TOKEN_KEY = 'token';

  const removeItem = (key: string) => {
    localStorage.removeItem(key);
  };

  const setItem = (key: string, value: string) => {
    localStorage.setItem(key, value);
  };

  return {
    removeItem,
    setItem,
    keys: {
      TOKEN_KEY,
    },
  };
};
