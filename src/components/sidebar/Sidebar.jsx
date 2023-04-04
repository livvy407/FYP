import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import ViewStreamOutlinedIcon from '@mui/icons-material/ViewStreamOutlined';
import DeliveryDiningOutlinedIcon from '@mui/icons-material/DeliveryDiningOutlined';
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import {Link} from "react-router-dom"
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";

const Sidebar = () => {
    const { dispatch } = useContext(DarkModeContext);
    return (
        <div className="sidebar">
            <div className="top">
                <Link to="/" style={{textDecoration:"none"}}>
                    <span className="logo">Pemahotel</span>
                </Link>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <li>
                        <DashboardIcon className="icon"/>
                        <span>Dashboard</span>
                    </li>
                    <p className="title">LISTS</p>
                    <Link to="/users" style={{ textDecoration: "none" }}>
                        <li>
                            <PersonOutlineIcon className="icon"/>
                            <span>Users</span>
                        </li>
                    </Link>
                    <Link to="/products" style={{ textDecoration: "none" }}>
                        <li>
                            <ProductionQuantityLimitsIcon className="icon"/>
                            <span>Products</span>
                        </li>
                    </Link>
                    <li>
                        <ViewStreamOutlinedIcon className="icon"/>
                        <span>Orders</span>
                    </li>
                    <li>
                        <DeliveryDiningOutlinedIcon className="icon"/>
                        <span>Delivery</span>
                    </li>
                    <p className="title">USEFUL</p>
                    <li>
                        <QueryStatsOutlinedIcon className="icon"/>
                        <span>Stats</span>
                    </li>
                    <li>
                        <NotificationsNoneIcon className="icon"/>
                        <span>Notification</span>
                    </li>
                    <p className="title">SERVICE</p>
                    <li>
                        <SettingsSystemDaydreamIcon className="icon"/>
                        <span>System Health</span>
                    </li>
                    <li>
                        <SettingsSuggestOutlinedIcon className="icon"/>
                        <span>Settings</span>
                    </li>
                    <p className="title">USER</p>
                    <li>
                        <Person2OutlinedIcon className="icon"/>
                        <span>Profile</span>
                    </li>
                    <li>
                        <LogoutOutlinedIcon className="icon"/>
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <div className="colorOption" onClick={()=> dispatch({type:"LIGHT"})}></div>
                <div className="colorOption" onClick={()=> dispatch({type:"DARK"})}></div>
            </div>
        </div>
    );
};

export default Sidebar;