import LoginSignup from './LoginSignup'
// import React from "react";
// // nodejs library that concatenates classes
// import classNames from "classnames";
// // @material-ui/core components
// import { makeStyles } from "@material-ui/core/styles";

// // @material-ui/icons

// // core components
// import Header from "components/Header/Header.js";
// import Footer from "components/Footer/Footer.js";
// import GridContainer from "components/Grid/GridContainer.js";
// import GridItem from "components/Grid/GridItem.js";
// import Button from "components/CustomButtons/Button.js";
// import HeaderLinks from "components/Header/HeaderLinks.js";
// import Parallax from "components/Parallax/Parallax.js";

// import styles from "assets/jss/material-kit-react/views/landingPage.js";

// // Sections for this page
// import ProductSection from "/LandingPage/Sections/ProductSection.js";
// import TeamSection from "/LandingPage/Sections/TeamSection.js";
// import WorkSection from "/LandingPage/Sections/WorkSection.js";

// const dashboardRoutes = [];

// const useStyles = makeStyles(styles);


function LandingPage({ models, users, setUsers }) {
    return (
        <div className="landing-page">
            <h1 style={{ fontFamily: 'Serif' }} >
                <i>Welcome to Your Personal Virtual Fitting Room!</i>
            </h1>
            <LoginSignup models={models} users={users} setUsers={setUsers} />
        </div>
    )
}

export default LandingPage;