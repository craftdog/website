import React from 'react';
import WireframeImage from "../../assets/Hero.png";
import './HeaderImage.css'

class HeaderImage extends React.Component {
    state = {

    };

    render() {
        return(
            <>
                <img src={WireframeImage} style={{width: "100%"}} alt=""/>
            </>
        );
    }
}

export default HeaderImage;