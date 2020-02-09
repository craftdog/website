import React from 'react';
import HeroPNG from "../../assets/Hero2.png";
import HeroVector from "../../Icons/Hero"
import './HeaderImage.css'

class HeaderImage extends React.Component {
    state = {

    };

    render() {
        return(
            <>
                <img src={HeroPNG} style={{width: "100%"}} alt=""/>
                {/*<HeroVector />*/}
            </>
        );
    }
}

export default HeaderImage;