export const materiList = [
  {
    title: 'Tegese Parikan',
    short: 'Pangerten dhasar babagan parikan.',
    body:
      'Parikan yaiku unen-unen tradhisional Jawa sing dumadi saka rong gatra utawa patang gatra lan nggunakake purwakanthi guru swara. Parikan dumadi saka rong bagean yaiku purwaka (sampiran) lan wos (isi).',
    example: 'Wajik klethik gula Jawa, becik sethithik luwih utama.',
    audioSrc: '/assets/sounds/Teegese Parikan.mp3',
    enrichment: {
      keyPoints: [
        'Parikan kalebu unen-unen Jawa sing cekak lan gampang dielingi.',
        'Parikan biasane nduweni gegayutan swara ing pungkasan tembung.',
        'Parikan ora mung kanggo guyonan, nanging uga bisa ngemot pitutur.',
      ],
      analysis: [
        { label: 'Sampiran', text: 'Wajik klethik gula Jawa' },
        { label: 'Isi', text: 'becik sethithik luwih utama' },
        { label: 'Purwakanthi', text: 'Swara pungkasan padha-padha muni "a".' },
        { label: 'Pesen', text: 'Tumindak becik, sanajan sethithik, tetep luwih utama.' },
      ],
      note: 'Nalika maca parikan, gatekna swara pungkasan lan pesen sing arep diwenehake.',
    },
    stimulus: {
      image: '/assets/Komik/Comic_Materi1.png',
      bubbles: [
        {
          speaker: 'Dimas',
          text: 'Rara, parikan kuwi mung pantun nganggo basa Jawa ta?',
          bubbleStyle: { left: '24%', top: '7%', width: '35%' },
        },
        {
          speaker: 'Rara',
          text: 'Ayo digoleki bareng. Parikan nduweni swara, sampiran, lan isi.',
          bubbleStyle: { left: '53%', top: '4%', width: '34%' },
        },
      ],
      question: 'Sadurunge mlebu materi, coba tebak: apa sing nggawe parikan enak dirungokake?',
    },
  },
  {
    title: 'Ciri-ciri Parikan',
    short: 'Tandha-tandha utama parikan.',
    body: {
      intro: 'Ciri-ciri Parikan:',
      points: [
        'Dumadi saka rong utawa patang gatra.',
        'Ana purwaka lan wos.',
        'Nganggo purwakanthi guru swara.',
        'Isine bisa pitutur, guyon, utawa sindiran.',
      ],
    },
    example: 'Ana pasar tuku tela, aja kasar marang kanca.',
    audioSrc: '/assets/sounds/Titikan Parikan.mp3',
    enrichment: {
      keyPoints: [
        'Titikane parikan bisa katon saka swara pungkasan sing selaras.',
        'Ukara ing parikan biasane ringkes supaya gampang diucapake.',
        'Isi parikan bisa awujud pitutur, guyonan, utawa sindiran alus.',
      ],
      analysis: [
        { label: 'Tandha Swara', text: 'Tela lan kanca padha-padha dipungkasi swara "a".' },
        { label: 'Tandha Isi', text: 'Ukara kapindho ngemot pitutur supaya ora kasar marang kanca.' },
        { label: 'Tandha Basa', text: 'Tembunge prasaja lan gampang dingerteni siswa.' },
      ],
      note: 'Aja mung nggoleki ukara sing lucu. Parikan kudu tetep duwe swara lan maksud sing cetha.',
    },
    stimulus: {
      image: '/assets/Komik/Comic_Materi2.png',
      bubbles: [
        {
          speaker: 'Dimas',
          text: 'Kok ana ukara sing kaya parikan, nanging rasane durung pas?',
          bubbleStyle: { left: '22%', top: '8%', width: '32%' },
        },
        {
          speaker: 'Rara',
          text: 'Amarga parikan duwe ciri. Swara pungkasan lan isi kudu trep.',
          bubbleStyle: { left: '58%', top: '4%', width: '32%' },
        },
      ],
      question: 'Miturutmu, ciri apa sing paling gampang dingerteni saka parikan?',
    },
  },
  {
    title: 'Struktur Parikan',
    short: 'Sampiran lan isi.',
    body: {
      intro: 'Struktur parikan umum yoiku baris wiwitan minangka sampiran, dene baris pungkasan minangka isi utawa pesen. Sampiran ngatur swara, isi nggawa makna.',
      example: {
        label: '📜 Tuladha',
        text: 'Nandur pari pinggir kali, sregep sinau dadi pinter.',
      },
      points: [
        'Struktur parikan ngemot sampiran lan isi.',
        'Sampiran biasane wiwitan kanggo mbangun suworo.',
        'Isi ngemot maksud, pitutur, utowo pesen utomo.',
      ],
    },
    example: 'Nandur pari pinggir kali, sregep sinau dadi pinter.',
    audioSrc: '/assets/sounds/Struktur Parikan.mp3',
    enrichment: {
      keyPoints: [
        'Struktur parikan ngemot sampiran lan isi.',
        'Sampiran biasane ana ing wiwitan kanggo mbangun swara.',
        'Isi ngemot maksud, pitutur, utawa pesen utama.',
      ],
      analysis: [
        { label: 'Sampiran', text: 'Nandur pari pinggir kali' },
        { label: 'Isi', text: 'sregep sinau dadi pinter' },
        { label: 'Pesen', text: 'Siswa diajak sregep sinau supaya dadi pinter.' },
        { label: 'Fokus Materi', text: 'Tuladha iki digunakake kanggo mbedakake posisi sampiran lan isi.' },
      ],
      note: 'Yen nemokake parikan, coba takon: baris endi sing mung pambuka swara, lan baris endi sing nggawa pesen?',
    },
    stimulus: {
      image: '/assets/Komik/Comic_Materi3.png',
      bubbles: [
        {
          speaker: 'Dimas',
          text: 'Aku wis nggawe parikan, nanging barise kok isih campur aduk?',
          bubbleStyle: { left: '20%', top: '9%', width: '33%' },
        },
        {
          speaker: 'Rara',
          text: 'Coba pisahna dhisik: endi sampiran, endi isi utawa pesene.',
          bubbleStyle: { left: '64%', top: '24%', width: '27%' },
        },
      ],
      question: 'Yen ana papat baris, kira-kira baris endi sing dadi isi?',
    },
  },
  {
    title: 'Wangun Parikan',
    short: 'Ragam wujud parikan.',
    body: {
      intro: 'Miturut Padmosoekotjo ana telung wangun:',
      points: [
        '(4 wanda + 4 wanda) × 2',
        '(4 wanda + 8 wanda) × 2',
        '(8 wanda + 8 wanda) × 2',
      ],
    },
    example: 'Kembang mlathi arum wangi, ngudi ilmu saben dina.',
    audioSrc: '/assets/sounds/Jenis Parikan.mp3',
    enrichment: {
      keyPoints: [
        'Parikan bisa dibedakake saka cacah gatra utawa jumlah baris.',
        'Parikan uga bisa dibedakake saka tujuane, kayata pitutur, guyonan, utawa sindiran.',
        'Jenis parikan mbantu siswa milih wujud sing trep karo pesen.',
      ],
      analysis: [
        { label: 'Wujud', text: 'Tuladha iki kalebu parikan rong gatra amarga dumadi saka rong baris.' },
        { label: 'Tujuan', text: 'Isine luwih cedhak karo parikan pitutur.' },
        { label: 'Pesen', text: 'Siswa diajak ngudi ilmu saben dina.' },
      ],
      note: 'Nalika nemtokake jenis parikan, delengen jumlah baris lan maksud ukarane.',
    },
    stimulus: {
      image: '/assets/Komik/Comic_Materi4.png',
      bubbles: [
        {
          speaker: 'Dimas',
          text: 'Lho, parikan kuwi ana sing rong baris lan ana sing papat baris?',
          bubbleStyle: { left: '21%', top: '9%', width: '32%' },
        },
        {
          speaker: 'Rara',
          text: 'Iya. Jinise bisa dideleng saka gatra, tema, lan tujuane.',
          bubbleStyle: { left: '63%', top: '24%', width: '28%' },
        },
      ],
      question: 'Parikan sing cocok kanggo menehi pitutur marang kanca kira-kira kalebu jenis apa?',
    },
  },
  {
    title: 'Jula-Juli Suroboyo',
    short: 'Kidungan khas ludruk lan budaya arek Surabaya.',
    eyebrow: 'Materi Khas Surabaya',
    featured: true,
    tags: ['Ludruk', 'Kidungan', 'Budaya Surabaya'],
    preview: 'Kidungan Jula-Juli ngemu parikan, guyonan, pitutur, lan purwakanthi guru swara.',
    body: {
      intro:
        'Sawijining kesenian rakyat asli saka tlatah Jawa Timur yaiku ludruk. Ludruk uga ngrembaka ing tlatah Surabaya. Kesenian iki awujud drama kang dipentasake dening saperangan pawongan, umume kagabung ing sanggar kesenian.',
      sections: [
        {
          title: 'Crita Ludruk',
          text:
            'Crita sing dipentasake umume dijupuk saka crita masarakat saben dina, basane gampang dimangerti lan diselingi guyonan uga gerak sing bisa nggawe guyune wong sing nonton.',
        },
        {
          title: 'Unsur Pementasan Ludruk',
          text:
            'Ludruk minangka kesenian teater rakyat Surabaya sing isih kerep dipentasake lan tetep madeg. Ing pementasan ludruk ana unsur-unsur pementasane wiwit saka tari remo, kidungan (jula-juli), dagelan, lan cerita utawa lakon.',
        },
        {
          title: 'Jula-Juli lan Kartolo',
          text:
            'Jula-juli minangka salah sijine musik tradisional saka Jawa Timur sing nganti saiki isih tetep lestari. Salah sijine seniman Jawa Timur sing terkenal ing jamane ana Kartolo. Masarakat Surabaya mesti kenal karo tokoh seniman kasebut.',
        },
        {
          title: 'Ciri Kidungan Jula-Juli',
          text:
            'Lirik saka kidungan jula-juli nggunakake basa Jawa kanthi tujuan aweh panglipuran. Wujude kidungan lan jula-juli yaiku parikan, sing nengenake purwakanthi guru swara supaya endah. Nalika nembangake kidungan lan jula-juli nggunakake logat lan lirik sing lucu uga mbayol saengga bisa ngundang guyune para penonton. Iringane pentas kidungan jula-juli nggunakake gamelan khas ludruk.',
        },
      ],
    },
    audioSrc: '/assets/sounds/Jula-Juli.mp3',
    stimulus: false,
  },
  {
    title: 'Panganggone Ukara Ing Parikan',
    short: 'Fungsi purwaka lan wos.',
    body:
      'Gunane ukara purwaka/sampiran yaiku kanggo narik kawigatene wong sing arep dikandhani utawa wong sing maca parikan. Sawise wong mau ketarik atine utawa penasaran mula banjur nggatekake marang wos utawa isine parikan.',
    example: 'Tuku jamu rasane pait, sinau tekun urip dadi becik.',
    audioSrc: '/assets/sounds/Paedah Parikan.mp3',
    enrichment: {
      keyPoints: [
        'Ukara parikan becike cekak lan ora mubeng-mubeng.',
        'Tembung sing dipilih kudu cetha supaya pesene gampang dingerteni.',
        'Swara pungkasan perlu digatekake supaya parikan katon luwih runtut.',
      ],
      analysis: [
        { label: 'Ukara Sampiran', text: 'Tuku jamu rasane pait' },
        { label: 'Ukara Isi', text: 'sinau tekun urip dadi becik' },
        { label: 'Pesen', text: 'Sinau kanthi tekun bisa nuntun urip dadi luwih becik.' },
      ],
      note: 'Yen ukarane kakehan tembung, parikan dadi angel diwaca lan swarane ora kepenak.',
    },
    stimulus: {
      image: '/assets/Komik/Comic_Materi6.png',
      bubbles: [
        {
          speaker: 'Dimas',
          text: 'Yen tembunge dawa banget, parikanku dadi angel diwaca.',
          bubbleStyle: { left: '21%', top: '4%', width: '32%' },
        },
        {
          speaker: 'Rara',
          text: 'Mula ukarane kudu cekak, cetha, lan swarane mathuk.',
          bubbleStyle: { left: '55%', top: '-15%', width: '33%' },
        },
      ],
      question: 'Ukara kaya apa sing luwih cocok kanggo parikan: dawa banget utawa ringkes?',
    },
  },
  {
    title: 'Cara Ngrakit Parikan',
    short: 'Langkah gawe parikan.',
    body: {
      intro: 'Carane ngrakit parikan yaiku sing dikarang dhisik wos utawa isine parikan, banjur lagi nggawe ukara purwaka sing narik kawigaten. Sajrone ngakit parikan akeh pilihan tembung sing bisa digunakna. Tembung pilihan sing digunakna bisa nganggo dasanama lan kosok balen.',
      examples: [
        {
          title: '1. Parikan sing dumadi rong gatra',
          lines: [
            'Tawon madu ngisep sekar',
            'Golek ilmu kudu sabar',
          ],
          explanation: 'Tawon madu ngisep sekar kalebu purwaka utawa sampiran. Golek ilmu kudu sabar kalebu wos utawa isi.',
          note: 'Yen nggunakake dasanama, tembung sekar bisa diganti tembung kembang, amarga kembang kuwi padha tegese karo sekar. Sawalike yen nggunakake tembung kosok balen tembung sabar bisa diganti karo tembung nesu. Nanging kudu tetep sesambungan lan nduwe guru swara sing padha.',
        },
        {
          title: '2. Parikan sing dumadi patang gatra',
          lines: [
            'Sirup kawis wadhah kaca, (ukara purwaka/sampiran)',
            'Kaca pecah muni banter, (ukara purwaka/sampiran)',
            'Yen sregep nulis lan maca, (wos/isi)',
            'Iku tandha bocah pinter, (wos/isi)',
          ],
        },
      ],
    },
    example: 'Tawon madu ngisep sekar, Golek ilmu kudu sabar.',
    audioSrc: '/assets/sounds/Cara Ngrakit Parikan.mp3',
    enrichment: {
      keyPoints: [
        'Gawe parikan luwih gampang yen pesene ditemtokake dhisik.',
        'Tembung kunci mbantu siswa njaga isi parikan supaya ora metu saka tema.',
        'Sampiran dipilih supaya swarane cocog karo isi.',
      ],
      analysis: [
        { label: 'Langkah 1', text: 'Tentukan pesen utawa isi sing arep disampekake.' },
        { label: 'Langkah 2', text: 'Pilih tembung kunci sing cocog karo tema.' },
        { label: 'Langkah 3', text: 'Goleki sampiran sing swarane selaras.' },
        { label: 'Langkah 4', text: 'Rapekna gatra, irama, lan pilihan tembung.' },
      ],
      note: 'Aja miwiti saka sampiran wae. Yen pesene durung jelas, parikan bisa katon ora nyambung.',
    },
    stimulus: {
      image: '/assets/Komik/Comic_Materi7.png',
      bubbles: [
        {
          speaker: 'Dimas',
          text: 'Aku pengin nggawe parikan, nanging kudu miwiti saka endi?',
          bubbleStyle: { left: '25%', top: '7%', width: '32%' },
        },
        {
          speaker: 'Rara',
          text: 'Wiwitana saka pesen. Banjur goleki tembung sing swarane cocok.',
          bubbleStyle: { left: '56%', top: '18%', width: '32%' },
        },
      ],
      question: 'Yen arep ngrakit parikan, apa sing luwih becik ditemtokake dhisik?',
    },
  },
];
