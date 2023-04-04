import "./new.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import { useState } from "react";
import { CleaningServices } from "@mui/icons-material";
// import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';

const New = ({inputs,title}) => {
    const [file, setFile] = useState("");
    
    return (
        <div className="new">
            <Sidebar/>
            <div className="newContainer">
                <Navbar/>
                <div className="top">
                    <h1>{title}</h1>
                </div>
                <div className="bottom">
                    <div className="left">
                        <img 
                            src={
                                file
                                ? URL.createObjectURL(file)
                                : "data:image/png;base64,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"
                            } 
                            alt="" />
                    </div>
                    <div className="right">
                        <form>
                        <div className="formInput">
                            <lable htmlFor="file">
                                Image: 
                                {/* <DriveFolderUploadOutlinedIcon className="icon" /> */}
                            </lable>
                            <input type="file" id="file" onChange={e=>setFile(e.target.files[0])} 
                            style={{ border: "none" }}
                            />
                        </div>

                        {inputs.map((input) => (
                            <div className="formInput" key={input.id}>
                            <lable>{input.label}</lable>
                            <input type={input.type} placeholder={input.placeholder} />
                        </div>
                        ))}
                        <button>Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default New;