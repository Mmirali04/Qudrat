import { useLocation, useNavigate } from 'react-router-dom';

// Navigates to a page ("/projects") or to a section on the home page ("#contacts"),
// working from any route.
export default function useSiteNav() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (href) => {
    if (href.startsWith('/')) {
      navigate(href);
      window.scrollTo({ top: 0 });
      return;
    }
    if (pathname === '/') {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/' + href);
    }
  };
}
