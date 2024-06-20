import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Display from './components/Display';
import { HomePage, DestinationPage, CrewPage, TechnologyPage } from './pages/Pages';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Display />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: 'destination',
                element: <DestinationPage />,
            },
            {
                path: 'crew',
                element: <CrewPage />,
            },
            {
                path: 'technology',
                element: <TechnologyPage />,
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
