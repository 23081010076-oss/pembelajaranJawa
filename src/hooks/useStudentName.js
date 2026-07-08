/**
 * useStudentName — hook untuk mengelola nama siswa yang login.
 * Nama disimpan di localStorage agar tetap ada setelah refresh.
 */

const STORAGE_KEY = 'javanesia-student-name';
const CLASS_STORAGE_KEY = 'javanesia-student-class';
const ABSEN_STORAGE_KEY = 'javanesia-student-absen';

function normalizeStoragePart(value) {
  return String(value ?? '')
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

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

export function getStudentStorageId(profile) {
  const name = normalizeStoragePart(profile?.name ?? getStudentName());
  const studentClass = normalizeStoragePart(profile?.studentClass ?? getStudentClass());
  const absen = normalizeStoragePart(profile?.absen ?? getStudentAbsen());
  const id = [name, studentClass, absen].filter(Boolean).join('__');

  return id || 'guest';
}

export function getStudentStorageKey(baseKey, profile) {
  return `${baseKey}::student::${getStudentStorageId(profile)}`;
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
