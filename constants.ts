import { NavItem, ContactInfo } from './types';

export const NAV_ITEMS_DATA = {
  IT: [
    { label: 'HOME', path: '/', icon: 'fas fa-home' },
    { label: 'SU DI NOI', path: '/about', icon: 'fas fa-users' },
    { label: 'LAVORI', path: '/works', icon: 'fas fa-briefcase' },
    { label: 'CONTATTACI', path: '/contacts', icon: 'fas fa-id-badge' },
    { label: 'CERTIFICAZIONI', path: '/certifications', icon: 'far fa-folder' },
  ],
  EN: [
    { label: 'HOME', path: '/', icon: 'fas fa-home' },
    { label: 'ABOUT', path: '/about', icon: 'fas fa-users' },
    { label: 'BUILDING SITES', path: '/works', icon: 'fas fa-briefcase' },
    { label: 'CONTACT US', path: '/contacts', icon: 'fas fa-id-badge' },
    { label: 'CERTIFICATES', path: '/certifications', icon: 'far fa-folder' },
  ]
};

export const CONTACT_INFO: ContactInfo = {
  email: 'nebrodicostruzioni@virgilio.it',
  emailAlt: 'info@nebrodicostruzioni.it',
  phone: '0935 656731',
  fax: '+39 0935.656731',
  address: 'Via Nazionale 318 int.b, Troina (EN)',
  facebook: 'https://www.facebook.com/profile.php?id=61557981730257',
};

export const WORKS_DETAILS: Record<string, any> = {
  'teatro-massimo': {
    IT: {
      title: 'Teatro Massimo - Palermo',
      category: 'Restauro Monumentale',
      desc: 'Il Teatro Massimo Vittorio Emanuele, meglio noto come Teatro Massimo, di Palermo è il più grande edificio teatrale lirico d’Italia, uno dei più grandi d’Europa e terzo per ordine di grandezza architettonica dopo l’Opéra National di Parigi e la Staatsoper di Vienna. Ambienti di rappresentanza, sale, gallerie e scale monumentali circondano il teatro vero e proprio, formando un complesso architettonico di enormi proporzioni. La simmetria compositiva attorno all’asse dell’ingresso, la ripetizione costante degli elementi (colonne, finestre ad archi), la decorazione rigorosamente composta, definiscono una struttura spaziale semplice ed una volumetria chiara, armonica e geometrica, d’ispirazione greca e romana. I riferimenti formali di quest’edificio sono, oltre che nei teatri antichi, anche nelle costruzioni religiose e pubbliche romane, quali il tempio, la basilica civile e, soprattutto, le terme, nello sviluppo planimetrico dei volumi e nella copertura. Sul frontone della facciata si può leggere il motto: “L’arte rinnova i popoli e ne rivela la vita. Vano delle scene il diletto ove non miri a preparar l’avvenire“. Tratto da wikipedia, l\'enciclopedia libera, settembre 2022.',
      details: ['Restauro elementi lapidei', 'Manutenzione coperture', 'Valorizzazione artistica', 'Interventi su beni vincolati'],
      images: [
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362547/LAVORI/PL/Teatro%20Massimo/664f7a9a3a0845b5a1d6cc45_6647a7fb6b1d33a5fd8852dc_img_20180810_115143_rlgoun.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362549/LAVORI/PL/Teatro%20Massimo/664f7a9b3a0845b5a1d6cc68_6647a7fcd4a34baa6e8c1ed3_img_20180810_120107_urnukp.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362551/LAVORI/PL/Teatro%20Massimo/664f7a9a3a0845b5a1d6cc35_6647a80042df3a5356628f55_100_6104_neyirw.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362553/LAVORI/PL/Teatro%20Massimo/664f7a9a3a0845b5a1d6cc64_6647a8044836d526ce5829a9_100_7499_gqzc0x.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362554/LAVORI/PL/Teatro%20Massimo/664f7a9a3a0845b5a1d6cc2a_6647a802139a89c5b83ca0b8_100_7749_hz5jwm.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362556/LAVORI/PL/Teatro%20Massimo/664f7a9b3a0845b5a1d6cc89_6647a8086b1d33a5fd885e13_20190506_160101_wjubrv.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362558/LAVORI/PL/Teatro%20Massimo/664f7a9a3a0845b5a1d6cc31_6647a80cf19763d329b7c4dd_20190509_134058_eecjvb.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362560/LAVORI/PL/Teatro%20Massimo/664f7a9a3a0845b5a1d6cc50_6647a80b19aeb679b81b7540_100_7107_minj5m.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362562/LAVORI/PL/Teatro%20Massimo/664f7a9a3a0845b5a1d6cc53_6647a80ad4a34baa6e8c2844_20190417_124433_ppknou.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362564/LAVORI/PL/Teatro%20Massimo/664f7a9a3a0845b5a1d6cc3f_6647a80f626072e0a7ffb8f4_100_6538_kj62zp.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362566/LAVORI/PL/Teatro%20Massimo/664f7a9a3a0845b5a1d6cc5d_6647a80d0239d3a19e853314_100_6593_crmauu.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362568/LAVORI/PL/Teatro%20Massimo/664f7a9b3a0845b5a1d6cc79_6647a81323738a6fda756033_100_6311_kxfk0j.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362570/LAVORI/PL/Teatro%20Massimo/664f7a9b3a0845b5a1d6cc6b_6647a8117f92a02e647549ca_100_6457_egq6dk.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362572/LAVORI/PL/Teatro%20Massimo/664f7a9b3a0845b5a1d6cc76_6647a81223738a6fda755f95_100_6337_kyu0sa.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362574/LAVORI/PL/Teatro%20Massimo/664f7a9b3a0845b5a1d6cc86_6647a8195ae0e1934791ef18_100_6211_c7odrn.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362576/LAVORI/PL/Teatro%20Massimo/664f7a9a3a0845b5a1d6cc4a_6647a8151aebe1942bbf4225_100_6244_ob0kzt.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362578/LAVORI/PL/Teatro%20Massimo/664f7a9a3a0845b5a1d6cc42_6647a81ed4a34baa6e8c3478_100_6139_lmmnum.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362580/LAVORI/PL/Teatro%20Massimo/664f7a9a3a0845b5a1d6cc60_6647a81603b8e0391d87f89e_100_6237_z5vd7h.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362583/LAVORI/PL/Teatro%20Massimo/664f7a9b3a0845b5a1d6cc83_6647a822f3a341909e4c6109_100_6121_amill4.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362585/LAVORI/PL/Teatro%20Massimo/664f7a9b3a0845b5a1d6cc70_6647a81b9a277b9fe007686b_100_6201_lgfyhs.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362586/LAVORI/PL/Teatro%20Massimo/664f7a9a3a0845b5a1d6cc4d_6647a81d937f43a2fb10d12d_100_6176_uboyms.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362589/LAVORI/PL/Teatro%20Massimo/664f7a9b3a0845b5a1d6cc73_6647a8220239d3a19e854377_100_6126_g05mca.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362591/LAVORI/PL/Teatro%20Massimo/664f7a9b3a0845b5a1d6cc80_6647a824d4a34baa6e8c3a57_100_6118_zdbyxj.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362593/LAVORI/PL/Teatro%20Massimo/664f7a9a3a0845b5a1d6cc57_6647a8266cdd974e6e111bb4_100_7303_fjrgos.webp'
      ]
    },
    EN: {
      title: 'Teatro Massimo - Palermo',
      category: 'Monumental Restoration',
      desc: 'The Vittorio Emanuele Massimo Theater, better known as Teatro Massimo, in Palermo is the largest opera house in Italy, one of the largest in Europe, and third in order of architectural size after the Opéra National in Paris and the Staatsoper in Vienna. Representative spaces, halls, galleries, and monumental staircases surround the actual theater, forming an architectural complex of enormous proportions. The compositional symmetry around the entrance axis, the constant repetition of elements (columns, arched windows), and the rigorously composed decoration define a simple spatial structure and a clear, harmonious, and geometric volumetry, inspired by Greek and Roman architecture. Formal references for this building are found not only in ancient theaters but also in Roman religious and public constructions, such as the temple, the civil basilica, and especially the thermal baths. On the facade pediment, one can read the motto: "Art renews peoples and reveals their life. Vain is the delight of the scenes where it does not aim to prepare the future." Source: Wikipedia, September 2022.',
      details: ['Stone element restoration', 'Roof maintenance', 'Artistic enhancement', 'Heritage preservation works'],
      images: [
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362547/LAVORI/PL/Teatro%20Massimo/664f7a9a3a0845b5a1d6cc45_6647a7fb6b1d33a5fd8852dc_img_20180810_115143_rlgoun.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362549/LAVORI/PL/Teatro%20Massimo/664f7a9b3a0845b5a1d6cc68_6647a7fcd4a34baa6e8c1ed3_img_20180810_120107_urnukp.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362551/LAVORI/PL/Teatro%20Massimo/664f7a9a3a0845b5a1d6cc35_6647a80042df3a5356628f55_100_6104_neyirw.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362553/LAVORI/PL/Teatro%20Massimo/664f7a9a3a0845b5a1d6cc64_6647a8044836d526ce5829a9_100_7499_gqzc0x.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362554/LAVORI/PL/Teatro%20Massimo/664f7a9a3a0845b5a1d6cc2a_6647a802139a89c5b83ca0b8_100_7749_hz5jwm.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362556/LAVORI/PL/Teatro%20Massimo/664f7a9b3a0845b5a1d6cc89_6647a8086b1d33a5fd885e13_20190506_160101_wjubrv.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362558/LAVORI/PL/Teatro%20Massimo/664f7a9a3a0845b5a1d6cc31_6647a80cf19763d329b7c4dd_20190509_134058_eecjvb.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362560/LAVORI/PL/Teatro%20Massimo/664f7a9a3a0845b5a1d6cc50_6647a80b19aeb679b81b7540_100_7107_minj5m.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362562/LAVORI/PL/Teatro%20Massimo/664f7a9a3a0845b5a1d6cc53_6647a80ad4a34baa6e8c2844_20190417_124433_ppknou.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362564/LAVORI/PL/Teatro%20Massimo/664f7a9a3a0845b5a1d6cc3f_6647a80f626072e0a7ffb8f4_100_6538_kj62zp.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362566/LAVORI/PL/Teatro%20Massimo/664f7a9a3a0845b5a1d6cc5d_6647a80d0239d3a19e853314_100_6593_crmauu.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362568/LAVORI/PL/Teatro%20Massimo/664f7a9b3a0845b5a1d6cc79_6647a81323738a6fda756033_100_6311_kxfk0j.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362570/LAVORI/PL/Teatro%20Massimo/664f7a9b3a0845b5a1d6cc6b_6647a8117f92a02e647549ca_100_6457_egq6dk.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362572/LAVORI/PL/Teatro%20Massimo/664f7a9b3a0845b5a1d6cc76_6647a81223738a6fda755f95_100_6337_kyu0sa.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362574/LAVORI/PL/Teatro%20Massimo/664f7a9b3a0845b5a1d6cc86_6647a8195ae0e1934791ef18_100_6211_c7odrn.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362576/LAVORI/PL/Teatro%20Massimo/664f7a9a3a0845b5a1d6cc4a_6647a8151aebe1942bbf4225_100_6244_ob0kzt.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362578/LAVORI/PL/Teatro%20Massimo/664f7a9a3a0845b5a1d6cc42_6647a81ed4a34baa6e8c3478_100_6139_lmmnum.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362580/LAVORI/PL/Teatro%20Massimo/664f7a9a3a0845b5a1d6cc60_6647a81603b8e0391d87f89e_100_6237_z5vd7h.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362583/LAVORI/PL/Teatro%20Massimo/664f7a9b3a0845b5a1d6cc83_6647a822f3a341909e4c6109_100_6121_amill4.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362585/LAVORI/PL/Teatro%20Massimo/664f7a9b3a0845b5a1d6cc70_6647a81b9a277b9fe007686b_100_6201_lgfyhs.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362586/LAVORI/PL/Teatro%20Massimo/664f7a9a3a0845b5a1d6cc4d_6647a81d937f43a2fb10d12d_100_6176_uboyms.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362589/LAVORI/PL/Teatro%20Massimo/664f7a9b3a0845b5a1d6cc73_6647a8220239d3a19e854377_100_6126_g05mca.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362591/LAVORI/PL/Teatro%20Massimo/664f7a9b3a0845b5a1d6cc80_6647a824d4a34baa6e8c3a57_100_6118_zdbyxj.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362593/LAVORI/PL/Teatro%20Massimo/664f7a9a3a0845b5a1d6cc57_6647a8266cdd974e6e111bb4_100_7303_fjrgos.webp'
      ]
    }
  },
  'gangi': {
    IT: {
      title: 'Comune di Gangi',
      category: 'Verde e Arredo Urbano',
      desc: 'Lavori per la realizzazione del verde pubblico in un isolato del centro storico di Gangi. Di seguito alcune foto dell\'intervento che ha permesso di riqualificare un\'area urbana nel cuore del borgo.',
      details: ['Realizzazione verde pubblico', 'Centro Storico di Gangi', 'Sistemazione isolato urbano', 'Riqualificazione urbana'],
      images: [
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362611/LAVORI/PL/comune%20Gangi/67a9c1521f7a0bf96aa7f438_IMG_20200708_111716-p-500_qdvamk.jpg',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362613/LAVORI/PL/comune%20Gangi/67a9c1512a3dd39833d34400_IMG_20200708_111732-p-500_ng36ld.jpg',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362615/LAVORI/PL/comune%20Gangi/67a9c1519d5ca8daf851429b_IMG_20200708_111806-p-500_lloqbz.jpg',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362617/LAVORI/PL/comune%20Gangi/67a9c15138e19c7bbc33a4ed_IMG_20200708_113055-p-500_f1n7sa.jpg',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362620/LAVORI/PL/comune%20Gangi/67a9c152b5307b76c43ebb30_IMG_20200708_113135-p-500_fmv9lh.jpg',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362622/LAVORI/PL/comune%20Gangi/67a9c15174072d48ee9ae872_IMG_20200708_113101-p-500_wo5i9r.jpg'
      ]
    },
    EN: {
      title: 'Municipality of Gangi',
      category: 'Public Greenery and Street Furniture',
      desc: 'Works for the creation of public greenery in a block of the historic center of Gangi. Below are some photos of the intervention that allowed the redevelopment of an urban area in the heart of the village.',
      details: ['Public green space creation', 'Gangi Historic Center', 'Urban block arrangement', 'Urban redevelopment'],
      images: [
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362611/LAVORI/PL/comune%20Gangi/67a9c1521f7a0bf96aa7f438_IMG_20200708_111716-p-500_qdvamk.jpg',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362613/LAVORI/PL/comune%20Gangi/67a9c1512a3dd39833d34400_IMG_20200708_111732-p-500_ng36ld.jpg',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362615/LAVORI/PL/comune%20Gangi/67a9c1519d5ca8daf851429b_IMG_20200708_111806-p-500_lloqbz.jpg',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362617/LAVORI/PL/comune%20Gangi/67a9c15138e19c7bbc33a4ed_IMG_20200708_113055-p-500_f1n7sa.jpg',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362620/LAVORI/PL/comune%20Gangi/67a9c152b5307b76c43ebb30_IMG_20200708_113135-p-500_fmv9lh.jpg',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362622/LAVORI/PL/comune%20Gangi/67a9c15174072d48ee9ae872_IMG_20200708_113101-p-500_wo5i9r.jpg'
      ]
    }
  },
  'villa-bellini': {
    IT: {
      title: 'Villa Bellini - Catania',
      category: 'Comune di Catania - OG2',
      desc: 'Comune di Catania. Intervento di ripristino dell’ingresso del Giardino Bellini corrispondente all’angolo tra la Via S. Tomaselli e il Viale Regina Margherita. Categorie lavori: OG2. Questa è una galleria contenente alcune delle foto dei lavori che abbiamo effettuato nella Villa Bellini di Catania.',
      details: [
        'Ripristino ingresso storico (Angolo Via S. Tomaselli / Viale Regina Margherita)',
        'Restauro e manutenzione beni immobili tutelati',
        'Categorie lavori: OG2',
        'Committente: Comune di Catania'
      ],
      images: [
        'https://res.cloudinary.com/nebrodi/image/upload/v1770301701/LAVORI/CT/Villa%20Bellini%20CATANIA/1.jpg',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770301749/LAVORI/CT/Villa%20Bellini%20CATANIA/2.jpg',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770301751/LAVORI/CT/Villa%20Bellini%20CATANIA/3.jpg',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770301753/LAVORI/CT/Villa%20Bellini%20CATANIA/4.jpg',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770301761/LAVORI/CT/Villa%20Bellini%20CATANIA/5.jpg',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770301764/LAVORI/CT/Villa%20Bellini%20CATANIA/6.jpg',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770301767/LAVORI/CT/Villa%20Bellini%20CATANIA/7.jpg',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770301770/LAVORI/CT/Villa%20Bellini%20CATANIA/8.jpg',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770301773/LAVORI/CT/Villa%20Bellini%20CATANIA/9.jpg'
      ]
    },
    EN: {
      title: 'Villa Bellini - Catania',
      category: 'City of Catania - OG2',
      desc: 'City of Catania. Restoration of the Bellini Garden entrance at the corner of Via S. Tomaselli and Viale Regina Margherita. Work categories: OG2. This gallery contains some of the photos from the works carried out at Villa Bellini in Catania.',
      details: [
        'Historical entrance restoration (Corner Via S. Tomaselli / Viale Regina Margherita)',
        'Restoration and maintenance of protected assets',
        'Work Categories: OG2',
        'Client: Municipality of Catania'
      ],
      images: [
        'https://res.cloudinary.com/nebrodi/image/upload/v1770301701/LAVORI/CT/Villa%20Bellini%20CATANIA/1.jpg',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770301749/LAVORI/CT/Villa%20Bellini%20CATANIA/2.jpg',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770301751/LAVORI/CT/Villa%20Bellini%20CATANIA/3.jpg',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770301753/LAVORI/CT/Villa%20Bellini%20CATANIA/4.jpg',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770301761/LAVORI/CT/Villa%20Bellini%20CATANIA/5.jpg',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770301764/LAVORI/CT/Villa%20Bellini%20CATANIA/6.jpg',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770301767/LAVORI/CT/Villa%20Bellini%20CATANIA/7.jpg',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770301770/LAVORI/CT/Villa%20Bellini%20CATANIA/8.jpg',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770301773/LAVORI/CT/Villa%20Bellini%20CATANIA/9.jpg'
      ]
    }
  },
  'scuola-camporotondo': {
    IT: {
      title: 'Scuola Media - Camporotondo Etneo',
      category: 'Edilizia Scolastica',
      desc: 'Interventi di manutenzione straordinaria, efficientamento e messa in sicurezza del plesso scolastico di Camporotondo Etneo. Lavori mirati a garantire ambienti sicuri e moderni per la didattica.',
      details: ['Messa in sicurezza strutturale', 'Efficientamento energetico', 'Manutenzione prospetti'],
      images: [
        'https://res.cloudinary.com/nebrodi/image/upload/v1770302607/LAVORI/CT/Scuola%20Camporotondo%20Etneo/1.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770302609/LAVORI/CT/Scuola%20Camporotondo%20Etneo/664ceb7e4b49986f8d4c9292_6647a334dd740f83cc4ac002_100_5940-1_s6ntq4.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770302612/LAVORI/CT/Scuola%20Camporotondo%20Etneo/664ceb7e4b49986f8d4c9295_6647a3341aebe1942bbb4547_100_5941-1_cni7h0.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770302615/LAVORI/CT/Scuola%20Camporotondo%20Etneo/664ceb7e4b49986f8d4c9271_6647a34f89bdd0ed43fce00d_100_6006_czuvnk.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770302617/LAVORI/CT/Scuola%20Camporotondo%20Etneo/664ceb7e4b49986f8d4c9283_6647a3398958625170a6fb9e_100_6041-1_wmbmgd.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770302620/LAVORI/CT/Scuola%20Camporotondo%20Etneo/664ceb7e4b49986f8d4c9277_6647a371549c347880af7254_100_6032_v3xk6e.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770302623/LAVORI/CT/Scuola%20Camporotondo%20Etneo/664ceb7e4b49986f8d4c926e_6647a3345494b964d5374d26_100_6049_d9o0or.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770302625/LAVORI/CT/Scuola%20Camporotondo%20Etneo/664ceb7e4b49986f8d4c927e_6647a3712abdbbc87964bbfe_100_6028_znte8u.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770302650/LAVORI/CT/Scuola%20Camporotondo%20Etneo/664ceb7e4b49986f8d4c928d_6647a371ad6050c944139a74_100_5950_odqka1.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770302652/LAVORI/CT/Scuola%20Camporotondo%20Etneo/664ceb7e4b49986f8d4c927b_6647a371aef709a954ddb018_100_5952_jrsyz7.webp'
      ]
    },
    EN: {
      title: 'Secondary School - Camporotondo Etneo',
      category: 'School Building',
      desc: 'Extraordinary maintenance, efficiency, and safety works for the school complex of Camporotondo Etneo. Projects aimed at ensuring safe and modern environments for education.',
      details: ['Structural safety works', 'Energy efficiency', 'Facade maintenance'],
      images: [
        'https://res.cloudinary.com/nebrodi/image/upload/v1770302607/LAVORI/CT/Scuola%20Camporotondo%20Etneo/1.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770302609/LAVORI/CT/Scuola%20Camporotondo%20Etneo/664ceb7e4b49986f8d4c9292_6647a334dd740f83cc4ac002_100_5940-1_s6ntq4.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770302612/LAVORI/CT/Scuola%20Camporotondo%20Etneo/664ceb7e4b49986f8d4c9295_6647a3341aebe1942bbb4547_100_5941-1_cni7h0.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770302615/LAVORI/CT/Scuola%20Camporotondo%20Etneo/664ceb7e4b49986f8d4c9271_6647a34f89bdd0ed43fce00d_100_6006_czuvnk.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770302617/LAVORI/CT/Scuola%20Camporotondo%20Etneo/664ceb7e4b49986f8d4c9283_6647a3398958625170a6fb9e_100_6041-1_wmbmgd.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770302620/LAVORI/CT/Scuola%20Camporotondo%20Etneo/664ceb7e4b49986f8d4c9277_6647a371549c347880af7254_100_6032_v3xk6e.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770302623/LAVORI/CT/Scuola%20Camporotondo%20Etneo/664ceb7e4b49986f8d4c926e_6647a3345494b964d5374d26_100_6049_d9o0or.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770302625/LAVORI/CT/Scuola%20Camporotondo%20Etneo/664ceb7e4b49986f8d4c927e_6647a3712abdbbc87964bbfe_100_6028_znte8u.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770302650/LAVORI/CT/Scuola%20Camporotondo%20Etneo/664ceb7e4b49986f8d4c928d_6647a371ad6050c944139a74_100_5950_odqka1.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770302652/LAVORI/CT/Scuola%20Camporotondo%20Etneo/664ceb7e4b49986f8d4c927b_6647a371aef709a954ddb018_100_5952_jrsyz7.webp'
      ]
    }
  },
  'centro-camporotondo': {
    IT: {
      title: 'Centro Polifunzionale - Piano Tavola',
      category: 'Edilizia Civile',
      desc: 'Lavori di realizzazione e completamento del Centro Polifunzionale in località Piano Tavola (Camporotondo Etneo). Un\'opera destinata alla collettività per attività sociali e culturali.',
      details: ['Nuova costruzione', 'Rifiniture d\'eccellenza', 'Area Piano Tavola'],
      images: [
        'https://res.cloudinary.com/nebrodi/image/upload/v1770302301/LAVORI/CT/Centro%20Polifunzionale%20PIANO%20TAVOLA/1.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770302304/LAVORI/CT/Centro%20Polifunzionale%20PIANO%20TAVOLA/2.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770302306/LAVORI/CT/Centro%20Polifunzionale%20PIANO%20TAVOLA/3.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770302310/LAVORI/CT/Centro%20Polifunzionale%20PIANO%20TAVOLA/4.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770302317/LAVORI/CT/Centro%20Polifunzionale%20PIANO%20TAVOLA/5.webp'
      ]
    },
    EN: {
      title: 'Multipurpose Center - Piano Tavola',
      category: 'Civil Building',
      desc: 'Construction and completion works of the Multipurpose Center in Piano Tavola (Camporotondo Etneo). A project intended for the community for social and cultural activities.',
      details: ['New construction', 'High-quality finishes', 'Piano Tavola Area'],
      images: [
        'https://res.cloudinary.com/nebrodi/image/upload/v1770302301/LAVORI/CT/Centro%20Polifunzionale%20PIANO%20TAVOLA/1.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770302304/LAVORI/CT/Centro%20Polifunzionale%20PIANO%20TAVOLA/2.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770302306/LAVORI/CT/Centro%20Polifunzionale%20PIANO%20TAVOLA/3.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770302310/LAVORI/CT/Centro%20Polifunzionale%20PIANO%20TAVOLA/4.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770302317/LAVORI/CT/Centro%20Polifunzionale%20PIANO%20TAVOLA/5.webp'
      ]
    }
  },
  'modica': {
    IT: {
      title: 'Lavori a Modica',
      category: 'Verde e Arredo Urbano',
      desc: 'Di seguito ci sono alcune foto dei lavori effettuati a Modica (Rg). Lavori di realizzazione di uno spazio verde pubblico nel quartiere di S Lucia Costa.',
      details: ['Realizzazione spazio verde pubblico', 'Quartiere S. Lucia Costa', 'Sistemazione urbana e arredo', 'Categoria OS24'],
      images: [
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362782/LAVORI/RG/Modica%20-verde/664f81fc9d475d229b8ae950_6648ed808ee8b195312fcee2_04_nmvdx2.jpg',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362784/LAVORI/RG/Modica%20-verde/664f81fc9d475d229b8ae9a4_6648ed8381229b59053a7aae_07_lyrfei.jpg',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362787/LAVORI/RG/Modica%20-verde/664f81fc9d475d229b8ae956_6648ed8ab27dff08a5f039d1_19_csscwg.jpg',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362791/LAVORI/RG/Modica%20-verde/664f81fc9d475d229b8ae96c_6648ed8fdf61cafaa83704b0_100_0817_zrtmnz.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362793/LAVORI/RG/Modica%20-verde/664f81fc9d475d229b8ae9ae_6648ed94e548b6b2b8278d5e_100_1017-1_algoat.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362796/LAVORI/RG/Modica%20-verde/664f81fc9d475d229b8ae944_6648ed827715b216442916d1_06_zjc8bk.jpg',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362798/LAVORI/RG/Modica%20-verde/664f81fc9d475d229b8ae953_6648ed86f72df0dbc62ff641_16_r31m7v.jpg',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362801/LAVORI/RG/Modica%20-verde/664f81fc9d475d229b8ae9a7_6648ed8b498de847b37c3640_100_0810_soslbu.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362803/LAVORI/RG/Modica%20-verde/664f81fc9d475d229b8ae969_6648ed904ead3ff90a4f6686_100_1023_gda4qj.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362806/LAVORI/RG/Modica%20-verde/664f81fc9d475d229b8ae970_6648ed96e98b40471e182a1e_100_1021_hwuupn.webp'
      ]
    },
    EN: {
      title: 'Works in Modica',
      category: 'Greenery and Street Furniture',
      desc: 'Below are some photos of the works carried out in Modica (Rg). Construction works for a public green space in the S. Lucia Costa district.',
      details: ['Public green space construction', 'S. Lucia Costa District', 'Urban arrangement and furniture', 'Category OS24'],
      images: [
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362782/LAVORI/RG/Modica%20-verde/664f81fc9d475d229b8ae950_6648ed808ee8b195312fcee2_04_nmvdx2.jpg',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362784/LAVORI/RG/Modica%20-verde/664f81fc9d475d229b8ae9a4_6648ed8381229b59053a7aae_07_lyrfei.jpg',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362787/LAVORI/RG/Modica%20-verde/664f81fc9d475d229b8ae956_6648ed8ab27dff08a5f039d1_19_csscwg.jpg',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362791/LAVORI/RG/Modica%20-verde/664f81fc9d475d229b8ae96c_6648ed8fdf61cafaa83704b0_100_0817_zrtmnz.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362793/LAVORI/RG/Modica%20-verde/664f81fc9d475d229b8ae9ae_6648ed94e548b6b2b8278d5e_100_1017-1_algoat.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362796/LAVORI/RG/Modica%20-verde/664f81fc9d475d229b8ae944_6648ed827715b216442916d1_06_zjc8bk.jpg',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362798/LAVORI/RG/Modica%20-verde/664f81fc9d475d229b8ae953_6648ed86f72df0dbc62ff641_16_r31m7v.jpg',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362801/LAVORI/RG/Modica%20-verde/664f81fc9d475d229b8ae9a7_6648ed8b498de847b37c3640_100_0810_soslbu.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362803/LAVORI/RG/Modica%20-verde/664f81fc9d475d229b8ae969_6648ed904ead3ff90a4f6686_100_1023_gda4qj.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362806/LAVORI/RG/Modica%20-verde/664f81fc9d475d229b8ae970_6648ed96e98b40471e182a1e_100_1021_hwuupn.webp'
      ]
    }
  },
  'furci-siculo': {
    IT: {
      title: 'Comune di Furci Siculo',
      category: 'Edilizia Civile / Sociale',
      desc: 'Lavori di realizzazione e adeguamento strutture inerenti servizi di attività sociale e socio assistenziale in coerenza con la NORMATIVA 328/2000. Di seguito potrete trovare alcune foto dei lavori eseguiti.',
      details: ['Adeguamento strutture sociali', 'Normativa 328/2000', 'Servizi socio-assistenziali', 'Manutenzione straordinaria'],
      images: [
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362718/LAVORI/ME/Comune%20Furci%20Siculo/664f7e8dfef3cd48af3bad41_6648ec7632e67b2fa5c4a789_a-1_l9ockq.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362720/LAVORI/ME/Comune%20Furci%20Siculo/664f7e8dfef3cd48af3bad36_6648ec79580c4d4f25e84378_a-3_qft2jf.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362722/LAVORI/ME/Comune%20Furci%20Siculo/664f7e8dfef3cd48af3bad67_6648ec779b3bb3f7f079710d_a-2_hbj9gq.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362725/LAVORI/ME/Comune%20Furci%20Siculo/664f7e8dfef3cd48af3bad26_6648ec7d4ead3ff90a4eb3a7_a-6_wjiivu.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362727/LAVORI/ME/Comune%20Furci%20Siculo/664f7e8dfef3cd48af3bad1e_6648ec7a81229b590539b3f4_a-4_gucqk6.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362729/LAVORI/ME/Comune%20Furci%20Siculo/664f7e8dfef3cd48af3bad30_6648ec7c81229b590539b499_a-5_csyjuf.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362732/LAVORI/ME/Comune%20Furci%20Siculo/664f7e8dfef3cd48af3bad61_6648ec86ca8fb33740102538_a-9_bukudy.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362735/LAVORI/ME/Comune%20Furci%20Siculo/664f7e8dfef3cd48af3bad47_6648ec92e548b6b2b826d4db_c-2_jynclb.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362737/LAVORI/ME/Comune%20Furci%20Siculo/664f7e8dfef3cd48af3bad3e_6648ec8004b70f31a96350ca_a-7_aqhqeo.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362740/LAVORI/ME/Comune%20Furci%20Siculo/664f7e8dfef3cd48af3bad4b_6648ec9ccc3dfd2a4d72abca_b-1_haatht.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362743/LAVORI/ME/Comune%20Furci%20Siculo/664f7e8dfef3cd48af3bad6a_6648ec8374a8cc618488c41b_a-8_xepol2.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362746/LAVORI/ME/Comune%20Furci%20Siculo/664f7e8dfef3cd48af3bad55_6648eca4ec4e0ceb39554dac_b-5_whzbem.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362748/LAVORI/ME/Comune%20Furci%20Siculo/664f7e8dfef3cd48af3bad64_6648ec8a0f0417ffb51df69d_c-1_iyrgxg.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362751/LAVORI/ME/Comune%20Furci%20Siculo/664f7e8dfef3cd48af3bad2d_6648ec9404b70f31a96357e7_c-3_nscmbx.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362753/LAVORI/ME/Comune%20Furci%20Siculo/664f7e8dfef3cd48af3bad33_6648ec96bd14f570f400384f_c-4_aw2dut.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362755/LAVORI/ME/Comune%20Furci%20Siculo/664f7e8dfef3cd48af3bad51_6648ec9d12f6b04a358bf10e_b-2_mlq4mr.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362758/LAVORI/ME/Comune%20Furci%20Siculo/664f7e8dfef3cd48af3bad4e_6648ec9f4ead3ff90a4ece67_b-3_igc4vf.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362761/LAVORI/ME/Comune%20Furci%20Siculo/664f7e8dfef3cd48af3bad59_6648eca26df799ce9b848637_b-4_s7ipno.webp'
      ]
    },
    EN: {
      title: 'Municipality of Furci Siculo',
      category: 'Civil / Social Building',
      desc: 'Construction and adaptation of structures related to social and socio-assistance activity services in consistency with LAW 328/2000. Below you can find some photos of the works performed.',
      details: ['Social structures adaptation', 'Law 328/2000', 'Socio-assistance services', 'Extraordinary maintenance'],
      images: [
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362718/LAVORI/ME/Comune%20Furci%20Siculo/664f7e8dfef3cd48af3bad41_6648ec7632e67b2fa5c4a789_a-1_l9ockq.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362720/LAVORI/ME/Comune%20Furci%20Siculo/664f7e8dfef3cd48af3bad36_6648ec79580c4d4f25e84378_a-3_qft2jf.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362722/LAVORI/ME/Comune%20Furci%20Siculo/664f7e8dfef3cd48af3bad67_6648ec779b3bb3f7f079710d_a-2_hbj9gq.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362725/LAVORI/ME/Comune%20Furci%20Siculo/664f7e8dfef3cd48af3bad26_6648ec7d4ead3ff90a4eb3a7_a-6_wjiivu.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362727/LAVORI/ME/Comune%20Furci%20Siculo/664f7e8dfef3cd48af3bad1e_6648ec7a81229b590539b3f4_a-4_gucqk6.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362729/LAVORI/ME/Comune%20Furci%20Siculo/664f7e8dfef3cd48af3bad30_6648ec7c81229b590539b499_a-5_csyjuf.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362732/LAVORI/ME/Comune%20Furci%20Siculo/664f7e8dfef3cd48af3bad61_6648ec86ca8fb33740102538_a-9_bukudy.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362735/LAVORI/ME/Comune%20Furci%20Siculo/664f7e8dfef3cd48af3bad47_6648ec92e548b6b2b826d4db_c-2_jynclb.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362737/LAVORI/ME/Comune%20Furci%20Siculo/664f7e8dfef3cd48af3bad3e_6648ec8004b70f31a96350ca_a-7_aqhqeo.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362740/LAVORI/ME/Comune%20Furci%20Siculo/664f7e8dfef3cd48af3bad4b_6648ec9ccc3dfd2a4d72abca_b-1_haatht.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362743/LAVORI/ME/Comune%20Furci%20Siculo/664f7e8dfef3cd48af3bad6a_6648ec8374a8cc618488c41b_a-8_xepol2.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362746/LAVORI/ME/Comune%20Furci%20Siculo/664f7e8dfef3cd48af3bad55_6648eca4ec4e0ceb39554dac_b-5_whzbem.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362748/LAVORI/ME/Comune%20Furci%20Siculo/664f7e8dfef3cd48af3bad64_6648ec8a0f0417ffb51df69d_c-1_iyrgxg.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362751/LAVORI/ME/Comune%20Furci%20Siculo/664f7e8dfef3cd48af3bad2d_6648ec9404b70f31a96357e7_c-3_nscmbx.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362753/LAVORI/ME/Comune%20Furci%20Siculo/664f7e8dfef3cd48af3bad33_6648ec96bd14f570f400384f_c-4_aw2dut.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362755/LAVORI/ME/Comune%20Furci%20Siculo/664f7e8dfef3cd48af3bad51_6648ec9d12f6b04a358bf10e_b-2_mlq4mr.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362758/LAVORI/ME/Comune%20Furci%20Siculo/664f7e8dfef3cd48af3bad4e_6648ec9f4ead3ff90a4ece67_b-3_igc4vf.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362761/LAVORI/ME/Comune%20Furci%20Siculo/664f7e8dfef3cd48af3bad59_6648eca26df799ce9b848637_b-4_s7ipno.webp'
      ]
    }
  },
  'policlinico-messina': {
    IT: {
      title: 'Policlinico G. Martino - Messina',
      category: 'Edilizia Sanitaria / Sociale',
      desc: 'Azienda Ospedaliera Universitaria Policlinico “G. Martino” di Messina. Appalto misto di lavori e forniture con prevalenza dei primi per l’esecuzione – CHIAVI IN MANO – in unico lotto non frazionabile di tutte le opere edili e impiantistiche e le forniture necessarie per la riconversione dell’Edificio “Piccolo Comparto” per la realizzazione di un Micro-Nido aziendale.',
      details: ['Riconversione Edificio "Piccolo Comparto"', 'Realizzazione Micro-Nido aziendale', 'Appalto "Chiavi in mano"', 'Opere edili e impiantistiche integrate'],
      images: [
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362661/LAVORI/ME/Policlinico%20G%20Martino/664f7e8d74aeeb65952f7ff6_6648ecf22ce7e2f397ea4ad5_immagine_rmxe9t.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362663/LAVORI/ME/Policlinico%20G%20Martino/664f7e8d74aeeb65952f7ffb_6648ecf48f0f76144f321585_2_dwcctk.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362666/LAVORI/ME/Policlinico%20G%20Martino/664f7e8d74aeeb65952f7fce_6648ecf681229b590539ffd1_3_p2i86g.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362668/LAVORI/ME/Policlinico%20G%20Martino/664f7e8d74aeeb65952f7fd1_6648ecfd8f0f76144f321f1a_6_fldvdb.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362670/LAVORI/ME/Policlinico%20G%20Martino/664f7e8d74aeeb65952f8006_6648ecf7cc3dfd2a4d72f3ae_4_c3ohcs.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362672/LAVORI/ME/Policlinico%20G%20Martino/664f7e8d74aeeb65952f7ffe_6648ecfbec4e0ceb3955878a_111_zw06ke.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362677/LAVORI/ME/Policlinico%20G%20Martino/664f7e8d74aeeb65952f7fd9_6648ed00948912331b94999f_7_gyrgim.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362679/LAVORI/ME/Policlinico%20G%20Martino/664f7e8d74aeeb65952f7fdc_6648ed014ead3ff90a4f0788_8_uiuzoj.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362682/LAVORI/ME/Policlinico%20G%20Martino/664f7e8d74aeeb65952f7fe3_6648ed05f72df0dbc62fa571_10a_pr4hoh.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362684/LAVORI/ME/Policlinico%20G%20Martino/664f7e8d74aeeb65952f7feb_6648ed03fffbe3d64b55dc39_9a_y10lzz.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362687/LAVORI/ME/Policlinico%20G%20Martino/664f7e8d74aeeb65952f8002_6648ed17cc3dfd2a4d731284_12a_cebr48.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362690/LAVORI/ME/Policlinico%20G%20Martino/664f7e8d74aeeb65952f7ff3_6648ed0ef7746ee5b86504f1_11a_ghwqsa.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362694/LAVORI/ME/Policlinico%20G%20Martino/664f7e8d74aeeb65952f8009_6648ed228f922cf160de7749_1123_teyqza.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362696/LAVORI/ME/Policlinico%20G%20Martino/664f7e8d74aeeb65952f7fe0_6648ed1aeee1bf15c3e4a377_13a_ruxmuo.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362699/LAVORI/ME/Policlinico%20G%20Martino/664f7e8d74aeeb65952f7ff0_6648ed1c51de6ec668e16d08_14a_xkpoq2.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362702/LAVORI/ME/Policlinico%20G%20Martino/664f7e8d74aeeb65952f7fe6_6648ed204ead3ff90a4f29b5_15a_dgwu0u.webp'
      ]
    },
    EN: {
      title: 'G. Martino General Hospital - Messina',
      category: 'Healthcare / Social Building',
      desc: '"G. Martino" University Hospital of Messina. Mixed contract for works and supplies for the - TURNKEY - execution in a single lot of all building and plant works and supplies necessary for the conversion of the "Piccolo Comparto" Building for the creation of a company Micro-Nursery.',
      details: ['Conversion of "Piccolo Comparto" Building', 'Company Micro-Nursery project', '"Turnkey" contract', 'Integrated building and plant works'],
      images: [
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362661/LAVORI/ME/Policlinico%20G%20Martino/664f7e8d74aeeb65952f7ff6_6648ecf22ce7e2f397ea4ad5_immagine_rmxe9t.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362663/LAVORI/ME/Policlinico%20G%20Martino/664f7e8d74aeeb65952f7ffb_6648ecf48f0f76144f321585_2_dwcctk.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362666/LAVORI/ME/Policlinico%20G%20Martino/664f7e8d74aeeb65952f7fce_6648ecf681229b590539ffd1_3_p2i86g.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362668/LAVORI/ME/Policlinico%20G%20Martino/664f7e8d74aeeb65952f7fd1_6648ecfd8f0f76144f321f1a_6_fldvdb.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362670/LAVORI/ME/Policlinico%20G%20Martino/664f7e8d74aeeb65952f8006_6648ecf7cc3dfd2a4d72f3ae_4_c3ohcs.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362672/LAVORI/ME/Policlinico%20G%20Martino/664f7e8d74aeeb65952f7ffe_6648ecfbec4e0ceb3955878a_111_zw06ke.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362677/LAVORI/ME/Policlinico%20G%20Martino/664f7e8d74aeeb65952f7fd9_6648ed00948912331b94999f_7_gyrgim.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362679/LAVORI/ME/Policlinico%20G%20Martino/664f7e8d74aeeb65952f7fdc_6648ed014ead3ff90a4f0788_8_uiuzoj.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362682/LAVORI/ME/Policlinico%20G%20Martino/664f7e8d74aeeb65952f7fe3_6648ed05f72df0dbc62fa571_10a_pr4hoh.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362684/LAVORI/ME/Policlinico%20G%20Martino/664f7e8d74aeeb65952f7feb_6648ed03fffbe3d64b55dc39_9a_y10lzz.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362687/LAVORI/ME/Policlinico%20G%20Martino/664f7e8d74aeeb65952f8002_6648ed17cc3dfd2a4d731284_12a_cebr48.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362690/LAVORI/ME/Policlinico%20G%20Martino/664f7e8d74aeeb65952f7ff3_6648ed0ef7746ee5b86504f1_11a_ghwqsa.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362694/LAVORI/ME/Policlinico%20G%20Martino/664f7e8d74aeeb65952f8009_6648ed228f922cf160de7749_1123_teyqza.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362696/LAVORI/ME/Policlinico%20G%20Martino/664f7e8d74aeeb65952f7fe0_6648ed1aeee1bf15c3e4a377_13a_ruxmuo.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362699/LAVORI/ME/Policlinico%20G%20Martino/664f7e8d74aeeb65952f7ff0_6648ed1c51de6ec668e16d08_14a_xkpoq2.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770362702/LAVORI/ME/Policlinico%20G%20Martino/664f7e8d74aeeb65952f7fe6_6648ed204ead3ff90a4f29b5_15a_dgwu0u.webp'
      ]
    }
  },
  'posterna-troina': {
    IT: {
      title: 'Manutenzione Via Posterna - Troina',
      category: 'Manutenzione Stradale',
      desc: 'Interventi di manutenzione straordinaria e riqualificazione urbana in Via Posterna, situata nel cuore del centro storico di Troina. I lavori hanno riguardato il ripristino del manto stradale e il consolidamento dei sottoservizi.',
      details: ['Ripristino pavimentazione storica', 'Manutenzione sottoservizi', 'Consolidamento strutturale urbano'],
      images: [
        'https://res.cloudinary.com/nebrodi/image/upload/v1770303091/LAVORI/EN/manutenzione%20via%20posterna%20Troina/664f75bc6e2a77fe1abccfaf_6647573464484865d60163f4_100_4692_sofd7n.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770303094/LAVORI/EN/manutenzione%20via%20posterna%20Troina/664f75bc6e2a77fe1abccfb3_66475734b18ecbf1daff248e_100_4753_grbhpj.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770303096/LAVORI/EN/manutenzione%20via%20posterna%20Troina/664f75bc6e2a77fe1abccf9f_66475734e5c0d2ad947ad215_100_4997_ybvdvt.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770303099/LAVORI/EN/manutenzione%20via%20posterna%20Troina/664f75bc6e2a77fe1abccf9c_664757331324d69c37a2a72d_100_4732-1_ka7opb.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770303102/LAVORI/EN/manutenzione%20via%20posterna%20Troina/664f75bc6e2a77fe1abccf97_66475734aa1551b3401bbc66_100_4852_iag1qj.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770303105/LAVORI/EN/manutenzione%20via%20posterna%20Troina/664f75bc6e2a77fe1abccfab_66475734aa1551b3401bbc6e_100_4994-1_mymbxs.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770303108/LAVORI/EN/manutenzione%20via%20posterna%20Troina/664f75bc6e2a77fe1abccfb7_66475733b060fb09b09d46db_100_5003-1_b3udmw.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770303110/LAVORI/EN/manutenzione%20via%20posterna%20Troina/664f75bc6e2a77fe1abccfa3_66475734378e206d324c7009_100_5004-1_lb4qc0.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770303114/LAVORI/EN/manutenzione%20via%20posterna%20Troina/664f75bc6e2a77fe1abccfa8_66475734ed599a0ce1f7f5ac_img_0184-1_gc1xqg.webp'
      ]
    },
    EN: {
      title: 'Via Posterna Maintenance - Troina',
      category: 'Road Maintenance',
      desc: 'Extraordinary maintenance and urban redevelopment in Via Posterna, located in the heart of Troina\'s historic center. The works included road surface restoration and utility consolidation.',
      details: ['Historic pavement restoration', 'Utilities maintenance', 'Urban structural consolidation'],
      images: [
        'https://res.cloudinary.com/nebrodi/image/upload/v1770303091/LAVORI/EN/manutenzione%20via%20posterna%20Troina/664f75bc6e2a77fe1abccfaf_6647573464484865d60163f4_100_4692_sofd7n.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770303094/LAVORI/EN/manutenzione%20via%20posterna%20Troina/664f75bc6e2a77fe1abccfb3_66475734b18ecbf1daff248e_100_4753_grbhpj.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770303096/LAVORI/EN/manutenzione%20via%20posterna%20Troina/664f75bc6e2a77fe1abccf9f_66475734e5c0d2ad947ad215_100_4997_ybvdvt.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770303099/LAVORI/EN/manutenzione%20via%20posterna%20Troina/664f75bc6e2a77fe1abccf9c_664757331324d69c37a2a72d_100_4732-1_ka7opb.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770303102/LAVORI/EN/manutenzione%20via%20posterna%20Troina/664f75bc6e2a77fe1abccf97_66475734aa1551b3401bbc66_100_4852_iag1qj.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770303105/LAVORI/EN/manutenzione%20via%20posterna%20Troina/664f75bc6e2a77fe1abccfab_66475734aa1551b3401bbc6e_100_4994-1_mymbxs.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770303108/LAVORI/EN/manutenzione%20via%20posterna%20Troina/664f75bc6e2a77fe1abccfb7_66475733b060fb09b09d46db_100_5003-1_b3udmw.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770303110/LAVORI/EN/manutenzione%20via%20posterna%20Troina/664f75bc6e2a77fe1abccfa3_66475734378e206d324c7009_100_5004-1_lb4qc0.webp',
        'https://res.cloudinary.com/nebrodi/image/upload/v1770303114/LAVORI/EN/manutenzione%20via%20posterna%20Troina/664f75bc6e2a77fe1abccfa8_66475734ed599a0ce1f7f5ac_img_0184-1_gc1xqg.webp'
      ]
    }
  },
  'museo-del-satiro-danzante': {
    IT: {
      title: 'Museo del Satiro Danzante',
      category: 'Opere Museali',
      desc: 'Interventi presso il Museo del Satiro Danzante a Mazara del Vallo per l\'adeguamento e la protezione degli ambienti espositivi del celebre reperto bronzeo.',
      details: ['Consolidamento strutturale', 'Adeguamento impianti', 'Allestimento protetto'],
      images: [
        'https://images.pexels.com/photos/534151/pexels-photo-534151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/209251/pexels-photo-209251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      ]
    },
    EN: {
      title: 'Dancing Satyr Museum',
      category: 'Museum Works',
      desc: 'Interventions at the Dancing Satyr Museum in Mazara del vallo for the adaptation and protection of the exhibition environments of the famous bronze find.',
      details: ['Structural consolidation', 'System upgrading', 'Protected setup'],
      images: [
        'https://images.pexels.com/photos/534151/pexels-photo-534151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/209251/pexels-photo-209251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      ]
    }
  }
};

export const OG_CATEGORIES = [
  { code: 'OG1', description: 'Edifici civili o industriali' },
  { code: 'OG2', description: 'Restauro e manutenzione dei beni immobili sottoposti a tutela' },
  { code: 'OG3', description: 'Strade, autostrade, ponti, viadotti, ferrovie, metropolitane' },
  { code: 'OG4', description: 'Opere d\'arte nel sottosuolo' },
  { code: 'OG5', description: 'Dighe' },
  { code: 'OG6', description: 'Acquedotti, gasdotti, oleodotti, opere di irrigazione e di evacuazione' },
  { code: 'OG7', description: 'Opere marittime e lavori di dragaggio' },
  { code: 'OG8', description: 'Opere fluviali, di difesa, di sistemazione idraulica e di bonifica' },
  { code: 'OG9', description: 'Impianti per la produzione di energia elettrica' },
  { code: 'OG10', description: 'Impianti per la trasformazione alta/media tensione e pubblica illuminazione' },
  { code: 'OG11', description: 'Impianti tecnologici' },
  { code: 'OG12', description: 'Opere ed impianti di bonifica e protezione ambientale' },
  { code: 'OG13', description: 'Opere di ingegneria naturalistica' },
];

export const OS_CATEGORIES = [
  { code: 'OS1', description: 'Lavori in terra' },
  { code: 'OS2-A', description: 'Superfici decorate di beni immobili del patrimonio culturale' },
  { code: 'OS3', description: 'Impianti idrico-sanitario, cucine, lavanderie' },
  { code: 'OS21', description: 'Opere strutturali speciali' },
  { code: 'OS24', description: 'Verde e arredo urbano' },
  { code: 'OS25', description: 'Scavi archeologici' },
];