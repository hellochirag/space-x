/**
 * Using this method we can get the local storage value using the KEY Name
 * @param {*} key The Key Name
 * @returns the Object of local storage
 */
export const getItemFromStorage = (key) => {
  const item = window.localStorage.getItem(key);
  return item ? JSON.parse(item) : null;
};

/**
 * This method will set the value into local storage using Key and Value
 * @param {*} key The Key Name of local storage
 * @param {*} value The value linked with Key
 */
export const setItemInStorage = (key, value) => {
  window.localStorage.setItem(key, JSON.stringify(value));
};

/**
 * This method will removed the local storage data using the KEY name
 * @param {*} key The Key Name
 */
export const removeItemFromStorage = (key) => {
  window.localStorage.removeItem(key);
};
