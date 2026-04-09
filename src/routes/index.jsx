import { createBrowserRouter } from "react-router";
import Main from "../layout/Main/index";
import Home from "../pages/Home/index";
import About from "../pages/About/index";
import Skills from "../pages/Skills/index";
import Project from "../pages/Projects/index";
import Experience from "../pages/Experience/index";
import Contact from "../pages/Contact/index";

const Routes = createBrowserRouter([
    {
        path: '/',
        Component: Main,
        children:[
           {
                index: true,
                Component: Home,
            },
              {
                path: 'Home',
                Component: Home,
            },
            {
                path: 'About',
                Component: About,
            },
            {
                path: 'Skills',
                Component: Skills,
            },
            {
                path: 'Project',
                Component: Project,
            },
            {
                path: 'Experience',
                Component: Experience,
            },
            {
                path: 'Contact',
                Component: Contact,
            }
        ]
    },
]);
export default Routes;