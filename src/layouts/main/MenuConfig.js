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
    icon: <Iconify icon={'eva:home-fill'} {...ICON_SIZE} />,
    path: '/',
  },
  {
    title: 'Menüler',
    path: '/pages',
    icon: <Iconify icon={'eva:file-fill'} {...ICON_SIZE} />,
    children: [
      {
        subheader: 'Kurumsal',
        items: [
          { title: 'Hakkımızda', path: PATH_PAGE.about },
          { title: 'Projelerimiz', path: PATH_PAGE.ourprojects },
          { title: 'Bayilik Başvurusu', path: PATH_PAGE.vendor },
          { title: 'Broşür', path: PATH_PAGE.pdf },
        ],
      },
      {
        subheader: 'Ürünlerimiz',
        items: [
          { title: 'SmartCapillarity', path: PATH_PAGE.smartCapillarity },
          { title: 'SmartRoot', path: PATH_PAGE.smartRoot },
          { title: 'SmartFarm', path: PATH_PAGE.smartFarm },
          { title: 'SmartValves', path: PATH_PAGE.smartValves },
          { title: 'SmartWaterlevel', path: PATH_PAGE.smartWaterlevel },
          { title: 'AirMoles', path: PATH_PAGE.airMoles },
        ],
      },
      {
        subheader: 'Galeri',
        items: [
          { title: 'Fotoğraf Galerisi', path: PATH_PAGE.gallery },
          { title: 'Video Galerisi', path: PATH_PAGE.video },
        ],
      },
      {
        subheader: 'Haberler',
        items: [
          { title: 'Yazılı Basın', path: PATH_PAGE.mediaPic },
          { title: 'Görsel Basın', path: PATH_PAGE.mediaVideo },
        ],
      },
    ],
  },
  {
    title: 'İletişim',
    icon: <Iconify icon={'eva:book-open-fill'} {...ICON_SIZE} />,
    path: PATH_PAGE.contact,
  },
];

export default menuConfig;
