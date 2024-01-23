import { useEffect, useState } from "react";
import { getStorage, setStorage } from "../utils/storage";


export const useStorage = (key) => {
  const [storedData, setStoredData] = useState(getStorage(key));

  useEffect(() => {
    setStorage(key, storedData);
  }, [key, storedData]);

  return [storedData, setStoredData];
}