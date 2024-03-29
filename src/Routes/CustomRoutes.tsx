import { createBrowserRouter } from 'react-router-dom';
import Details from '../components/Details.tsx';
import App from '../App.tsx'
import HelpPage from '../Help.tsx';


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "/home",
        element: <App />
    },
    {
        path: "/details",
        element: <Details />
    },
    {
        path: "/help",
        element: <HelpPage />
    }
])

export default router;