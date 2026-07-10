export const evaluasiQuestions = [
  {
    id: 'eval_1',
    question: 'Apa tegese parikan?',
    options: [
      'Unen-unen Jawa kang dumadi saka sampiran lan isi, nduweni rima, lan ngemot pitutur.',
      'Crita rakyat kang ngemot sejarah asal-usul sawijining papan.',
      'Tembang macapat kang kudu ditembangake nganggo irama khusus.',
      'Geguritan kang ditulis bebas tanpa aturan swara pungkasan.',
    ],
    correctIndex: 0,
    explanation:
      'Parikan iku unen-unen utawa unggah-ungguhing basa Jawa kang dumadi saka sampiran (pambuka) lan isi (pesen), sarta nduweni rima (purwakanthi) ing pungkasan gatra.',
  },
  {
    id: 'eval_2',
    question: 'Ing parikan, "purwakanthi guru swara" tegese...',
    options: [
      'Tembung kang dibaleni supaya parikan dadi dawa.',
      'Runtute swara vokal ing pungkasan gatra (rima) antarane sampiran lan isi.',
      'Cacahing tembung ing saben gatra kudu padha.',
      'Ukara kang dipakai kanggo menehi piwulang agama.',
    ],
    correctIndex: 1,
    explanation:
      'Purwakanthi guru swara yaiku runtute swara vokal ing pungkasan gatra. Ing parikan, rima antarane sampiran lan isi (contoh: pola a-a utawa a-b-a-b) ndadekake parikan kepenak dirungokake lan gampang dielingi.',
  },
  {
    id: 'eval_3',
    question:
      'Ing parikan rong gatra, baris kapisan diarani sampiran. Apa fungsi sampiran kasebut?',
    options: [
      'Nyampekake pesen utawa pitutur utama.',
      'Minangka pambuka kang nduweni rima karo isi, nanging durung ngemot pesen nyata.',
      'Minangka rangkuman saka isi parikan.',
      'Minangka judul kang ditulis ing ndhuwur parikan.',
    ],
    correctIndex: 1,
    explanation:
      'Sampiran yaiku baris pambuka ing parikan kang gunane kanggo nyiapake rima, nanging isine durung nyata/ora langsung nyampekake pesen. Pesen utama ana ing bagian isi.',
  },
  {
    id: 'eval_4',
    question: 'Parikan "Nandur pari pinggir kali, Sregep sinau dadi pinter." — Apa isi (pesen) saka parikan kasebut?',
    options: [
      'Supaya seneng nandur pari ing pinggir kali.',
      'Supaya akeh uwong kang urip cedhak kali.',
      'Supaya sregep sinau supaya bisa dadi pinter.',
      'Supaya siswa melu kegiatan ing sawah.',
    ],
    correctIndex: 2,
    explanation:
      '"Nandur pari pinggir kali" iku sampiran (pambuka) sing nduweni rima -i karo "pinter". Dene "Sregep sinau dadi pinter" iku isi, yaiku pesen supaya sregep sinau supaya bisa dadi bocah pinter.',
  },
  {
    id: 'eval_5',
    question:
      'Gatekna parikan iki: "Wajik kletik gula jawa, Luwih becik sing prasaja." Apa rima (swara pungkasan) kang nyambungake sampiran lan isi kasebut?',
    options: [
      'Rima swara "-i" (kletik / becik)',
      'Rima swara "-a" (jawa / prasaja)',
      'Rima swara "-ak" (wajik / kletik)',
      'Parikan iki ora nduweni rima.',
    ],
    correctIndex: 1,
    explanation:
      '"Gula jawa" lan "sing prasaja" padha-padha pungkasan ing swara "-a". Rima inilah kang dadi ciri purwakanthi parikan kasebut, dudu "-i" saka tembung "kletik/becik" kang mung rima internal ing sampiran.',
  },
  {
    id: 'eval_6',
    question:
      'Bedane parikan rong gatra lan parikan patang gatra yaiku...',
    options: [
      'Parikan rong gatra kanggo wong tuwa, parikan patang gatra kanggo bocah.',
      'Parikan rong gatra dumadi saka 1 sampiran + 1 isi; parikan patang gatra dumadi saka 2 sampiran + 2 isi.',
      'Parikan rong gatra ora nduweni rima; parikan patang gatra nduweni rima.',
      'Parikan rong gatra ditulis nganggo aksara Jawa; patang gatra nganggo huruf latin.',
    ],
    correctIndex: 1,
    explanation:
      'Parikan rong gatra dumadi saka 2 baris: baris 1 sampiran, baris 2 isi. Parikan patang gatra dumadi saka 4 baris: baris 1–2 sampiran, baris 3–4 isi. Loro-lorone nduweni rima antara sampiran lan isi.',
  },
  {
    id: 'eval_7',
    question:
      'Gatekna parikan patang gatra iki:\n"Esuk-esuk tuku roti,\nRoti legi isi srikaya.\nYen kepengin dadi murti,\nSinau basa lan budaya."\n\nBaris kapisan lan kapindho (tuku roti / isi srikaya) diarani apa?',
    options: [
      'Isi — amarga nduweni teges langsung.',
      'Sampiran — amarga minangka pambuka kang nyiapake rima.',
      'Purwakanthi — amarga nduweni swara kang padha.',
      'Gatra bebas — amarga ora ana aturane.',
    ],
    correctIndex: 1,
    explanation:
      'Baris 1 lan 2 ing parikan patang gatra minangka sampiran, yaiku pambuka kang isine durung nyata. Fungsi utamane nyiapake rima (-ti/-ti lan -ya/-ya) supaya nyambung karo isi ing baris 3–4.',
  },
  {
    id: 'eval_8',
    question:
      'Saka parikan "Esuk-esuk tuku roti / Roti legi isi srikaya / Yen kepengin dadi murti / Sinau basa lan budaya", apa pesen utama (isi) kang arep disampekake?',
    options: [
      'Seneng tuku roti lan jajan ana pasar.',
      'Kudu maca aksara Jawa saben esuk.',
      'Sinau basa lan budaya minangka cara supaya dadi wong kang murti (becik).',
      'Ora kena mangan roti srikaya sadurunge sekolah.',
    ],
    correctIndex: 2,
    explanation:
      'Baris 3–4 "Yen kepengin dadi murti, Sinau basa lan budaya" minangka isi parikan kasebut, yaiku pitutur supaya sinau basa lan budaya minangka cara supaya dadi wong kang mulia (murti).',
  },
  {
    id: 'eval_9',
    question:
      'Ing capaian pembelajaran Fase D, siswa diarepake bisa nulis parikan nggunakake "basa rinengga". Apa tuladha tembung basa rinengga kang trep kanggo isi parikan ngenani semangat sinau?',
    options: [
      '"Mangan sega lan sambel" — tembung keseharian kang bisa kanggo isi parikan.',
      '"Gemi, nastiti, ngati-ati" — unen-unen kang ngemot nilai becik lan cocog kanggo pitutur ing parikan.',
      '"Smartphone karo internet" — tembung modhern kang gampang dimangerteni.',
      '"Wis, ya, oke" — tembung cekak supaya parikan luwih singkat.',
    ],
    correctIndex: 1,
    explanation:
      '"Gemi (hemat), nastiti (teliti), ngati-ati (hati-hati)" iku tuladha basa rinengga — tembung kang nduweni nilai estetika lan ngemot pitutur luhur — kang trep digunakake minangka isi parikan kanggo nyampekake semangat sinau kanthi endah.',
  },
  {
    id: 'eval_10',
    question:
      'Miturut unggah-ungguh basa Jawa, parikan kang ditulis kanggo menehi pitutur marang kanca sakelas kudu nggunakake ragam basa apa?',
    options: [
      'Basa ngoko, amarga parikan biasane ora resmi lan kanggo guyon.',
      'Basa krama inggil kabeh, amarga kudu ngormati saben wong.',
      'Basa ngoko utawa ngoko alus, diselarasake karo swasana lan hubungan antarane panulis lan kang dituju.',
      'Basa Indonesia baku, supaya bisa dimangerteni kabeh siswa.',
    ],
    correctIndex: 2,
    explanation:
      'Unggah-ungguh basa Jawa ngatur panganggone basa miturut sesambungan. Kanggo kanca sakelas (sebaya), basa ngoko utawa ngoko alus wis trep. Basa krama digunakake nalika nulisake pitutur marang wong kang luwih tuwa utawa ing swasana resmi.',
  },
];
