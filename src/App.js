import React from "react";
import ReactDOM from 'react-dom/client';
import Header from "./components/Header";
import Body from './components/Body';
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
            {/* Header */}
            <Header />
            {/* //Body */}
            <Body />
            {/* //Footer */}
        </div>)
}

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading)// it will replace whatever we have in the root
root.render(<AppLayout />);
