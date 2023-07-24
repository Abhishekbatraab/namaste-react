import React from "react";
import ReactDOM from 'react-dom/client';
import Header from "./components/Header";
import Body from './components/Body';
import About from "./components/About";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./components/Contact";
import Error from "./components/Error";
/**
 * Header
 *  -Logo
 *  -Nav Items
 * Body
 *  - Search
 *  - RestaurantContainer
 *      -RestaurantCard
 *          -img
 *          - Name of Res, Star Rating, Cuisines, etc.
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>)
}

const appRouter = createBrowserRouter([{
        path: "/",
        element: <AppLayout />,
        children: [{
                path: "/about",
                element: <About /> 
            },
            {
                path: "/contact",
                element: <Contact /> 
            }
        ],
        errorElement: <Error />
    }, 
    
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading)// it will replace whatever we have in the root
root.render(<RouterProvider router={appRouter}/>);
