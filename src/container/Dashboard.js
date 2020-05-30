import React from "react";
import Navbar from "../components/Navbar";
import AboutMe from "../components/AboutMe";

class Dashboard extends React.Component{
    render(){
        return(
            <div>
                <Navbar />
                <AboutMe />
            </div>
        )
    }

}

export default Dashboard;