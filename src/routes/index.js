import { Suspense, lazy } from 'react';
import { Navigate, useRoutes, useLocation } from 'react-router-dom';
// layouts
import MainLayout from '../layouts/main';
import LogoOnlyLayout from '../layouts/LogoOnlyLayout';
// components
import LoadingScreen from '../components/LoadingScreen';

// ----------------------------------------------------------------------

const Loadable = (Component) => (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { pathname } = useLocation();

  return (
    <Suspense fallback={<LoadingScreen isDashboard={pathname.includes('/dashboard')} />}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([

    // Main Routes
    {
      path: '*',
      element: <LogoOnlyLayout />,
      children: [
        { path: 'coming-soon', element: <ComingSoon /> },
        { path: 'maintenance', element: <Maintenance /> },
        { path: 'pricing', element: <Pricing /> },
        { path: 'payment', element: <Payment /> },
        { path: '500', element: <Page500 /> },
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" replace /> },
      ],
    },
    {
      path: '/',
      element: <MainLayout />,
      children: [
        { element: <HomePage />, index: true },
        { path: 'hakkimizda', element: <About /> },
        { path: 'iletisim', element: <Contact /> },
        { path: 'faqs', element: <Faqs /> },
        { path: 'projelerimiz', element: <OurProjects /> },
        { path: 'bayilik-basvurusu', element: <Vendor />},
        { path: 'galeri', element: <Gallery /> },
        { path: 'galeri/:name', element: <GalleryDetail />},
        { path: 'video', element: <Video />},
        { path: 'yazili-basin', element: <MediaPic />},
        { path: 'yazili-basin/:name', element: <MediaPicDetail />},
        { path: 'gorsel-basin', element: <MediaVideo />},
        { path: 'brosur', element: <Pdf />},
        { path: 'smart-capillarity', element: <SmartCapillarity />},
        { path: 'smart-root', element: <SmartRoot />},
        { path: 'smart-waterlevel', element: <SmartWaterlevel />},
        { path: 'smart-farm', element: <SmartFarm />},
        { path: 'smart-valves', element: <SmartValves />},
      ],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}

// IMPORT COMPONENTS


// Main
const HomePage = Loadable(lazy(() => import('../pages/home/Home')));
const About = Loadable(lazy(() => import('../pages/home/About')));
const Contact = Loadable(lazy(() => import('../pages/home/Contact')));
const Pdf = Loadable(lazy(() => import('../pages/home/Pdf')));
const OurProjects = Loadable(lazy(() => import('../pages/home/OurProjects')));
const Faqs = Loadable(lazy(() => import('../pages/home/Faqs')));
const Vendor = Loadable(lazy(() => import('../pages/home/Vendor')));
const ComingSoon = Loadable(lazy(() => import('../pages/home/ComingSoon')));
const Maintenance = Loadable(lazy(() => import('../pages/home/Maintenance')));
const Pricing = Loadable(lazy(() => import('../pages/home/Pricing')));
const Payment = Loadable(lazy(() => import('../pages/home/Payment')));
const Page500 = Loadable(lazy(() => import('../pages/Page500')));
const NotFound = Loadable(lazy(() => import('../pages/Page404')));

// Product
const SmartCapillarity = Loadable(lazy(() => import('../pages/home/product/SmartCapillarity')));
const SmartRoot = Loadable(lazy(() => import('../pages/home/product/SmartRoot')));
const SmartWaterlevel = Loadable(lazy(() => import('../pages/home/product/SmartWaterlevel')));
const SmartFarm = Loadable(lazy(() => import('../pages/home/product/SmartFarm')));
const SmartValves = Loadable(lazy(() => import('../pages/home/product/SmartValves')));

// Gallery
const Gallery = Loadable(lazy(() => import('../pages/home/gallery/Gallery')));
const GalleryDetail = Loadable(lazy(() => import('../pages/home/gallery/GalleryDetail')));
const Video = Loadable(lazy(() => import('../pages/home/video/Video')));

// Media
const MediaPic = Loadable(lazy(() => import('../pages/home/mediaPic/MediaPic')));
const MediaPicDetail = Loadable(lazy(() => import('../pages/home/mediaPic/MediaPicDetail')));
const MediaVideo = Loadable(lazy(() => import('../pages/home/mediaVideo/MediaVideo')));
