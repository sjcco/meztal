import { useState} from "react";

const useStorage = (key: string) => {
  const [storedValue, setStoredValue] = useState<string>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.log(error);
      return null;
    }
  });
  const setValue = (value: string | ((val: string) => string)) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      // todo handle errors
      console.warn(error);
    }
  };
  //todo useeffect for changes to localstorage
  return [storedValue, setValue] as const;
}
 
export default useStorage;