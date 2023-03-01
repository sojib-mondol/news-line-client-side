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
                element:<Home></Home>
            },
            {
                path: '/blog',
                element:<Blog></Blog>
            }
        ]
    }
])