import React from 'react';
import { Outlet } from 'react-router-dom';
import Category from '../components/shared/category/Category';
import Footer from '../components/shared/footer/Footer';
import Navbar from '../components/shared/navbar/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Category></Category>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;