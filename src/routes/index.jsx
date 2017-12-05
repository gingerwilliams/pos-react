import Dash from 'containers/App/App.jsx';
import Components from 'containers/Components/Components.jsx';

var indexRoutes = [
    { path: "/documentation", name: "Components", component: Components },
    { path: "/", name: "Home", component: Dash }
];

export default indexRoutes;