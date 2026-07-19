// Isi URL setelah ruang ZEP Space / ZEP Quiz sudah dibuat.
// Kalau semua URL masih kosong, panel ZEP tidak akan tampil di halaman siswa.

export const zepGameHub = {
  spaceUrl: '',
  title: 'Petualangan Parikan ing ZEP Space',
  description: 'Mlebu ruang petualangan, temokake pos misi, banjur rampungake tantangan parikan.',
};

export const zepGameLevels = [
  {
    levelId: 1,
    title: 'Sambung Parikan',
    type: 'ZEP Game',
    url: 'https://quiz.zep.us/id/play/gGjrpb',
  },
  {
    levelId: 2,
    title: 'Rakit Parikan',
    type: 'ZEP Game',
    url: 'https://quiz.zep.us/id/play/odJELZ',
  },
  {
    levelId: 3,
    title: 'Pujangga Muda',
    type: 'ZEP Game',
    url: 'https://quiz.zep.us/id/play/odJELL',
  },
];

export const hasZepGameLinks =
  Boolean(zepGameHub.spaceUrl) ||
  zepGameLevels.some((level) => Boolean(level.url));
