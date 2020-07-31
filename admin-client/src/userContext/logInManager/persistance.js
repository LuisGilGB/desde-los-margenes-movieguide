const LOCAL_STORAGE_KEY = 'desdeLosMargenesApp';
const USER_KEY = 'user';
const USER_TOKEN_KEY = 'userToken';

const parseLocalStorage = () =>
  JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || '{}');

const loadFromLocalStorage = (key) => {
  const { [key]: res } = parseLocalStorage();
  return res;
};

const saveInLocalStorageAs = (key, value) => {
  const config = parseLocalStorage();
  config[key] = value;
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(config));
};

export const loadLSUser = () => loadFromLocalStorage(USER_KEY);
export const saveLSUser = (value) => saveInLocalStorageAs(USER_KEY, value);

export const loadLSUserToken = () => loadFromLocalStorage(USER_TOKEN_KEY);
export const saveLSUserToken = (value) =>
  saveInLocalStorageAs(USER_TOKEN_KEY, value);
