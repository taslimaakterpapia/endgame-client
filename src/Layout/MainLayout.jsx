import React from 'react';
import Navbar from '../Page/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Page/Footer';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="min-h-[calc(100vh-250px)] 10" >
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;