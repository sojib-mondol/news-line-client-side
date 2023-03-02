import Breakingnews from "../components/breakngnews/Breakingnews";
import AllNews from "../pages/allNews/AllNews";
import Arts from "../pages/arts/Arts";
import Culture from "../pages/culture/Culture";
import Entertainment from "../pages/entertainment/Entertainment";
import Internationalnews from "../pages/internationalnews/Internationalnews";
import Regularnews from "../pages/regularnews/Regularnews";
import Sports from "../pages/sports/Sports";

const { createBrowserRouter } = require("react-router-dom");
const { default: Blog } = require("../components/blog/Blog");
const { default: Home } = require("../components/home/Home");
const { default: Main } = require("../layout/Main");

export const router = createBrowserRouter([

    {
        path: '/',
        element:<Main></Main>,
        children:[
            {
                path: '/',
                element:<Breakingnews></Breakingnews>
            },
            {
                path: 'blog',
                element:<Blog></Blog>
            },
            {
                path: 'breaking-news',
                element:<Breakingnews></Breakingnews>
            },
            {
                path: 'regular-news',
                element:<Regularnews></Regularnews>
            },
            {
                path: 'international-news',
                element:<Internationalnews></Internationalnews>
            },
            {
                path: 'sports',
                element:<Sports></Sports>
            },
            {
                path: 'entertainment',
                element:<Entertainment></Entertainment>
            },
            {
                path: 'culture',
                element:<Culture></Culture>
            },
            {
                path: 'arts',
                element:<Arts></Arts>
            },
            {
                path: 'all-news',
                element:<AllNews></AllNews>
            },
        ]
    }
])