// routes
import { PATH_PAGE } from '../../routes/paths';
// components
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const ICON_SIZE = {
  width: 22,
  height: 22,
};

const menuConfig = [
  {
    title: 'Ana Sayfa',
    titleEn:'Home',
    icon: <Iconify icon={'eva:home-fill'} {...ICON_SIZE} />,
    path: '/',
  },
  {
    title: 'Ürünlerimiz',
    titleEn: 'Contact',
    icon: <Iconify icon={'eva:book-open-fill'} {...ICON_SIZE} />,
    path: PATH_PAGE.contact,
    children: [
      {
        subheader: 'Ürünlerimiz',
        subheaderEn:'Products',
        items: [
          { title: 'SmartMoles', titleEn: 'AirMoles', path: PATH_PAGE.moles },
          { title: 'SmartCapillarity', titleEn: 'SmartCapillarity', path: PATH_PAGE.smartCapillarity },
          { title: 'SmartRoot', titleEn: 'SmartRoot', path: PATH_PAGE.smartRoot },
          { title: 'SmartValves', titleEn: 'SmartValves', path: PATH_PAGE.smartValves },
          { title: 'AirMoles', titleEn: 'AirMoles', path: PATH_PAGE.airMoles },
          { title: 'SmartFarm', titleEn: 'SmartFarm', path: PATH_PAGE.smartFarm },
          { title: 'SmartWaterlevel', titleEn: 'SmartWaterlevel', path: PATH_PAGE.smartWaterlevel },
        ],
      }
    ]
  },
  {
    title: 'Menü',
    titleEn:'Menu',
    path: '/pages',
    icon: <Iconify icon={'eva:file-fill'} {...ICON_SIZE} />,
    children: [
      {
        subheader: 'Kurumsal',
        subheaderEn: 'Corporate',
        items: [
          { title: 'Hakkımızda', titleEn:'About Us', path: PATH_PAGE.about },
          { title: 'Projelerimiz', titleEn:'Our Projects', path: PATH_PAGE.ourprojects },
          { title: 'Bayilik Başvurusu', titleEn:'Dealership Application', path: PATH_PAGE.vendor },
          { title: 'Broşür', titleEn:'Brochure', path: PATH_PAGE.pdf },
          // { title: 'Kariyer', titleEn:'Career', path: PATH_PAGE.career },
        ],
      },
      {
        subheader: 'Ürünlerimiz',
        subheaderEn:'Products',
        items: [
          { title: 'SmartMoles', titleEn: 'AirMoles', path: PATH_PAGE.moles },
          { title: 'SmartCapillarity', titleEn: 'SmartCapillarity', path: PATH_PAGE.smartCapillarity },
          { title: 'SmartRoot', titleEn: 'SmartRoot', path: PATH_PAGE.smartRoot },
          { title: 'SmartValves', titleEn: 'SmartValves', path: PATH_PAGE.smartValves },
          { title: 'AirMoles', titleEn: 'AirMoles', path: PATH_PAGE.airMoles },
          { title: 'SmartFarm', titleEn: 'SmartFarm', path: PATH_PAGE.smartFarm },
          { title: 'SmartWaterlevel', titleEn: 'SmartWaterlevel', path: PATH_PAGE.smartWaterlevel },
        ],
      },
      {
        subheader: 'Galeri',
        subheaderEn: 'Gallery',
        items: [
          { title: 'Fotoğraf Galerisi', titleEn:'Photo Gallery', path: PATH_PAGE.gallery },
          { title: 'Video Galerisi', titleEn:'Video Gallery', path: PATH_PAGE.video },
        ],
      },
      {
        subheader: 'Haberler',
        subheaderEn: 'News',
        items: [
          { title: 'Yazılı Basın', titleEn:'News', path: PATH_PAGE.mediaPic },
          { title: 'Görsel Basın', titleEn:'Media', path: PATH_PAGE.mediaVideo },
        ],
      },
    ],
  },
  {
    title: 'İletişim',
    titleEn: 'Contact',
    icon: <Iconify icon={'eva:book-open-fill'} {...ICON_SIZE} />,
    path: PATH_PAGE.contact,
  },
];

export default menuConfig;
