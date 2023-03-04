import Breakingnews from "../components/breakngnews/Breakingnews";
import NotFoundPage from "../components/notFoundPage/NotFoundPage";
import DetailsPage from "../components/shared/detailsPage/DetailsPage";
import About from "../pages/about/About";
import AllNews from "../pages/allNews/AllNews";
import Arts from "../pages/arts/Arts";
import Culture from "../pages/culture/Culture";
import Entertainment from "../pages/entertainment/Entertainment";
import Internationalnews from "../pages/internationalnews/Internationalnews";
import Regularnews from "../pages/regularnews/Regularnews";
import Sports from "../pages/sports/Sports";
const { createBrowserRouter } = require("react-router-dom");
const { default: Blog } = require("../components/blog/Blog");
const { default: Main } = require("../layout/Main");

export const router = createBrowserRouter([

    {
        path: '/',
        element:<Main></Main>,
        errorElement: <NotFoundPage></NotFoundPage>,
        children:[
            {
                path: '/',
                element:<Breakingnews></Breakingnews>

            },
            {
                path: '/blog',
                element:<Blog></Blog>
            },
            {
                path: '/about',
                element:<About></About>
            },
            {
                path: '/breaking-news',
                element:<Breakingnews></Breakingnews>
            },
            {
                path: '/regular-news',
                element:<Regularnews></Regularnews>
            },
            {
                path: '/international-news', // <Link to='/kjdlsjk'> 
                element:<Internationalnews></Internationalnews>
                
            },
            {
                path: '/sports',
                element:<Sports></Sports>
            },
            {
                path: '/entertainment',
                element:<Entertainment></Entertainment>
            },
            {
                path: '/culture',
                element:<Culture></Culture>
            },
            {
                path: '/arts',
                element:<Arts></Arts>
            },
            {
                path: '/all-news',
                element:<AllNews></AllNews>
            },
            {
                path: `/details/:id`,
                element: <DetailsPage></DetailsPage>,
                loader: ({params}) => fetch(`https://newsline-server-side.vercel.app/details/${params.id}`)
            }
        ]
    }
])