import { useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  
  const getPageName = (pathname) => {
    const routes = {
      '/': 'Home',
      '/leadership': 'Leadership & Experience',
      '/publications': 'Publications & Patents',
      '/projects': 'Projects',
      '/education': 'Education & Credentials',
      '/about': 'About',
      '/work-with-me': 'Work with Me'
    };
    
    // Handle HashRouter paths
    const cleanPath = pathname.replace('#', '');
    return routes[cleanPath] || 'Home';
  };

  const currentPage = getPageName(location.pathname);

  return (
    <div className="w-full flex flex-col content-between gap-4 bg-black justify-between py-6 px-20">
      <div className="border-t-2 border-white w-full" />
      <div className="flex justify-between items-center px-10">
        <div className="text-lg font-medium">
          You're Here: <span className="font-semibold">{currentPage}</span>
        </div>
        <div className="text-lg">
          © 2025 Sourjya Sarkar. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
