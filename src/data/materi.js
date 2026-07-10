export const materiList = [
  {
    title: 'Tegese Parikan',
    short: 'Pangerten dhasar babagan parikan.',
    body:
      'Parikan yaiku unen-unen Jawa kang nduweni purwakanthi, biasane dumadi saka sampiran lan isi. Parikan kerep digunakake kanggo guyonan, pitutur, utawa nyampekake pesen kanthi cara sing endah.',
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
    title: 'Titikane Parikan',
    short: 'Tandha-tandha utama parikan.',
    body:
      'Parikan nduweni irama, ana gegayutan swara ing pungkasan tembung, lan isine ringkes. Tembung-tembunge biasane prasaja supaya gampang dielingi lan diucapake.',
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
    body:
      'Struktur parikan umum yaiku baris wiwitan minangka sampiran, dene baris pungkasan minangka isi utawa pesen. Sampiran ngatur swara, isi nggawa makna.',
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
    title: 'Jenis Parikan',
    short: 'Ragam wujud parikan.',
    body:
      'Jenis parikan bisa dibedakake miturut cacah gatra, tema, lan tujuane. Ana parikan rong gatra, patang gatra, parikan pitutur, parikan guyonan, lan parikan sindiran alus.',
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
    title: 'Paedah Parikan',
    short: 'Fungsi kanggo urip saben dina.',
    body:
      'Parikan migunani kanggo nglestarekake basa Jawa, nglatih rasa basa, menehi pitutur, lan nggawe pasinaon luwih nyenengake amarga ana unsur irama lan dolanan tembung.',
    example: 'Tuku kupat ning pinggir dalan, eling pepeling aja kesusu tumindak.',
    audioSrc: '/assets/sounds/Paedah Parikan.mp3',
    enrichment: {
      keyPoints: [
        'Parikan bisa dadi sarana menehi pitutur kanthi cara sing luwih menarik.',
        'Parikan nglatih siswa milih tembung Jawa sing trep lan enak dirungokake.',
        'Parikan bisa digunakake kanggo nguri-uri budaya Jawa ing pasinaon.',
      ],
      analysis: [
        { label: 'Paedah Basa', text: 'Tuladha iki nglatih rasa basa liwat swara lan pilihan tembung.' },
        { label: 'Paedah Pitutur', text: 'Isine ngelingake supaya ora kesusu nalika tumindak.' },
        { label: 'Paedah Budaya', text: 'Parikan dadi cara nyampekake pepeling kanthi gaya Jawa.' },
      ],
      note: 'Parikan sing apik ora mung enak diwaca, nanging uga ana paedah utawa pesen kanggo pamaca.',
    },
    stimulus: {
      image: '/assets/Komik/Comic_Materi5.png',
      bubbles: [
        {
          speaker: 'Dimas',
          text: 'Wah, kanca-kanca seneng ngrungokake parikan. Jebule ora mung kanggo guyonan ya?',
          bubbleStyle: { left: '30%', top: '1%', width: '30%' },
        },
        {
          speaker: 'Rara',
          text: 'Bener. Parikan bisa kanggo pitutur, hiburan, lan ngajeni budaya Jawa.',
          bubbleStyle: { left: '56%', top: '8%', width: '33%' },
        },
      ],
      question: 'Apa paedah parikan sing paling kerasa ing urip saben dina?',
    },
  },
  {
    title: 'Panggone Ukara Ing Parikan',
    short: 'Cara nyelehake ukara.',
    body:
      'Ukara ing parikan kudu cekak, cetha, lan trep karo guru swara. Pamilihan tembung kudu njaga gegayutan antarane sampiran lan isi supaya enak diwaca.',
    example: 'Tuku jamu rasane pait, sinau tekun urip dadi becik.',
    audioSrc: '/assets/sounds/Panggone Ukara Ing Parikan.mp3',
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
    body:
      'Miwiti saka nemtokake pesen, banjur goleki tembung sampiran sing swarane cocog. Sawise kuwi rapekna jumlah baris lan iramane supaya parikan katon runtut.',
    example: 'Tulis pesen, pilih tembung kunci, banjur pasang sampiran sing padha swarane.',
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
  {
    title: 'Tuladha Parikan Rong Gatra',
    short: 'Conto loro larik.',
    body:
      'Parikan rong gatra dumadi saka rong baris. Baris kapisan biasane sampiran, baris kapindho isine pesen.',
    example: `Mlaku-mlaku menyang taman,
    sinau sregep dadi nyaman.`,
    audioSrc: '/assets/sounds/Tuladha Parikan Rong Gatra.mp3',
    enrichment: {
      keyPoints: [
        'Parikan rong gatra dumadi saka rong baris.',
        'Baris kapisan biasane dadi sampiran.',
        'Baris kapindho biasane dadi isi utawa pesen.',
      ],
      analysis: [
        { label: 'Baris 1', text: 'Mlaku-mlaku menyang taman' },
        { label: 'Baris 2', text: 'sinau sregep dadi nyaman' },
        { label: 'Pesen', text: 'Siswa diajak sregep sinau supaya uripe luwih nyaman.' },
      ],
      note: 'Ing parikan rong gatra, pesen utama kudu ringkes amarga mung ana siji baris isi.',
    },
    stimulus: {
      image: '/assets/Komik/Comic_Materi8.png',
      bubbles: [
        {
          speaker: 'Dimas',
          text: 'Aku nyoba parikan rong gatra. Baris kapisan kanggo apa?',
          bubbleStyle: { left: '21%', top: '7%', width: '33%' },
        },
        {
          speaker: 'Rara',
          text: 'Baris kapisan dadi sampiran, baris kapindho dadi isi.',
          bubbleStyle: { left: '62%', top: '29%', width: '32%' },
        },
      ],
      question: 'Ing parikan rong gatra, pesene biasane ana ing baris pira?',
    },
  },
  {
    title: 'Tuladha Parikan Patang Gatra',
    short: 'Conto papat larik.',
    body:
      'Parikan patang gatra dumadi saka papat baris. Rong baris wiwitan minangka sampiran, rong baris pungkasan minangka isi.',
    example: 'Esuk-esuk tuku roti,\nRoti legi isi srikaya,\nYen kepengin dadi murti,\nSinau basa lan budaya.',
    audioSrc: '/assets/sounds/Tuladha Parikan Patang Gatra.mp3',
    enrichment: {
      keyPoints: [
        'Parikan patang gatra dumadi saka papat baris.',
        'Rong baris wiwitan dadi sampiran.',
        'Rong baris pungkasan dadi isi utawa pesen.',
      ],
      analysis: [
        { label: 'Sampiran 1', text: 'Esuk-esuk tuku roti' },
        { label: 'Sampiran 2', text: 'Roti legi isi srikaya' },
        { label: 'Isi 1', text: 'Yen kepengin dadi murti' },
        { label: 'Isi 2', text: 'Sinau basa lan budaya' },
        { label: 'Pesen', text: 'Yen kepengin dadi pribadi sing becik, siswa kudu sinau basa lan budaya.' },
      ],
      note: 'Patang gatra menehi ruang luwih akeh kanggo ngembangake sampiran lan isi.',
    },
    stimulus: {
      image: '/assets/Komik/Comic_Materi9.png',
      bubbles: [
        {
          speaker: 'Dimas',
          text: 'Saiki tantangan pungkasan: parikan patang gatra!',
          bubbleStyle: { left: '28%', top: '5%', width: '32%' },
        },
        {
          speaker: 'Rara',
          text: 'Elinga, rong baris wiwitan sampiran, rong baris pungkasan isi.',
          bubbleStyle: { left: '80%', top: '-10%', width: '4%' },
        },
      ],
      question: 'Yen ana papat gatra, kepiye carane mbedakake sampiran lan isi?',
    },
  },
];
