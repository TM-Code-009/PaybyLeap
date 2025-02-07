import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Page from "../Pages/Landingpage/Landingpage";



export const Mainrouter = createBrowserRouter([
    {
        path: "/",
        element:<Layout/>,
        children:[
            {path:"/",element:<Page/>}
        ]
    }
])