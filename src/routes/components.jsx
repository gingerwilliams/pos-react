import TutorialSection from 'containers/Components/Rows/TutorialSection.jsx';
import ButtonsSection from 'containers/Components/Rows/ButtonsSection.jsx';
import CheckboxRadioSwitchSection from 'containers/Components/Rows/CheckboxRadioSwitchSection.jsx';
import DropdownSection from 'containers/Components/Rows/DropdownSection.jsx';
import InputsSection from 'containers/Components/Rows/InputsSection.jsx';
import CustomizableSelectSection from 'containers/Components/Rows/CustomizableSelectSection.jsx';
import TagsSection from 'containers/Components/Rows/TagsSection.jsx';
import TextareaSection from 'containers/Components/Rows/TextareaSection.jsx';
import NavigationSection from 'containers/Components/Rows/NavigationSection.jsx';
import FootersSection from 'containers/Components/Rows/FooterSection.jsx';
import PaginationSection from 'containers/Components/Rows/PaginationSection.jsx';
import ProgressBarsSection from 'containers/Components/Rows/ProgressBarsSection.jsx';
import SlidersSection from 'containers/Components/Rows/SlidersSection.jsx';
import PanelsSection from 'containers/Components/Rows/PanelsSection.jsx';
import TablesSection from 'containers/Components/Rows/TablesSection.jsx';
import TabsSection from 'containers/Components/Rows/TabsSection.jsx';
import NotificationSection from 'containers/Components/Rows/NotificationSection.jsx';
import SidebarSection from 'containers/Components/Rows/SidebarSection.jsx';
import SweetAlertSection from 'containers/Components/Rows/SweetAlertSection.jsx';
import DateTimePickerSection from 'containers/Components/Rows/DateTimePickerSection.jsx';
import ChartsSection from 'containers/Components/Rows/ChartsSection.jsx';
import TooltipSection from 'containers/Components/Rows/TooltipSection.jsx';
import IconsSection from 'containers/Components/Rows/IconsSection.jsx';
import CardsSection from 'containers/Components/Rows/CardsSection.jsx';
import TasksSection from 'containers/Components/Rows/TasksSection.jsx';

var componentsRoutes = [
    { path: "/documentation/tutorial", component:  TutorialSection, name: "Tutoiral" },
    { path: "/documentation/tooltips", component:  TooltipSection, name: "Tooltip" },
    { path: "/documentation/icons", component:  IconsSection, name: "Icons" },
    { path: "/documentation/cards", component:  CardsSection, name: "Cards" },
    { path: "/documentation/buttons", component:  ButtonsSection, name: "Buttons" },
    { path: "/documentation/tasks", component:  TasksSection, name: "Tasks" },
    { path: "/documentation/checkbox-radio-switch", component:  CheckboxRadioSwitchSection, name: "Checkbox\\Radio\\Switch" },
    { path: "/documentation/dropdown", component:  DropdownSection, name: "Dropdown" },
    { path: "/documentation/inputs", component:  InputsSection, name: "Inputs" },
    { path: "/documentation/customizable-select", component:  CustomizableSelectSection, name: "Customizable Select" },
    { path: "/documentation/tags", component:  TagsSection, name: "Tags" },
    { path: "/documentation/textarea", component:  TextareaSection, name: "Textarea" },
    { path: "/documentation/navigation", component:  NavigationSection, name: "Navigation" },
    { path: "/documentation/footers", component:  FootersSection, name: "Footers" },
    { path: "/documentation/pagination", component:  PaginationSection, name: "Pagination" },
    { path: "/documentation/progress-bars", component:  ProgressBarsSection, name: "Progress Bars" },
    { path: "/documentation/sliders", component:  SlidersSection, name: "Sliders" },
    { path: "/documentation/panels", component:  PanelsSection, name: "Panels" },
    { path: "/documentation/tables", component:  TablesSection, name: "Tables" },
    { path: "/documentation/tabs", component:  TabsSection, name: "Tabs" },
    { path: "/documentation/notifications", component:  NotificationSection, name: "Notification" },
    { path: "/documentation/sidebar", component:  SidebarSection, name: "Sidebar" },
    { path: "/documentation/sweet-alert", component:  SweetAlertSection, name: "Sweet Alert" },
    { path: "/documentation/date-time-picker", component:  DateTimePickerSection, name: "DateTimePicker" },
    { path: "/documentation/charts", component:  ChartsSection, name: "Charts" },
    { redirect: true, path: "/documentation", pathTo: "/documentation/tutorial" }
];

export default componentsRoutes;