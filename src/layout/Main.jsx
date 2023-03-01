import React from 'react';
import { Outlet } from 'react-router-dom';
import Category from '../components/shared/category/Category';
import Navbar from '../components/shared/navbar/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Category></Category>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;