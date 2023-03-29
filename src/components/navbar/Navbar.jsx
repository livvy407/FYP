import "./navbar.scss"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenOutlinedIcon from '@mui/icons-material/FullscreenOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="search">
                    <input type="text" placeholder="Search..."/>
                    <SearchOutlinedIcon/>
                </div>
                <div className="items">
                    <div className="item">
                        <LanguageOutlinedIcon className="icon"/>
                        English
                    </div>
                    <div className="item">
                        <DarkModeOutlinedIcon className="icon"/>
                    </div>
                    <div className="item">
                        <FullscreenOutlinedIcon className="icon"/>
                    </div>
                    <div className="item">
                        <NotificationsNoneOutlinedIcon className="icon"/>
                        <div className="counter">1</div>
                    </div>
                    <div className="item">
                        <ChatBubbleOutlineOutlinedIcon className="icon"/>
                        <div className="counter">2</div>
                    </div>
                    <div className="item">
                        <FormatListBulletedOutlinedIcon className="icon"/>
                    </div>
                    <div className="item">
                        <img 
                            src="data:image/jpeg;base64,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"
                            alt=""
                            className="avatar"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar