import "./single.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Chart from "../../components/chart/Chart"
import List from "../../components/table/Table"

const Single = () => {
    return (
        <div className="single">
            <Sidebar/>
            <div className="singleContainer">
                <Navbar/>
                <div className="top">
                    <div className="left">
                        <div className="editButton">Edit</div>
                        <h1 className="title">Information</h1>
                        <div className="item">
                            <img src="https://www.gcit.edu.bt/wp-content/uploads/sites/3/2021/05/NGAWANG-YESHEY.jpg"
                            alt="" 
                            className="itemImg" 
                        />
                        <div className="details">
                                <h1 className="itemTitle">Ngawang yeshey</h1>
                                <div className="detailItem">
                                    <span className="itemKey">Email:</span>
                                    <span className="itemValue">12190067.gcit@rub.edu.bt</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Phone:</span>
                                    <span className="itemValue">+1 2313 12 14</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Address</span>
                                    <span className="itemValue">Gyalposhing College Of Information And Technology, Gyalposhing</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Country:</span>
                                    <span className="itemValue">Bhutan</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="right">
                        <Chart aspect={3 / 1.3} title="User Spending ( Last 6 Months )" />
                    </div>
                </div>
                <div className="bottom">
                    <h1 className="title">Last Transaction</h1>
                    <List/>
                </div>
            </div>
        </div>
    );
};

export default Single;