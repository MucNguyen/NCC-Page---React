import Home from '../components/pages/Home';
import Services from '../components/pages/Services';
import News from '../components/pages/News';
import Blog from '../components/pages/Blog';
import Contact from '../components/pages/Contact';

const publicRoutes = [
    { path: '/', component: Home, name: 'Home' },
    { path: '/services', component: Services, name: 'Services' },
    { path: '/news', component: News, name: 'News' },
    { path: '/blog', component: Blog, name: 'Blog' },
    { path: '/contact', component: Contact, name: 'Contact' },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
