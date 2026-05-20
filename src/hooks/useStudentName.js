/**
 * useStudentName — hook untuk mengelola nama siswa yang login.
 * Nama disimpan di localStorage agar tetap ada setelah refresh.
 */

const STORAGE_KEY = 'javanesia-student-name';
const CLASS_STORAGE_KEY = 'javanesia-student-class';
const ABSEN_STORAGE_KEY = 'javanesia-student-absen';

export function getStudentName() {
  try {
    return localStorage.getItem(STORAGE_KEY) || null;
  } catch {
    return null;
  }
}

export function getStudentClass() {
  try {
    return localStorage.getItem(CLASS_STORAGE_KEY) || null;
  } catch {
    return null;
  }
}

export function getStudentAbsen() {
  try {
    return localStorage.getItem(ABSEN_STORAGE_KEY) || null;
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

export function setStudentProfile({ name, studentClass, absen }) {
  try {
    if (name && name.trim()) {
      localStorage.setItem(STORAGE_KEY, name.trim());
    }

    if (studentClass && studentClass.trim()) {
      localStorage.setItem(CLASS_STORAGE_KEY, studentClass.trim());
    }

    if (absen && absen.trim()) {
      localStorage.setItem(ABSEN_STORAGE_KEY, absen.trim());
    }
  } catch {
    /* ignore */
  }
}

export function clearStudentName() {
  try {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(CLASS_STORAGE_KEY);
    localStorage.removeItem(ABSEN_STORAGE_KEY);
  } catch {
    /* ignore */
  }
}
