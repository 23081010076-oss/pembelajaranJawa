import { useEffect, useState } from 'react';
import { getStudentStorageKey } from './useStudentName.js';

function readLocalStorageValue(key, initialValue, legacyKey) {
  try {
    const item = window.localStorage.getItem(key);
    if (item) return JSON.parse(item);

    if (legacyKey && legacyKey !== key) {
      const migrationKey = `javanesia-storage-migrated:${legacyKey}`;
      const migrationDone = window.localStorage.getItem(migrationKey);
      const legacyItem = migrationDone ? null : window.localStorage.getItem(legacyKey);

      if (legacyItem) {
        window.localStorage.setItem(key, legacyItem);
        window.localStorage.setItem(migrationKey, key);
        return JSON.parse(legacyItem);
      }
    }

    return initialValue;
  } catch {
    return initialValue;
  }
}

export function useLocalStorage(key, initialValue, options = {}) {
  const { legacyKey } = options;
  const [storedValue, setStoredValue] = useState(() => readLocalStorageValue(key, initialValue, legacyKey));

  useEffect(() => {
    setStoredValue(readLocalStorageValue(key, initialValue, legacyKey));
  }, [key, legacyKey]);

  const setValue = (value) => {
    try {
      setStoredValue((currentValue) => {
        const valueToStore = value instanceof Function ? value(currentValue) : value;
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
        return valueToStore;
      });
    } catch {
      // Abaikan jika storage browser tidak tersedia atau quota penuh.
    }
  };

  return [storedValue, setValue];
}

export function useStudentLocalStorage(baseKey, initialValue) {
  const scopedKey = getStudentStorageKey(baseKey);
  return useLocalStorage(scopedKey, initialValue, { legacyKey: baseKey });
}
