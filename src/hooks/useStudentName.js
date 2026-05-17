/**
 * useStudentName — hook untuk mengelola nama siswa yang login.
 * Nama disimpan di localStorage agar tetap ada setelah refresh.
 */

const STORAGE_KEY = 'javanesia-student-name';

export function getStudentName() {
  try {
    return localStorage.getItem(STORAGE_KEY) || null;
  } catch {
    return null;
  }
}

export function setStudentName(name) {
  try {
    if (name && name.trim()) {
      localStorage.setItem(STORAGE_KEY, name.trim());
    }
  } catch {
    /* ignore */
  }
}

export function clearStudentName() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    /* ignore */
  }
}
