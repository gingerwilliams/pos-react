import Dashboard from 'views/Dashboard/Dashboard.jsx';
import Buttons from 'views/Components/Buttons.jsx';
import GridSystem from 'views/Components/GridSystem.jsx';
import Panels from 'views/Components/Panels.jsx';
import SweetAlert from 'views/Components/SweetAlertPage.jsx';
import Notifications from 'views/Components/Notifications.jsx';
import Icons from 'views/Components/Icons.jsx';
import Typography from 'views/Components/Typography.jsx';
import RegularForms from 'views/Forms/RegularForms.jsx';
import ExtendedForms from 'views/Forms/ExtendedForms.jsx';
import ValidationForms from 'views/Forms/ValidationForms.jsx';
import RegularTables from 'views/Tables/RegularTables.jsx';
import ExtendedTables from 'views/Tables/ExtendedTables.jsx';
import DataTables from 'views/Tables/DataTables.jsx';
import Charts from 'views/Charts/Charts.jsx';
import Calendar from 'views/Calendar/Calendar.jsx';
import UserPage from 'views/Pages/UserPage.jsx';

import ProductAddForms from 'views/Forms/AddProductForms.jsx';

import pagesRoutes from './pages.jsx';

var pages = [{ path: "/pages/user-page", name: "User Page", mini: "UP", component: UserPage }].concat(pagesRoutes);

var dashRoutes = [
    { path: "/dashboard", name: "Bảng tin", icon: "pe-7s-graph", component: Dashboard },
    { path: "/bill", name: "Hóa đơn", icon: "pe-7s-graph", component: DataTables },
    { collapse: true, path: "/product", name: "Hàng hóa", state: "openComponents", icon: "pe-7s-plugin", views:[
        { path: "/product/manager", name: "Quản lý", mini: "B", component: DataTables },
        { path: "/product/add", name: "Thêm mới", mini: "GS", component: ProductAddForms }]
    },
    { collapse: true, path: "/components", name: "Hóa đơn", state: "openComponents", icon: "pe-7s-plugin", views:[
        { path: "/components/buttons", name: "Buttons", mini: "B", component: Buttons },
        { path: "/components/grid-system", name: "Grid System", mini: "GS", component: GridSystem },
        { path: "/components/panels", name: "Panels", mini: "P", component: Panels },
        { path: "/components/sweet-alert", name: "Sweet Alert", mini: "SA", component: SweetAlert },
        { path: "/components/notifications", name: "Notifications", mini: "N", component: Notifications },
        { path: "/components/icons", name: "Icons", mini: "I", component: Icons },
        { path: "/components/typography", name: "Typography", mini: "T", component: Typography }]
    },
    { collapse: true, path: "/forms", name: "Forms", state: "openForms", icon: "pe-7s-note2", views:
        [{ path: "/forms/regular-forms", name: "Regular Forms", mini: "RF", component: RegularForms },
        { path: "/forms/extended-forms", name: "Extended Forms", mini: "EF", component: ExtendedForms },
        { path: "/forms/validation-forms", name: "Validation Forms", mini: "VF", component: ValidationForms }]
    },
    { collapse: true, path: "/tables", name: "Tables", state: "openTables", icon: "pe-7s-news-paper", views:
        [{ path: "/tables/regular-tables", name: "Regular Tables", mini: "RT", component: RegularTables },
        { path: "/tables/extended-tables", name: "Extended Tables", mini: "ET", component: ExtendedTables },
        { path: "/tables/data-tables", name: "Data Tables", mini: "DT", component: DataTables }]
    },
    { path: "/charts", name: "Charts", icon: "pe-7s-graph1", component: Charts },
    { path: "/calendar", name: "Calendar", icon: "pe-7s-date", component: Calendar },
    { collapse: true, path: "/pages", name: "Pages", state: "openPages", icon:"pe-7s-gift", views:
        pages
    },
    { redirect: true, path: "/", pathTo: "/dashboard", name: "Dashboard" }
];
export default dashRoutes;